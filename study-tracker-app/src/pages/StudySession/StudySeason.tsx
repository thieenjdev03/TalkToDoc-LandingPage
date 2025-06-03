import React, { useEffect, useState } from 'react';
import { Button, Modal, Typography, message } from 'antd';
import StudySessionTable from './components/StudySessionTable';
import StudySessionForm from './components/StudySessionForm';

const { Title } = Typography;

export interface StudySessionData {
  id: string;
  subject: string;
  date: string;
  duration: number;
}

const StudySession: React.FC = () => {
  const [sessions, setSessions] = useState<StudySessionData[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('studySessions');
    if (stored) {
      try {
        const parsed: StudySessionData[] = JSON.parse(stored);
        setSessions(parsed);
      } catch (err) {
        console.error('Lỗi parse JSON:', err);
      }
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('studySessions', JSON.stringify(sessions));
    }
  }, [sessions, isInitialized]);

  // Khi bắt đầu học: thêm session mới (duration = 0)
  const handleStartSession = (data: { subject: string; date: string }) => {
    const newSession: StudySessionData = {
      id: Date.now().toString(),
      subject: data.subject,
      date: data.date,
      duration: 0, // chưa kết thúc
    };
    setSessions(prev => [...prev, newSession]);
    setIsModalVisible(false);
  };

  // Khi kết thúc học: cập nhật thời lượng + cộng dồn vào totalAccumulatedStudyTime
  const handleFinishSession = (duration: number) => {
    setSessions(prev => {
      const updated = [...prev];
      const last = updated[updated.length - 1];
      if (last && last.duration === 0) {
        last.duration = duration;

        // Cộng dồn vào localStorage
        const storedTotal = localStorage.getItem('totalAccumulatedStudyTime');
        const previousTotal = storedTotal ? parseInt(storedTotal, 10) : 0;
        const newTotal = previousTotal + duration;
        localStorage.setItem('totalAccumulatedStudyTime', newTotal.toString());
      }
      return [...updated];
    });
    message.success('Đã cập nhật thời lượng buổi học!');
  };

  // Xoá session — không ảnh hưởng đến tổng thời gian học đã lưu
  const handleDeleteSession = (id: string) => {
    setSessions(prev => prev.filter(session => session.id !== id));
    message.success('Xóa buổi học thành công');
  };

  return (
    <div style={{ padding: 20 }}>
      <Title level={2}>Quản lý Buổi Học</Title>
      <Button type="primary" style={{ marginBottom: 16 }} onClick={() => setIsModalVisible(true)}>
        Thêm Buổi Học Mới
      </Button>

      <StudySessionTable sessions={sessions} onDelete={handleDeleteSession} />

      <Modal
        title="Thêm Buổi Học"
        open={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        destroyOnClose
      >
        <StudySessionForm
          onSubmit={handleStartSession}
          onFinishSession={handleFinishSession}
          onCancel={() => setIsModalVisible(false)}
        />
      </Modal>
    </div>
  );
};

export default StudySession;
