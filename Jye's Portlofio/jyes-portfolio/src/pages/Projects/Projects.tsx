// src/pages/Projects/index.tsx
import React from 'react';
import { Card, Col, Row } from 'antd';

const projects = [
  {
    id: 1,
    title: 'Dự án 1',
    description: 'Mô tả dự án 1',
  },
  {
    id: 2,
    title: 'Dự án 2',
    description: 'Mô tả dự án 2',
  },
  {
    id: 3,
    title: 'Dự án 3',
    description: 'Mô tả dự án 3',
  },
];

const Projects: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1>Portfolio của tôi</h1>
      <Row gutter={[16, 16]}>
        {projects.map((project) => (
          <Col key={project.id} xs={24} sm={12} md={8}>
            <Card title={project.title} bordered={false}>
              {project.description}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
