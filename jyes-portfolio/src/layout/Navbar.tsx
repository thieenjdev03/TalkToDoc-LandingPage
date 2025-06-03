import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

const items = [
  { label: <Link to="/">Home</Link>, key: '/' },
  { label: <Link to="/about">About</Link>, key: '/about' },
  { label: <Link to="/contact">Contact</Link>, key: '/contact' },
  { label: <Link to="/education">Education</Link>, key: '/education' },
  { label: <Link to="/fun">Fun</Link>, key: '/fun' },
];

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav
      style={{
        backgroundColor: '#002366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1rem',
        height: '70px',
      }}
    >
      <div>
        <Link to="/" className="navbar-title-link">
          Jye's Portfolio
        </Link>
      </div>

      <div style={{ maxWidth: '80%' }}>
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={items}
          theme="dark"
          style={{
            backgroundColor: '#133999',
            borderBottom: 'none',
            justifyContent: 'flex-end',
            padding:'5px',
            border:'1px #ffffff',
            borderRadius: '10px',
          }}
          className="custom-navbar-menu"
        />
      </div>
    </nav>
  );
};

export default Navbar;
