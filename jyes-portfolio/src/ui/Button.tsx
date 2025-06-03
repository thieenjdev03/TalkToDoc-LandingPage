import React from 'react';
import { Button as AntButton } from 'antd';
import type { ButtonProps as AntdButtonProps } from 'antd';

export interface ButtonProps extends AntdButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = 'default',
  ghost = false,
  danger = false,
  loading = false,
  disabled = false,
  size = 'middle',
  onClick,
  children,
  ...rest
}) => {
  return (
    <AntButton
      type={type}
      ghost={ghost}
      danger={danger}
      loading={loading}
      disabled={disabled}
      size={size}
      onClick={onClick}
    >
      {children}
    </AntButton>
  );
};

export default Button;
