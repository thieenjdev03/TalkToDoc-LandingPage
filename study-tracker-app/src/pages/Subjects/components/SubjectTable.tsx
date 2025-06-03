import React from 'react';
import { Table, Button, Popconfirm } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Subject } from '../Subjects';

interface Props {
  subjects: Subject[];
  onDelete: (id: string) => void;
}

const SubjectTable: React.FC<Props> = ({ subjects, onDelete }) => {
  const columns: ColumnsType<Subject> = [
    {
      title: 'Tên Môn Học',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Mô Tả',
      dataIndex: 'description',
      key: 'description',
      render: text => text || '-',
    },
    {
      title: 'Hành Động',
      key: 'action',
      render: (_, record) => (
        <Popconfirm
          title="Bạn có chắc muốn xóa môn học này?"
          onConfirm={() => onDelete(record.id)}
          okText="Xóa"
          cancelText="Hủy"
        >
          <Button danger size="small">Xóa</Button>
        </Popconfirm>
      ),
    },
  ];

  return <Table rowKey="id" columns={columns} dataSource={subjects} pagination={false} />;
};

export default SubjectTable;
