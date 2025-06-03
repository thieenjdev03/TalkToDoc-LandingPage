import React, { useState, useEffect } from 'react';
import { Button, Modal, Typography, message } from 'antd';
import SubjectTable from './components/SubjectTable';
import SubjectForm from './components/SubjextForm';

const { Title } = Typography;

export interface Subject {
  id: string;
  name: string;
  description?: string;
}

const Subjects: React.FC = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const storedSubjects = localStorage.getItem('subjects');
    if (storedSubjects) {
      try {
        const parsed = JSON.parse(storedSubjects);
        if (Array.isArray(parsed)) {
          setSubjects(parsed);
        }
      } catch {
        // nếu JSON sai thì bỏ qua
      }
    }
  }, []);

  useEffect(() => {
    if (subjects.length > 0) {
      localStorage.setItem('subjects', JSON.stringify(subjects));
    } else {
      localStorage.removeItem('subjects'); // tránh lưu data rỗng
    }
  }, [subjects]);

  const handleAddSubject = (newSubject: Omit<Subject, 'id'>) => {
    const subjectWithId = { ...newSubject, id: Date.now().toString() };
    setSubjects(prev => [...prev, subjectWithId]);
    message.success('Thêm môn học thành công');
    setIsModalVisible(false);
  };

  const handleDeleteSubject = (id: string) => {
    setSubjects(prev => prev.filter(subject => subject.id !== id));
    message.success('Xóa môn học thành công');
  };

  return (
    <div style={{ padding: 20 }}>
      <Title level={2}>Quản lý Môn Học</Title>
      <Button type="primary" style={{ marginBottom: 16 }} onClick={() => setIsModalVisible(true)}>
        Thêm Môn Học Mới
      </Button>
      <SubjectTable subjects={subjects} onDelete={handleDeleteSubject} />
      <Modal
        title="Thêm Môn Học"
        open={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        destroyOnClose
      >
        <SubjectForm onSubmit={handleAddSubject} onCancel={() => setIsModalVisible(false)} />
      </Modal>
    </div>
  );
};

export default Subjects;
