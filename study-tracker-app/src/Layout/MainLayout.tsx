import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAppUsageTracker } from '../hooks/useAppUsageTracker';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  BookOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
  ScheduleOutlined,
} from '@ant-design/icons';
import { useAuth } from '../hooks/useAuths';
import { useEffect } from 'react';

const { Header, Sider, Content, Footer } = Layout;

const MainLayout: React.FC = () => {
  useAppUsageTracker();
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  useEffect(() => {
  const startTime = Date.now();
  localStorage.setItem('appStartTime', startTime.toString());

  const handleBeforeUnload = () => {
    const storedStart = localStorage.getItem('appStartTime');
    if (!storedStart) return;

    const duration = Math.floor((Date.now() - parseInt(storedStart, 10)) / 1000);
    if (duration < 5) return; // bỏ qua phiên ngắn

    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const usageRaw = localStorage.getItem('appUsage');
    const usageData = usageRaw ? JSON.parse(usageRaw) : [];

    const existing = usageData.find((entry: any) => entry.date === today);
    if (existing) {
      existing.hours += duration / 3600;
    } else {
      usageData.push({ date: today, hours: duration / 3600 });
    }

    localStorage.setItem('appUsage', JSON.stringify(usageData));
    localStorage.removeItem('appStartTime');
  };

  window.addEventListener('beforeunload', handleBeforeUnload);
  return () => window.removeEventListener('beforeunload', handleBeforeUnload);
}, []);

  const toggle = () => setCollapsed(!collapsed);

  const menuItems = [
    { key: '/', icon: <HomeOutlined />, label: 'Trang chủ' },
    { key: '/subjects', icon: <BookOutlined />, label: 'Môn học' },
    { key: '/sessions', icon: <ScheduleOutlined />, label: 'Buổi học' },
    { key: '/statistics', icon: <BarChartOutlined />, label: 'Thống kê' },
    { key: '/profile', icon: <UserOutlined />, label: 'Cá nhân' },
  ];

  const handleMenuClick = (e: any) => {
    navigate(e.key);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          className="logo"
          style={{
            color: 'white',
            padding: 20,
            fontSize: 18,
            textAlign: 'center',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
          onClick={() => navigate('/')}
        >
          {collapsed ? '📘' : "Jye's Study Tracker"}
        </div>

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          onClick={handleMenuClick}
          items={menuItems}
        />

        <div style={{ padding: 16 }}>
          <Button danger block icon={<LogoutOutlined />} onClick={handleLogout}>
            {!collapsed && 'Đăng xuất'}
          </Button>
        </div>
      </Sider>

      <Layout>
        <Header
          style={{
            background: '#fff',
            padding: '0 16px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggle}
          />
          <h3 style={{ marginLeft: 16, marginBottom: 0 }}>Xin chào bạn!</h3>
        </Header>

        <Content
          style={{
            margin: 24,
            padding: 24,
            background: '#f0f4ff',
            borderRadius: 8,
          }}
        >
          <Outlet />
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Demo Study Tracker ©2025 – Dành cho học sinh/ sinh viên chăm học 
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
