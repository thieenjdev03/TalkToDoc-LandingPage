import { Card, Row, Col, Typography, Progress } from 'antd';
import { useEffect, useState } from 'react';
import './Home.scss';
import moment from 'moment';
import { useAppUsageTracker } from '../../hooks/useAppUsageTracker';

const { Title, Text } = Typography;

interface StudySessionData {
  id: string;
  subject: string;
  date: string;
  duration: number;
}

interface SubjectProgress {
  subject: string;
  targetProgress: number;
  currentProgress: number;
}

const Home = () => {
  const [todayStudyTime, setTodayStudyTime] = useState(0);
  const [totalStudyTime, setTotalStudyTime] = useState(0);
  const [accumulatedStudyTime, setAccumulatedStudyTime] = useState(0); // Thời gian học tích lũy
  const [subjectProgress, setSubjectProgress] = useState<SubjectProgress[]>([]);

  const { todayAppTime, weeklyAppTime, totalAppTime } = useAppUsageTracker();

  useEffect(() => {
    let intervals: NodeJS.Timeout[] = [];

    const updateData = () => {
      const now = moment();
      const storedSessions = localStorage.getItem('studySessions');
      const storedTotal = localStorage.getItem('totalAccumulatedStudyTime');
      const accumulatedMinutes = storedTotal ? parseInt(storedTotal, 10) : 0;

      if (!storedSessions) {
        setTodayStudyTime(0);
        setTotalStudyTime(0);
        setAccumulatedStudyTime(accumulatedMinutes);
        setSubjectProgress([]);
        return;
      }

      const sessions: StudySessionData[] = JSON.parse(storedSessions);

      // Tính thời gian học hôm nay (bao gồm cả session đang diễn ra)
      const todaySessions = sessions.filter(s => moment(s.date).isSame(now, 'day'));
      let todayMinutes = 0;

      if (todaySessions.length > 0) {
        const lastSession = todaySessions[todaySessions.length - 1];
        todaySessions.forEach(s => {
          if (s.id === lastSession.id && s.duration === 0) {
            const start = moment(s.date);
            const diff = now.diff(start, 'minutes');
            todayMinutes += diff > 0 ? diff : 0;
          } else {
            todayMinutes += s.duration;
          }
        });
      }

      // Tổng thời gian học dựa trên danh sách session (có thể nhỏ hơn thời gian tích lũy)
      const totalMinutes = sessions.reduce((acc, cur) => acc + cur.duration, 0);

      // Tiến độ theo môn học
      const progressMap: Record<string, number> = {};
      sessions.forEach(s => {
        progressMap[s.subject] = (progressMap[s.subject] || 0) + s.duration;
      });

      const subjectDates: Record<string, string> = {};
      sessions.forEach(s => {
        if (!subjectDates[s.subject] || moment(s.date).isBefore(subjectDates[s.subject])) {
          subjectDates[s.subject] = s.date;
        }
      });

      const progressArr = Object.entries(progressMap).map(([subject, duration]) => {
        const startDate = moment(subjectDates[subject]);
        const deadline = startDate.clone().add(14, 'days');

        const totalDuration = deadline.diff(startDate, 'days');
        const passedDuration = now.diff(startDate, 'days');

        const realProgress = Math.min(100, Math.round((passedDuration / totalDuration) * 100));

        return {
          subject,
          targetProgress: realProgress,
          currentProgress: 0,
        };
      });

      setSubjectProgress(progressArr);
      setTodayStudyTime(todayMinutes);
      setTotalStudyTime(totalMinutes);
      setAccumulatedStudyTime(accumulatedMinutes);

      // Hiệu ứng tăng dần progress
      intervals.forEach(i => clearInterval(i));
      intervals = [];

      progressArr.forEach((item, index) => {
        let current = 0;
        const step = item.targetProgress / 30;

        const interval = setInterval(() => {
          current += step;
          setSubjectProgress(prev =>
            prev.map((p, i) =>
              i === index
                ? { ...p, currentProgress: Math.min(Math.round(current), item.targetProgress) }
                : p
            )
          );
          if (current >= item.targetProgress) clearInterval(interval);
        }, 20);

        intervals.push(interval);
      });
    };

    updateData(); // chạy lần đầu
    const timer = setInterval(updateData, 3000); // cập nhật mỗi 3 giây

    return () => {
      clearInterval(timer);
      intervals.forEach(i => clearInterval(i));
    };
  }, []);

  return (
    <div className="home-container">
      <Title level={2}>Tổng quan học tập</Title>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card>
            <Text strong>Thời gian học hôm nay:</Text>
            <Title level={3}>{todayStudyTime} phút</Title>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card>
            <Text strong>Tổng thời gian học (từ các session):</Text>
            <Title level={3}>{totalStudyTime} phút</Title>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card>
            <Text strong>Thời gian học tích lũy:</Text>
            <Title level={3}>{accumulatedStudyTime} phút</Title>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card>
            <Text strong>Thời gian dùng app hôm nay:</Text>
            <Title level={3}>{todayAppTime} phút</Title>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card>
            <Text strong>Tổng thời gian dùng app:</Text>
            <Title level={3}>{totalAppTime} phút</Title>
          </Card>
        </Col>

        <Col span={24}>
          <Card title="Tiến độ các môn học">
            <div className="subject-progress-list">
              {subjectProgress.map((item) => (
                <div className="subject-progress" key={item.subject}>
                  <Text>{item.subject}</Text>
                  <Progress percent={item.currentProgress} />
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
