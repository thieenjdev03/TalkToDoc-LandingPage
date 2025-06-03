import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '1rem 0',
        backgroundColor: '#003366',  // xanh lam đậm
        borderTop: '2px solid #0059b3', // viền trên màu xanh sáng hơn
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
      &copy; 2025 Jye&apos;s Portfolio. No copyright.
    </footer>
  );
};

export default Footer;
