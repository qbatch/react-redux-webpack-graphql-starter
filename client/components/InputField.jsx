import React from 'react';
import { Form, Icon, Input } from 'antd';
const FormItem = Form.Item;

export const InputField = ({ getFieldDecorator, name, rules, iconType, type, placeholder, onBlur }) => {
  return (
    <FormItem>
      {getFieldDecorator(name, {rules})(
        <Input prefix={<Icon type={iconType} style={{ color: 'rgba(0,0,0,.25)' }} />} type={type} placeholder={placeholder} onBlur={onBlur} />
      )}
    </FormItem>
  )
}
