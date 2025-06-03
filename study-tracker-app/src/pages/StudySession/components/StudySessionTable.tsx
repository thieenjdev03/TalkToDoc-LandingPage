import React, { useEffect, useState } from 'react';
import { Table, Button, Popconfirm } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { StudySessionData } from '../StudySeason';

interface Props {
  sessions: StudySessionData[];
  onDelete: (id: string) => void;
}

const StudySessionTable: React.FC<Props> = ({ sessions, onDelete }) => {
  const [now, setNow] = useState<number>(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const columns: ColumnsType<StudySessionData> = [
    {
      title: 'Môn học',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'Ngày học',
      dataIndex: 'date',
      key: 'date',
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Thời lượng (phút)',
      dataIndex: 'duration',
      key: 'duration',
      render: (duration, record) => {
        const isLast = sessions.length && record.id === sessions[sessions.length - 1].id;
        const isOngoing = isLast && duration === 0;
        const startTime = new Date(record.date).getTime();
        const elapsed = Math.floor((now - startTime) / 60000); // phút

        return isOngoing
          ? `Đang học: ${elapsed} phút`
          : Math.round(duration);
      },
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => (
        <Popconfirm
          title="Bạn có chắc muốn xóa?"
          onConfirm={() => onDelete(record.id)}
          okText="Xóa"
          cancelText="Hủy"
        >
          <Button danger size="small">Xóa</Button>
        </Popconfirm>
      ),
    },
  ];

  return <Table rowKey="id" columns={columns} dataSource={sessions} pagination={false} />;
};

export default StudySessionTable;
