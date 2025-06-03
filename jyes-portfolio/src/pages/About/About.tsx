import React, { useEffect, useState } from 'react';
import { Typography, Image } from 'antd';
import avatar from '../../assets/Pic1.jpg';
import './About.scss';

const { Title, Paragraph, Text } = Typography;

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
      <div
        className="custom-about-container"
        style={{
          padding: '2rem',
          maxWidth: 900,
          margin: '2rem auto',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #1e3c72 0%,#74a7ff 100%)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Title level={2} style={{ textAlign: 'center', textShadow:'2px 2px 5px blue'}}>
          Giới thiệu bản thân
        </Title>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem', }}>
          <Image
            src={avatar}
            alt="Ảnh bản thân"
            width={220}
            height={220}
            style={{
              borderRadius: '12px',
              border: `3px solid white`,
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
            }}
            preview={false}
            className="avatar-hover"
          />
        </div>

        {/* Thông tin cá nhân */}
        <div className="custom-div" >
          <Title level={4}>Thông tin cá nhân</Title>
          <Paragraph><Text strong>Họ tên:</Text> Nguyễn Việt Duy Khoa</Paragraph>
          <Paragraph><Text strong>Quốc tịch / Dân tộc:</Text> Việt Nam / Kinh</Paragraph>
          <Paragraph><Text strong>Quê quán:</Text> Hóc Môn, TP HCM</Paragraph>
          <Paragraph><Text strong>Nơi sinh:</Text> Bình Thạnh, TP HCM</Paragraph>
          <Paragraph><Text strong>Ngày sinh:</Text> 09/09/2006</Paragraph>
          <Paragraph>
            <Text strong>Tuổi:</Text> {age.years} năm, {age.months} tháng, {age.weeks} tuần, {age.days} ngày, {age.hours} giờ, {age.minutes} phút, {age.seconds} giây
          </Paragraph>
          <Paragraph><Text strong>Trạng thái hôn nhân:</Text> Độc thân</Paragraph>
        </div>

        {/* Học vấn */}
        <div className="custom-div" style={{ color: 'white' }}>
          <Title level={4}>Học vấn</Title>
          <Paragraph ><Text strong>Học vấn:</Text> 12/12</Paragraph>
          <Paragraph><Text strong>Đại học:</Text> Văn Lang - Công nghệ thông tin</Paragraph>
          <Paragraph><Text strong>Năm học:</Text> Sinh viên năm nhất</Paragraph>
        </div>

        {/* Kỹ năng */}
        <div className="custom-div">
          <Title level={4}>Kỹ năng</Title>
          <Paragraph>
            <Text strong>Chuyên ngành / vị trí:</Text> Kĩ sư phần mềm / Fullstack Developer
          </Paragraph>
          <Paragraph>
            <Text strong>Kỹ năng chuyên môn:</Text> React, TypeScript, SCSS, Python, HTML, JavaScript
          </Paragraph>
          <Paragraph>
            <Text strong>Kỹ năng mềm:</Text> Làm việc nhóm, giao tiếp, xử lý tình huống linh hoạt
          </Paragraph>
        </div>

        {/* Nhắn nhủ */}
        <div className="custom-div">
          <Title level={4}>Nhắn nhủ</Title>
          <Paragraph>
            Mình là một lập trình viên mới vào nghề, đam mê và ham học hỏi.
            Đây là nơi mình chia sẻ những gì mình đã học và đang phát triển.
          </Paragraph>
          <Paragraph>
            <Text strong>Màu sắc yêu thích:</Text> Máu đỏ, da vàng 🇻🇳
          </Paragraph>
        </div>
      </div>
    </>
  );
};

export default About;
