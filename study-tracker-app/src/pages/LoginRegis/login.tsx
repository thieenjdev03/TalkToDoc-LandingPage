import React from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { useAuth } from '../../hooks/useAuths';
import { useNavigate } from 'react-router-dom';
import '../../App.scss'


const { Title, Text, Link } = Typography;

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const onFinish = async (values: { email: string; password: string }) => {
    try {
      await login(values.email, values.password);
      localStorage.setItem('appStartTime', Date.now().toString());
      message.success('Đăng nhập thành công!');
      navigate('/'); // hoặc navigate đến dashboard
    } catch (error: any) {
      message.error(error.message || 'Đăng nhập thất bại');
    }
  };

  return (
    <div className='auth-container'>
      <Title level={2} style={{ textAlign: 'center' }}>Đăng nhập</Title>
      <Form name="login" layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Vui lòng nhập email!' }, { type: 'email', message: 'Email không hợp lệ!' }]}
        >
          <Input placeholder="Nhập email" />
        </Form.Item>
        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
        >
          <Input.Password placeholder="Nhập mật khẩu" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>Đăng nhập</Button>
        </Form.Item>
      </Form>
      <Text>Bạn chưa có tài khoản? <Link onClick={() => navigate('/register')}>Đăng ký ngay</Link></Text>
    </div>
  );
};

export default LoginPage;
