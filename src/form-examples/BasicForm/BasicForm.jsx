import React from 'react';
import { Button, Checkbox, Form, Input, Space } from 'antd';
import useFormSetting from 'useFormSettings'
import "./BasicForm.scss"

const labellessFormItemStyles = {
  offset: 8,
  span: 16,
}

// const SubmitButton = ({ form }) => {
//   const [submittable, setSubmittable] = React.useState(false);

//   // Watch all values
//   const values = Form.useWatch([], form);
//   React.useEffect(() => {
//     form
//       .validateFields({
//         validateOnly: true,
//       })
//       .then(
//         () => {
//           setSubmittable(true);
//         },
//         () => {
//           setSubmittable(false);
//         },
//       )
//   }, [values])

//   return (
//     <Button type="primary" htmlType="submit" disabled={!submittable}>
//       Submit
//     </Button>
//   )
// }

const SimpleForm = ({
  onFinish,
  onFinishFailed,
  onValuesChange,
}) => {
  const {
    layout,
    labelCol,
    wrapperCol,
    maxSize,
    noStyle,
    size,
    disabled,
  } = useFormSetting()

  const [form] = Form.useForm()

  return <>
    <Form
      name="basic"
      form={form}
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      layout={layout}
      size={size}
      style={{ maxWidth: maxSize }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onValuesChange={onValuesChange}
      disabled={disabled}
      autoComplete="off"
      className="basic-form"
    >
      <Form.Item
        label="Username"
        name={["user", "username"]}
        validateTrigger="onBlur"
        rules={[
          {
            required: true,
            // message: 'Please input your username!',
          },
        ]}
        noStyle={noStyle}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name={["user", "password"]}
        validateTrigger="onBlur"
        // name="password"
        rules={[
          {
            required: true,
            // message: 'Please input your password!',
          },
        ]}
        noStyle={noStyle}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={labellessFormItemStyles}
        style={{ textAlign: "center" }}
        noStyle={noStyle}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={labellessFormItemStyles}
        // style={{ textAlign: "center" }}
        noStyle={noStyle}
      >
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          {/* <SubmitButton form={form} /> */}
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  </>
}
export default SimpleForm