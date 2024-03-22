import React from 'react'
import { useForm } from "react-hook-form"
import { FormItem } from 'FormItem'
import { DevTool } from "@hookform/devtools"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import dayjs from 'dayjs'
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  // extra
  Space,
  Row,
  Col,
} from 'antd'
import { InboxOutlined, PlusOutlined } from '@ant-design/icons'
import useFormSetting from 'useFormSettings'

const { RangePicker } = DatePicker
const { TextArea } = Input
const { Option } = Select;

const normFile = (e) => {
  if (Array.isArray(e)) return e;
  return e?.fileList
}

const initialValues = {
  checkbox: true,
  radio: "pear",
  // select: "usa",
  cascader: [
    "zhejiang",
    "hangzhou"
  ],
  "date-picker": dayjs("2023-12-25T04:33:23.055Z"),
  "range-picker": [
    dayjs("2023-12-25"),
    dayjs("2024-01-01"),
  ],
  "input-number": 0,
  "input-number-label": 0,
  switch: true,
  slider: 58,
  'checkbox-group': ['A', 'B'],
  rate: 3.5,
  'color-picker': null,
}

const validationSchema = z.object({
  "radio-button-group": z
    .enum(["a", "b", "c"]),
  input: z
    .string()
    .min(1, { message: "Input required!" }),
  select: z
    .enum(["china", "usa"]),
  "select-multiple": z
    .array(z.enum(["red", "green", "blue"])),
  "input-number": z
    .number()
    .min(1, { message: "InputNumber should have at least one number" })
    .max(10, { message: "InputNumber should be less than 10" }),
  "input-number-label": z
    .number()
    .min(1, { message: "InputNumber should have at least one number" })
    .max(10, { message: "InputNumber should be less than 10" }),
})

const ReactHookForm = ({
  onFinish,
  onFinishFailed,
  onValuesChange,
}) => {
  const { control, handleSubmit } = useForm({
    defaultValues: initialValues,
    // defaultValues: { username: "jsun969", password: "", remember: true },
    resolver: zodResolver(validationSchema)
  })

  const {
    layout,
    labelCol,
    wrapperCol,
    maxSize,
    size,
    disabled,
  } = useFormSetting()

  return (
    <>
      <Form
        onFinish={handleSubmit((data) => {
          onFinish(data)
        })}
        // onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // onValuesChange={onValuesChange}
        labelCol={labelCol}
        wrapperCol={wrapperCol}
        layout={layout}
        disabled={disabled}
        size={size}
        style={{ maxWidth: maxSize }}
        initialValues={initialValues}
      >
        <FormItem
          control={control}
          label="Checkbox"
          name="checkbox"
          valuePropName="checked"
        >
          <Checkbox>Checkbox</Checkbox>
        </FormItem>

        <FormItem
          control={control}
          name="checkbox-group"
          label="Checkbox.Group"
        >
          <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox
                  value="A"
                  style={{ lineHeight: '32px' }}
                >A</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="B"
                  style={{ lineHeight: '32px' }}
                  disabled
                >B</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="C"
                  style={{ lineHeight: '32px' }}
                >C</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </FormItem>

        <FormItem
          control={control}
          label="Radio Group"
          name="radio-group"
        >
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </FormItem>

        <FormItem
          control={control}
          name="radio-group"
          label="Radio.Group"
        >
          <Radio.Group>
            <Radio value="a">item A</Radio>
            <Radio value="b">item B</Radio>
            <Radio value="c">item C</Radio>
          </Radio.Group>
        </FormItem>

        <FormItem
          control={control}
          name="radio-button-group"
          label="Radio.Button Group"
        >
          <Radio.Group>
            <Radio.Button value="a">item A</Radio.Button>
            <Radio.Button value="b">item B</Radio.Button>
            <Radio.Button value="c">item C</Radio.Button>
          </Radio.Group>
        </FormItem>

        <FormItem
          control={control}
          label="Input"
          name="input"
          hasFeedback
        >
          <Input />
        </FormItem>

        <FormItem
          control={control}
          label="Select"
          name="select"
          hasFeedback
        >
          <Select
            placeholder="Please select a country"
            allowClear
          >
            <Option value="china">China</Option>
            <Option value="usa">U.S.A</Option>
          </Select>
        </FormItem>

        <FormItem
          control={control}
          name="select-multiple"
          label="Select[multiple]"
        >
          <Select mode="multiple" placeholder="Please select favourite colors">
            <Option value="red">Red</Option>
            <Option value="green">Green</Option>
            <Option value="blue">Blue</Option>
          </Select>
        </FormItem>

        {/* <FormItem
          control={control}
          label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: 'Light',
                value: 'light',
                children: [
                  {
                    title: 'Bamboo',
                    value: 'bamboo',
                  },
                ],
              },
            ]}
          />
        </FormItem> */}

        <FormItem
          control={control}
          label="Cascader"
          name="cascader"
        >
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </FormItem>

        <FormItem
          control={control}
          label="DatePicker"
          name="date-picker"
        >
          <DatePicker />
        </FormItem>

        <FormItem
          control={control}
          label="RangePicker"
          name="range-picker"
        >
          <RangePicker />
        </FormItem>

        <FormItem
          control={control}
          label="InputNumber"
          name="input-number"
          hasFeedback
        >
          <InputNumber min={1} max={10} />
        </FormItem>

        <Form.Item
          label="InputNumber with label"
        >
          <FormItem
            control={control}
            name="input-number-label"
            label="InputNumber"
            noStyle
            hasFeedback
          >
            <InputNumber min={1} max={10} />
          </FormItem>
          <span
            className="ant-form-text"
            style={{
              marginLeft: 8,
            }}
          >
            machines
          </span>
        </Form.Item>

        <FormItem
          control={control}
          label="TextArea"
          name="text-area"
        >
          <TextArea rows={4} />
        </FormItem>

        <FormItem
          control={control}
          label="Switch"
          valuePropName="checked"
          name="switch"
        >
          <Switch />
        </FormItem>

        <FormItem
          control={control}
          label="Upload"
          valuePropName="fileList"
          name="upload"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>
                Upload
              </div>
            </div>
          </Upload>
        </FormItem>

        <Form.Item
          label="Dragger"
        >
          <FormItem
            control={control}
            name="dragger"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload.</p>
            </Upload.Dragger>
          </FormItem>
        </Form.Item>

        <FormItem
          control={control}
          label="Slider"
          name="slider"
        >
          <Slider
            marks={{
              0: 'A',
              20: 'B',
              40: 'C',
              60: 'D',
              80: 'E',
              100: 'F',
            }}
          />
        </FormItem>

        <FormItem
          control={control}
          label="ColorPicker"
          name="color-picker"
        >
          <ColorPicker />
        </FormItem>

        {/* submit and reset buttons */}
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="reset">Reset</Button>
          </Space>
        </Form.Item>

      </Form>
      <DevTool control={control} />
    </>
  )
}

export default ReactHookForm