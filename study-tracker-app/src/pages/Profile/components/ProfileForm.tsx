import React from 'react';
import { Form, Input, Button } from 'antd';

interface Props {
  user: {
    name: string;
    email: string;
    avatarUrl?: string;
  };
  onSave: (user: { name: string; email: string; avatarUrl?: string }) => void;
  onCancel: () => void;
}

const ProfileForm: React.FC<Props> = ({ user, onSave, onCancel }) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    form.setFieldsValue(user);
  }, [user, form]);

  const onFinish = (values: any) => {
    onSave(values);
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Tên"
        name="name"
        rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
      >
        <Input placeholder="Nhập tên" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Vui lòng nhập email!' },
          { type: 'email', message: 'Email không hợp lệ!' },
        ]}
      >
        <Input placeholder="Nhập email" />
      </Form.Item>

      <Form.Item label="URL Avatar" name="avatarUrl">
        <Input placeholder="Nhập URL ảnh đại diện" />
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

export default ProfileForm;
