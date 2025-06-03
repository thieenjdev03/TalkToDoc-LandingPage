import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Typography } from 'antd';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const { Title } = Typography;

interface StudySession {
  id: string;
  subject: string;
  date: string;       // ISO string
  duration: number;   // phút
}

interface AppUsage {
  date: string;
  hours: number;
}

const convertMinutesToDecimalDays = (minutes: number) => minutes / (24 * 60); // 1 ngày = 1440 phút
const convertSecondsToDecimalDays = (seconds: number) => seconds / 86400; // 1 ngày = 86400 giây

const formatDecimalDays = (value: number): string => `${value.toFixed(3)} ngày`;

const Statistics: React.FC = () => {
  const [studyData, setStudyData] = useState<{ date: string; days: number }[]>([]);
  const [appUsageData, setAppUsageData] = useState<{ date: string; days: number }[]>([]);

  const loadData = () => {
    // ✅ Load học tập từ studySessions
    const storedSessions = localStorage.getItem('studySessions');
    if (storedSessions) {
      try {
        const sessions: StudySession[] = JSON.parse(storedSessions);
        const timeByDate: Record<string, number> = {};

        sessions.forEach(session => {
          const dateOnly = session.date.slice(0, 10); // YYYY-MM-DD
          timeByDate[dateOnly] = (timeByDate[dateOnly] || 0) + session.duration;
        });

        const studyChart = Object.entries(timeByDate)
          .map(([date, totalMinutes]) => ({
            date,
            days: convertMinutesToDecimalDays(totalMinutes),
          }))
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        setStudyData(studyChart);
      } catch (err) {
        console.error("Lỗi đọc studySessions:", err);
      }
    }

    // ✅ Load thời gian dùng app
    const storedAppUsage = localStorage.getItem('appUsage');
    if (storedAppUsage) {
      try {
        const usage: AppUsage[] = JSON.parse(storedAppUsage);
        const usageMap: Record<string, number> = {};

        usage.forEach(entry => {
          const entrySeconds = entry.hours * 3600;
          usageMap[entry.date] = (usageMap[entry.date] || 0) + entrySeconds;
        });

        const usageChart = Object.entries(usageMap)
          .map(([date, seconds]) => ({
            date,
            days: convertSecondsToDecimalDays(seconds),
          }))
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        setAppUsageData(usageChart);
      } catch (err) {
        console.error("Lỗi đọc appUsage:", err);
      }
    }
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(() => loadData(), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <Title level={2}>Thống kê thời gian học (theo ngày)</Title>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card title="Thời gian học & dùng app (ngày dưới dạng số thập phân)" bordered={false}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis
                  label={{ value: 'Ngày (thập phân)', angle: -90, position: 'insideLeft' }}
                  tickFormatter={(val) => val.toFixed(2)}
                />
                <Tooltip formatter={(val) => formatDecimalDays(Number(val))} />
                <Legend />

                <Line
                  type="monotone"
                  data={studyData}
                  dataKey="days"
                  name="Thời gian học"
                  stroke="#1890ff"
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  data={appUsageData}
                  dataKey="days"
                  name="Thời gian dùng app"
                  stroke="#82ca9d"
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Statistics;
