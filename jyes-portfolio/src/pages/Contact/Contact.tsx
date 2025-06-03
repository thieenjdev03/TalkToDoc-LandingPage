import React from 'react';
import { Typography, Card, List } from 'antd';

const { Title } = Typography;

const contactInfo = [
  { label: 'Facebook', value: 'facebook.com/Jyeeeeeeeeee', link: 'https://www.facebook.com/Jyeeeeeeeeee' },
  { label: 'Instagram', value: 'instagram.com/jyeee_3/', link: 'https://www.instagram.com/jyeee_3/' },
  { label: 'Github', value: 'github.com/Jye-a-dev', link: 'https://github.com/Jye-a-dev' },
  { label: 'Email', value: 'omkhoa@gmail.com'},
  {label:'Discord', value:'jye_here'}
];

const Contact: React.FC = () => {
  return (
    <div
      style={{
        padding: '2rem',
        maxWidth: 600,
        margin: '0 auto',
        borderRadius: '8px',
        background: 'linear-gradient(180deg, #001F7A 0%, #66B2FF 100%)',
        color: '#fff',
        minHeight: '80vh',
        border: '3px solid #0A1F44',
      }}
    >
      <Title
        level={2}
        style={{
          color: '#fff',
          textAlign: 'center',
          textShadow:'2px 2px 5px #67b6ff'
          
        }}
      >
        Thông tin liên hệ
      </Title>

      <Card
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: '8px' }}
        bordered={true}
      >
        <List
          dataSource={contactInfo}
          renderItem={(item) => (
            <List.Item
              style={{
                color: '#fff',
                textShadow: '3px 3px 4px #131313',
              }}
            >
              <b>{item.label}:</b>&nbsp;
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'cyan', textDecoration: 'none' }}
              >
                {item.value}
              </a>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default Contact;
