import React from 'react';
import { Typography, Timeline } from 'antd';
import './Education.scss'; // Nhớ tạo file này

const { Title } = Typography;

const Education: React.FC = () => {
  return (
    <div
      className="education-container"
    >
      <Title
        level={2}
        style={{
          textAlign: 'center',
        }}
      >
        Học vấn
      </Title>
      <Timeline className="custom-timeline">
        <Timeline.Item color="blue">
          <b>2012 - 2017: </b> TH Bế Văn Đàn
        </Timeline.Item>

        <Timeline.Item color="blue">
          <b>2017 - 2019: </b> THCS Nguyễn Văn Bé
        </Timeline.Item>

        <Timeline.Item color="blue">
          <b>2019 - 2021: </b> THCS Đỗ Văn Dậy
        </Timeline.Item>

        <Timeline.Item color="blue">
          <b>2021 - 2024: </b> THPT Hồ Thị Bi

            <Timeline className='custom-timeline' style={{color:'#002344'}}>
              <Timeline.Item color='red'>
                  <b>27-28/6:</b> Thi THPTQG 2024 
              </Timeline.Item>

              <Timeline.Item color='red'>
                  <b>Tháng 7:</b>  Đỗ nguyện vọng 1 với Toán: 8, Anh: 8.6, Lý: 7.2 <br/>
                  Tổ hợp A01: <b>23,8 điểm </b>
              </Timeline.Item>

              <Timeline.Item color='red'>
                <b>Tháng 9:</b> Bắt đầu học đại học <br/>
                Thật ra thì mình đủ điểm vào <b>HCMUE </b> <br/>
                Nhưng mà mình chọn <b>VLU </b> vì mình thấy nên
              </Timeline.Item>  


            </Timeline>
        
        </Timeline.Item>

        <Timeline.Item color="blue">
          <b>2024 - 2028: </b> Đại học Văn Lang
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Education;
