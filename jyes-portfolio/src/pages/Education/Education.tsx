import React from 'react';
import { Typography, Timeline, Card } from 'antd';
import './Education.scss';

const { Title, Paragraph } = Typography;

const Education: React.FC = () => {
  return (
    <div className="education-container">

        <Title
          level={2}
          style={{
            textAlign: 'center',
            color: '#002344',
            textShadow: '3px 3px 3px #6b81ff',
          }}
        >
          Học vấn
        </Title>

        <Timeline className="custom-timeline">
          <Timeline.Item color="blue">
            <b>2012 - 2017:</b> Tiểu học Bế Văn Đàn
          </Timeline.Item>

          <Timeline.Item color="blue">
            <b>2017 - 2019:</b> THCS Nguyễn Văn Bé
          </Timeline.Item>

          <Timeline.Item color="blue">
            <b>2019 - 2021:</b> THCS Đỗ Văn Dậy
          </Timeline.Item>

          <Timeline.Item color="blue">
            <b>2021 - 2024:</b> THPT Hồ Thị Bi
            <div className="nested-timeline">
              <Timeline className="custom-timeline" mode="left">
                <Timeline.Item color="red">
                  <b>27–28/6:</b> Thi THPTQG 2024
                </Timeline.Item>

                <Timeline.Item color="red">
                  <b>Tháng 7:</b> Đỗ nguyện vọng 1 với:
                  <br />
                  Toán: <b>8</b>, Anh: <b>8.6</b>, Lý: <b>7.2</b>
                  <br />
                  Tổ hợp A01: <b>23,8 điểm</b>
                </Timeline.Item>

                <Timeline.Item color="red">
                  <b>Tháng 9:</b> Bắt đầu học đại học
                  <br />
                  Thật ra đủ điểm vào <b>HCMUE</b>, nhưng chọn <b>VLU</b> vì thấy hợp hơn
                </Timeline.Item>
              </Timeline>
            </div>
          </Timeline.Item>

          <Timeline.Item color="blue">
            <b>2024 - 2028:</b> Đại học Văn Lang
          </Timeline.Item>
        </Timeline>
    </div>
  );
};

export default Education;
