import React from 'react'
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
const { Option } = Select

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
  // validate others
  rate: 3.5,
  'color-picker': null,
}

const MultiFieldTypesForm = ({
  onFinish,
  onFinishFailed,
  onValuesChange,
}) => {
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
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={onValuesChange}
        labelCol={labelCol}
        wrapperCol={wrapperCol}
        layout={layout}
        disabled={disabled}
        size={size}
        style={{ maxWidth: maxSize }}
        initialValues={initialValues}
      >
        <Form.Item
          label="Checkbox"
          name="checkbox"
          valuePropName="checked"
        >
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>

        <Form.Item name="checkbox-group" label="Checkbox.Group">
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
        </Form.Item>

        <Form.Item
          label="Radio Group"
          name="radio-group"
        >
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="radio-group" label="Radio.Group">
          <Radio.Group>
            <Radio value="a">item 1</Radio>
            <Radio value="b">item 2</Radio>
            <Radio value="c">item 3</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="radio-button-group"
          label="Radio.Button Group"
          rules={[
            {
              required: true,
              message: 'Please pick an item!',
            },
          ]}
        >
          <Radio.Group>
            <Radio.Button value="a">item 1</Radio.Button>
            <Radio.Button value="b">item 2</Radio.Button>
            <Radio.Button value="c">item 3</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Input"
          name="input"
          rules={[
            {
              required: true,
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Select"
          name="select"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please select your country!',
            },
          ]}
        >
          <Select placeholder="Please select a country">
            <Option value="china">China</Option>
            <Option value="usa">U.S.A</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="select-multiple"
          label="Select[multiple]"
          rules={[
            {
              required: true,
              message: 'Please select your favourite colors!',
              type: 'array',
            },
          ]}
        >
          <Select mode="multiple" placeholder="Please select favourite colors">
            <Option value="red">Red</Option>
            <Option value="green">Green</Option>
            <Option value="blue">Blue</Option>
          </Select>
        </Form.Item>

        <Form.Item label="TreeSelect">
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
        </Form.Item>

        <Form.Item
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
        </Form.Item>

        <Form.Item
          label="DatePicker"
          name="date-picker"
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="RangePicker"
          name="range-picker"
        >
          <RangePicker />
        </Form.Item>

        <Form.Item
          label="InputNumber"
          name="input-number"
          hasFeedback
          rules={[
            {
              type: 'number',
              min: 1,
              max: 10,
            },
          ]}
        >
          <InputNumber min={1} max={10} />
        </Form.Item>

        <Form.Item label="InputNumber with label">
          <Form.Item
            name="input-number-label"
            label="InputNumber"
            noStyle
            hasFeedback
            rules={[
              {
                type: 'number',
                min: 1,
                max: 10,
              },
            ]}
          >
            <InputNumber min={1} max={10} />
          </Form.Item>
          <span
            className="ant-form-text"
            style={{
              marginLeft: 8,
            }}
          >
            machines
          </span>
        </Form.Item>

        <Form.Item
          label="TextArea"
          name="text-area"
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Switch"
          valuePropName="checked"
          name="switch"
        >
          <Switch />
        </Form.Item>

        <Form.Item
          label="Upload"
          valuePropName="fileList"
          name="upload"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{marginTop: 8}}>
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item label="Dragger">
          <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
            <Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload.</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>

        <Form.Item
          name="color-picker"
          label="ColorPicker"
          rules={[
            {
              required: true,
              message: 'color is required!',
            },
          ]}
        >
          <ColorPicker />
        </Form.Item>

        {/* <Form.Item
          label="Button"
          name="button"
        >
          <Button>Button</Button>
        </Form.Item> */}

        <Form.Item
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
        </Form.Item>

        <Form.Item
          label="ColorPicker"
          name="color-picker"
        >
          <ColorPicker />
        </Form.Item>

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
    </>
  )
}
export default MultiFieldTypesForm