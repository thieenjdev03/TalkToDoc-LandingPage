import React from 'react';
import { Form, Input, Button } from 'antd';

interface Props {
  onSubmit: (data: { name: string; description?: string }) => void;
  onCancel: () => void;
}

const SubjectForm: React.FC<Props> = ({ onSubmit, onCancel }) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    onSubmit(values);
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Tên Môn Học"
        name="name"
        rules={[{ required: true, message: 'Vui lòng nhập tên môn học!' }]}
      >
        <Input placeholder="Nhập tên môn học" />
      </Form.Item>

      <Form.Item label="Mô Tả" name="description">
        <Input.TextArea placeholder="Nhập mô tả (tùy chọn)" rows={4} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ marginRight: 8 }}>
          Lưu
        </Button>
        <Button onClick={onCancel}>Hủy</Button>
      </Form.Item>
    </Form>
  );
};

export default SubjectForm;
