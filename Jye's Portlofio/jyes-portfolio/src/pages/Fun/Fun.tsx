import React from 'react';
import { Typography, Card, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const cardStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, #d0eaff, #a0c4ff)', // xanh lam nhẹ
  border: '1px solid #91caff',
  borderRadius: '12px',
  boxShadow: '2px 4px 10px #000000',
};

const Fun: React.FC = () => {
  return (
    <div 
      style={{ 
        padding: '2rem', 
        maxWidth: 900, 
        margin: '0 auto',
        background:'#67b6ff',
        borderRadius:'30px', 
      }}>
      
      <Title level={2} style={{ textAlign: 'center', color: 'white',textShadow:'2px 2px 5px blue'}}>
        Sở thích cá nhân
      </Title>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Card title="🎮 Chơi game" bordered={true} style={cardStyle}>
            <Paragraph>
              Chơi thì gà mà giỏi dỗi game:
              <ul>
                <li>Cod mobile/warzone (Chơi ít)</li>
                <li>League of Legends / TFT</li>
                <li>Liên quân mobile</li>
                <li>PUBG Mobile</li>
              </ul>
            </Paragraph>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card title="🎬 Xem phim" bordered={true} style={cardStyle}>
            <Paragraph>
              Phim hay, nhưng mà quên tên nhân vật chính ạ:
              <ul>
                <li>Khoa học viễn tưởng</li>
                <li>Chiến tranh - lịch sử</li>
                <li>Siêu học</li>
              </ul>
            </Paragraph>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card title="🎵 Nghe nhạc" bordered={true } style={cardStyle}>
            <Paragraph>
              Nghe thì hay, còn mình hát thì dở:
              <ul>
                <li>US-UK</li>
                <li>V-Pop</li>
                <li>Nhạc xưa</li>
              </ul>
            </Paragraph>
          </Card>
        </Col>

         <Col xs={24} sm={12} md={8}>
          <Card title="🗣️ Trò truyện và tâm sự" bordered={true } style={cardStyle}>
            <Paragraph>
              Cái gì cũng nói được:
              <ul>
                <li>Tình cảm, kiến thức</li>
                <li>Đời sống</li>
                <li>Ẩm thực</li>
              </ul>
            </Paragraph>
          </Card>
        </Col>

         <Col xs={24} sm={12} md={8}>
          <Card title="Ngôn ngữ 🔠" bordered={true } style={cardStyle}>
            <Paragraph>
              Tiếng gì cũng biết, tiếng được tiếng không:
              <ul>
                <li>Tiếng Anh, Việt lưu loát (tùy lúc)</li>
                <li>Tiếng Nga, Pháp (Vài câu)</li>
                <li>Tiếng Trung, Đức, Ý, Tây Ban Nha, Ukraina, Belarus, Hàn, Nhật, Thái (vài chữ)</li>
              </ul>
            </Paragraph>
          </Card>
        </Col>

         <Col xs={24} sm={12} md={8}>
          <Card title="Văn hóa, lịch sử, chính trị 🛑" bordered={true } style={cardStyle}>
            <Paragraph>
              Tìm hiểu thêm về các nền văn minh văn hóa để tăng lực chiến:
              <ul>
                <li>Thế giới</li>
                <li>Việt Nam</li>
                <li>Hệ thống chính trị các quốc gia, đa phần về CNXH</li>
              </ul>
            </Paragraph>
          </Card>
        </Col>

          <Col xs={24} sm={12} md={8}>
          <Card title="Khám phá thêm các kĩ năng" bordered={true } style={cardStyle}>
            <Paragraph>
              Khám thì ít mà phá thì nhiều 🕵️:
              <ul>
                <li>Design, edit ảnh và video</li>
                <li>Truyền thông và cách làm sự kiện</li>
                <li>Dạy học và chỉ bài thêm cho các bạn cần sự trợ giúp</li>
              </ul>
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Fun;
