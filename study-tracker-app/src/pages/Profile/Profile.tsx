import React, { useState, useEffect } from 'react';
import { Typography, Button, Avatar, Modal } from 'antd';
import ProfileForm from './components/ProfileForm';

const { Title, Text } = Typography;

interface UserProfile {
  name: string;
  email: string;
  avatarUrl?: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<UserProfile>({
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
  });

  const [isModalVisible, setIsModalVisible] = useState(false);

  // Lưu user vào localStorage để demo
  useEffect(() => {
    const savedUser = localStorage.getItem('userProfile');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleSave = (updatedUser: UserProfile) => {
    setUser(updatedUser);
    localStorage.setItem('userProfile', JSON.stringify(updatedUser));
    setIsModalVisible(false);
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: '0 auto' }}>
      <Title level={2}>Trang Cá Nhân</Title>

      <Avatar size={100} src={user.avatarUrl} alt={user.name} />

      <div style={{ marginTop: 20 }}>
        <Text strong>Tên:</Text> <Text>{user.name}</Text>
      </div>

      <div style={{ marginTop: 10 }}>
        <Text strong>Email:</Text> <Text>{user.email}</Text>
      </div>

      <Button style={{ marginTop: 20 }} type="primary" onClick={() => setIsModalVisible(true)}>
        Chỉnh sửa thông tin
      </Button>

      <Modal
        title="Chỉnh sửa thông tin cá nhân"
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        destroyOnClose
      >
        <ProfileForm user={user} onSave={handleSave} onCancel={() => setIsModalVisible(false)} />
      </Modal>
    </div>
  );
};

export default Profile;
