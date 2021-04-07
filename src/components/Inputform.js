import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { Form, Input, Button } from 'antd';

const InputForm = ({onChange}) => {

  const onFinish = (values) => {
    console.log('Success:', values.queries);
    onChange(values.queries)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      // {...layout}
      layout="inline"
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="输入内容"
        name="queries"
        rules={[
          {
            required: true,
            message: 'Please input your queries!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default InputForm