import React, { useState, useEffect } from 'react';
import { Form, Input, Button, DatePicker, InputNumber, message } from 'antd';

interface Props {
  onSubmit: (data: { subject: string; date: string }) => void;
  onFinishSession: (duration: number) => void;
  onCancel: () => void;
}

const StudySessionForm: React.FC<Props> = ({ onSubmit, onFinishSession, onCancel }) => {
  const [form] = Form.useForm();
  const [isTiming, setIsTiming] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isTiming) {
      const id = setInterval(() => setSeconds(prev => prev + 1), 1000);
      setTimerId(id);
    }
    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [isTiming]);

  const startStudy = () => {
    form.validateFields(['subject', 'date'])
      .then(values => {
        setIsTiming(true);
        setSeconds(0);
        onSubmit({
          subject: values.subject,
          date: values.date.toISOString(),
        });
      })
      .catch(() => {
        message.warning('Vui lòng nhập môn học và ngày học!');
      });
  };

  const stopAndSubmit = () => {
    if (timerId) clearInterval(timerId);
    setTimerId(null);
    setIsTiming(false);

    const duration = Math.max(1, Math.round(seconds / 60));
    onFinishSession(duration);
    message.success('Đã lưu buổi học!');
    form.resetFields();
    setSeconds(0);
  };

  const handleCancel = () => {
    if (isTiming) {
      stopAndSubmit();
    } else {
      onCancel();
    }
  };

  return (
    <Form form={form} layout="vertical">
      <Form.Item
        label="Môn học"
        name="subject"
        rules={[{ required: true, message: 'Vui lòng nhập môn học!' }]}
      >
        <Input disabled={isTiming} />
      </Form.Item>

      <Form.Item
        label="Ngày học"
        name="date"
        rules={[{ required: true, message: 'Vui lòng chọn ngày học!' }]}
      >
        <DatePicker style={{ width: '100%' }} disabled={isTiming} />
      </Form.Item>

      {!isTiming && (
        <Form.Item
          label="Thời lượng (phút)"
          name="duration"
          rules={[{ required: true, message: 'Vui lòng nhập thời lượng!' }]}
        >
          <InputNumber min={1} style={{ width: '100%' }} />
        </Form.Item>
      )}

      {isTiming && (
        <div style={{ marginBottom: 16 }}>
          <b>Đang học:</b> {Math.floor(seconds / 60)} phút {seconds % 60} giây
        </div>
      )}

      <Form.Item>
        {!isTiming ? (
          <>
            <Button type="primary" onClick={startStudy} style={{ marginRight: 8 }}>
              Bắt đầu học
            </Button>
            <Button onClick={handleCancel}>Hủy</Button>
          </>
        ) : (
          <>
            <Button danger onClick={stopAndSubmit} style={{ marginRight: 8 }}>
              Kết thúc học
            </Button>
            <Button onClick={handleCancel}>Hủy</Button>
          </>
        )}
      </Form.Item>
    </Form>
  );
};

export default StudySessionForm;
