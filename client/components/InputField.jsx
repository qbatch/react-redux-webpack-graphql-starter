import React from 'react';
import { Form, Icon, Input } from 'antd';
const FormItem = Form.Item;

export const InputField = ({ getFieldDecorator, name, message, placeholderName, iconType, required }) => {
  return (
    <FormItem>
      {getFieldDecorator(name, {
        rules: [{ required, message }],
      })(
        <Input prefix={<Icon type={iconType} style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder={placeholderName} />
      )}
    </FormItem>
  )
}
