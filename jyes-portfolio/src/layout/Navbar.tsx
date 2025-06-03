import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { HomeOutlined, InfoCircleOutlined, MailOutlined, BookOutlined, SmileOutlined } from '@ant-design/icons';
import './Navbar.scss';

const items = [
  { label: <Link to="/">Home</Link>, key: '/', icon: <HomeOutlined /> },
  { label: <Link to="/about">About</Link>, key: '/about', icon: <InfoCircleOutlined /> },
  { label: <Link to="/contact">Contact</Link>, key: '/contact', icon: <MailOutlined /> },
  { label: <Link to="/education">Education</Link>, key: '/education', icon: <BookOutlined /> },
  { label: <Link to="/fun">Fun</Link>, key: '/fun', icon: <SmileOutlined /> },
];

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav
      style={{
        backgroundColor: '#001f4d',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        height: '70px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <div>
        <Link
          to="/"
          className="navbar-title-link"
          style={{
            color: '#ffffff',
            fontSize: '1.5rem',
            fontWeight: 700,
            textDecoration: 'none',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          }}
        >
          Jye's Profile
        </Link>
      </div>

      <Menu
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={items}
        theme="dark"
        style={{
          padding:'5px',
          backgroundColor: '#133999',
          borderBottom: 'none',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
        className="custom-navbar-menu"
      />
    </nav>
  );
};

export default Navbar;
