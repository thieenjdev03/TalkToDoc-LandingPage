import React, { useState, useRef, useEffect } from 'react';
import { Typography, Card, Button } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const Home: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (expanded && contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight + 'px');
    } else {
      setMaxHeight('0px');
    }
  }, [expanded]);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      style={{
        maxWidth: 700,
        margin: '2rem auto',
        padding: '2rem',
        borderRadius: '12px',
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
        color: '#ffffff',
      }}
    >
      <Title level={2} style={{ color: '#ffffff', textAlign: 'center' }}>
        👋 Chào mừng đến với Jye's Profile
      </Title>
      <Paragraph style={{ textAlign: 'center', fontSize: '16px', color: '#ffffff'}}>
        Đây là nơi mình chia sẻ các dự án cá nhân, kỹ năng & con đường học tập phát triển.
      </Paragraph>

      <Card
        title="🚀 Các dự án của mình"
        bordered={false}
        style={{
          marginTop: 24,
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #6fb1fc 0%, #a7d7c5 100%)',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <ul style={{ paddingLeft: '1.2rem', lineHeight: 1.7 }}>
          <li>
            <Text strong>Dự án 1:</Text> Website học React TypeScript <Text type="secondary">(Đang làm)</Text>
          </li>
          <li>
            <Text strong>Dự án 2:</Text> Ứng dụng theo dõi học tập <Text type="secondary">(Đang làm)</Text>
          </li>
          <li>
            <Text strong>Dự án 3:</Text> Trang cá nhân portfolio <Text type="success">(Hoàn thành)</Text>
          </li>
        </ul>

        <div
          ref={contentRef}
          style={{
            maxHeight,
            opacity: expanded ? 1 : 0,
            overflow: 'hidden',
            transition: 'max-height 0.5s ease, opacity 0.5s ease',
            marginTop: '1rem',
          }}
        >
          <Paragraph style={{ marginBottom: '0.5rem', textAlign: 'center', fontWeight: 600 }}>
            💡 Chú ý:
          </Paragraph>
          <Paragraph style={{ textAlign: 'justify' }}>
            Đây là profile của mình dành cho bạn bè, người quen và cả những người chưa quen biết. Nếu bạn có điều gì
            muốn hỏi thêm, đừng ngần ngại liên hệ ở phần <b>Contact</b> nhé!
          </Paragraph>
        </div>
      </Card>

      <Button
        type="primary"
        onClick={handleToggle}
        icon={expanded ? <UpOutlined /> : <DownOutlined />}
        style={{
          marginTop: 24,
          backgroundColor: '#003a8c',
          borderColor: '#0050b3',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          transition: 'all 0.3s ease',
        }}
      >
        {expanded ? 'Thu gọn' : 'Xem thêm'}
      </Button>
    </div>
  );
};

export default Home;
