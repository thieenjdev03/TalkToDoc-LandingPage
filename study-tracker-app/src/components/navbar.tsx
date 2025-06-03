import React from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  BookOutlined,
  BarChartOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuths';

const { Header } = Layout;

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Header className="navbar">
      <div className="logo">📘 StudyTracker</div>
      <Menu mode="horizontal" theme="dark" selectable={false}>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Trang chủ</Link>
        </Menu.Item>
        <Menu.Item key="subjects" icon={<BookOutlined />}>
          <Link to="/subjects">Môn học</Link>
        </Menu.Item>
        <Menu.Item key="sessions" icon={<BookOutlined />}>
          <Link to="/sessions">Buổi học</Link>
        </Menu.Item>
        <Menu.Item key="statistics" icon={<BarChartOutlined />}>
          <Link to="/statistics">Thống kê</Link>
        </Menu.Item>
        <Menu.Item key="profile" icon={<UserOutlined />}>
          <Link to="/profile">Cá nhân</Link>
        </Menu.Item>
        <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
          Đăng xuất
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
