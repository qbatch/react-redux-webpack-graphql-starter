import React from 'react';
import { Form, Icon, Input } from 'antd';
const FormItem = Form.Item;

export const InputField = ({ getFieldDecorator, name, message, placeholderName, iconType, type, required }) => {
  return (
    <FormItem>
      {getFieldDecorator(name, {
        rules: [{ required, message }],
      })(
        <Input prefix={<Icon type={iconType} style={{ color: 'rgba(0,0,0,.25)' }} />} type={type} placeholder={placeholderName} />
      )}
    </FormItem>
  )
}

export const InputFieldWithValidator = ({ getFieldDecorator, name, message, placeholderName, iconType, type, func, required }) => {
  return (
    <FormItem>
      {getFieldDecorator(name, {
        rules: [{ required, message }],
      }, {
        validator: func
      })(
        <Input prefix={<Icon type={iconType} style={{ color: 'rgba(0,0,0,.25)' }} />} type={type} placeholder={placeholderName} />
      )}
    </FormItem>
  )
}

export const InputFieldWithValidatorAndBlur = ({ getFieldDecorator, name, message, placeholderName, iconType, type, func, onBlur, required }) => {
  return (
    <FormItem>
      {getFieldDecorator(name, {
        rules: [{ required, message }],
      }, {
        validator: func
      })(
        <Input prefix={<Icon type={iconType} style={{ color: 'rgba(0,0,0,.25)' }} />} type={type} placeholder={placeholderName} onBlur={onBlur} />
      )}
    </FormItem>
  )
}
