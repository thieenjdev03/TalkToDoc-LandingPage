import React from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { useAuth } from '../../hooks/useAuths';
import { useNavigate } from 'react-router-dom';
import '../../App.scss'

const { Title, Text, Link } = Typography;

const RegisterPage: React.FC = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const onFinish = async (values: { name: string; email: string; password: string }) => {
    try {
      await register(values.name, values.email, values.password);
      message.success('Đăng ký thành công!');
      navigate('/login');
    } catch (error: any) {
      message.error(error.message || 'Đăng ký thất bại');
    }
  };

  return (
    <div className='auth-container'>
      <Title level={2} style={{ textAlign: 'center' }}>Đăng ký</Title>
      <Form name="register" layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Tên"
          name="name"
          rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
        >
          <Input placeholder="Nhập tên" />
        </Form.Item>
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
          <Button type="primary" htmlType="submit" block>Đăng ký</Button>
        </Form.Item>
      </Form>
      <Text>Đã có tài khoản? <Link onClick={() => navigate('/login')}>Đăng nhập</Link></Text>
    </div>
  );
};

export default RegisterPage;
