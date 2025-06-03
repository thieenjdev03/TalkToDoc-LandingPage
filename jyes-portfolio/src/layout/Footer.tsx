import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer: React.FC = () => {
  return (
    <AntFooter
      style={{
        textAlign: 'center',
        backgroundColor: '#003366',
        borderTop: '2px solid #0059b3',
        color: 'white',
        textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
        transition: 'color 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.color = '#99ccff';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.color = 'white';
      }}
    >
      &copy; 2025 Jye&apos;s Profile. No copyright.
    </AntFooter>
  );
};

export default Footer;
