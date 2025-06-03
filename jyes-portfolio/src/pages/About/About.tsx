import React, { useEffect, useState } from 'react';
import { Typography, Divider, Image } from 'antd';
import avatar from '../../assets/Pic1.jpg';
import './About.scss'

const { Title, Paragraph } = Typography;

function calculateAge(birthDate: Date) {
  const now = new Date();
  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();
  let hours = now.getHours() - birthDate.getHours();
  let minutes = now.getMinutes() - birthDate.getMinutes();
  let seconds = now.getSeconds() - birthDate.getSeconds();

  if (seconds < 0) { seconds += 60; minutes--; }
  if (minutes < 0) { minutes += 60; hours--; }
  if (hours < 0) { hours += 24; days--; }
  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0) { months += 12; years--; }

  const weeks = Math.floor(days / 7);
  const remDays = days % 7;

  return { years, months, weeks, days: remDays, hours, minutes, seconds };
}

const birthDate = new Date(2006, 8, 9);

const About: React.FC = () => {
  const [age, setAge] = useState(calculateAge(birthDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calculateAge(birthDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div
        style={{
          padding: '2rem',
          maxWidth: 800,
          margin: '0 auto',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #6fb1fc 0%, #a7d7c5 100%)',
          border: '2px solid #002262',
          animation: 'fadeInUp 1s ease',
          boxShadow: '0 4px 10px #000000',
        }}
      >
        <Title
          level={2}
          style={{
            textAlign: 'center',
            color: ' #002262',
            textShadow: '2px 2px 9px #00206b',
            marginBottom: '1.5rem',
            
          }}
        >
          Giới thiệu bản thân
        </Title>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <Image
            src={avatar}
            alt="Ảnh bản thân"
            width={250}
            height={250}
            style={{ borderRadius: '10%', border: '3px solid #003366' }}
            preview={false}
          />
        </div>
        
        <div className='custom-div'>
          <Paragraph><b>Họ tên:</b> Nguyễn Việt Duy Khoa</Paragraph>
          <Paragraph><b>Quốc tịch / dân tộc:</b> Việt Nam / Kinh</Paragraph>
          <Paragraph><b>Quê quán:</b> Hóc Môn ,TP HCM, Việt Nam</Paragraph>
          <Paragraph><b>Nơi sinh:</b> Bình Thạnh, TP HCM</Paragraph>
          <Paragraph><b>Ngày sinh:</b> 9/9/2006</Paragraph>
          <Paragraph>
            <b>Tuổi:</b> {age.years} năm, {age.months} tháng, {age.weeks} tuần, {age.days} ngày, {age.hours} giờ, {age.minutes} phút, {age.seconds} giây
          </Paragraph>
          <Paragraph><b>Trạng thái hôn nhân:</b> Độc thân</Paragraph>
        </div>
        
        <Divider />
        
        <div className='custom-div'>
          <Paragraph><b>Học vấn:</b> 12/12 </Paragraph>
          <Paragraph><b>Trình độ học vấn:</b> Đang học Đại học Văn Lang</Paragraph>
          <Paragraph><b>Nghề nghiệp:</b> Sinh viên năm nhất, Ngành Công nghệ thông tin</Paragraph>
          <Paragraph><b>Chuyên ngành, vị trí:</b> Kĩ sư phần mềm / Fullstack</Paragraph>
          <Paragraph>
            <b>Các kỹ năng chuyên ngành:</b> React, SCSS/CSS, TypeScript, Python, HTML, JavaScript.
          </Paragraph>
          <Paragraph>
            <b>Kĩ năng mềm:</b> Teamwork, giao tiếp ổn, linh hoạt xữ lí tình huống
          </Paragraph>
        </div>
        
        <Divider />

        <div className='custom-div'>
          <Paragraph>
            <b>Nhắn nhủ:</b><br />
            Mình là một lập trình viên mới nhú và mới vào ngành được một năm, mong các bạn qua portfolio này có thể hiểu mình hơn
          </Paragraph>
          <Paragraph><b>Màu sắc yêu thích:</b> Máu đỏ, da vàng</Paragraph>
          
        </div>

      </div>
    </>
  );
};

export default About;
