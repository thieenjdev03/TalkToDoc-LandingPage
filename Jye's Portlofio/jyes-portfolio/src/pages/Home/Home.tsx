import React, { useState, useRef, useEffect } from 'react';
import { Typography, Card, Button } from 'antd';

const { Title, Paragraph } = Typography;

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
        maxWidth: 600,
        margin: '2rem auto',
        textAlign: 'center',
        backgroundColor: '#e6f0ff',
        padding: '2rem',
        borderRadius: 8,
        border: '2px solid #b3d1ff',
        textShadow:'4px 4px 9px #002153',
        boxShadow: '0 2px 8px #000000',
      }}
    >
      <Title level={2}>Chào mừng đến với Portfolio của Jye</Title>
      <Paragraph>Đây là nơi mình trình bày các dự án cá nhân và kỹ năng.</Paragraph>

      <Card title="Các dự án của mình: " 
      style={{ 
        marginTop: 24, 
        textAlign: 'center', 
        border:'2px solid blue',
        borderRadius: 8, 
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)' 
     }}>
        <ul style={{ textAlign: 'left' }}>
          <li> <b>Dự án 1: </b> Website học React Typescript (Đang làm)</li>
          <li><b>Dự án 2: </b> Ứng dụng theo dõi học tập (Đang làm)</li>
          <li><b>Dự án 3: </b> Trang cá nhân portfolio</li>
        </ul>

        <div
          ref={contentRef}
          style={{
            maxHeight,
            textAlign: 'left' ,
            overflow: 'hidden',
            transition: 'max-height 0.5s ease, opacity 0.5s ease',
            opacity: expanded ? 1 : 0,
          }}
        >
          <p style={{ textAlign: 'center' }}><b>Chú ý: </b></p>
          <p>Đây là portfolio của mình, để các bạn sắp thân, đang thân
            và đã thân hiểu mình hơn nữa. Có gì thắc mắc về mình cứ hỏi thẳng và liên hệ trong phần contact nhé!</p>
        </div>
      </Card>

      <Button
        type="primary"
        style={{ marginTop: 24, boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }}
        onClick={handleToggle}
      >
        {expanded ? 'Thu gọn' : 'Xem thêm'}
      </Button>
    </div>
  );
};

export default Home;
