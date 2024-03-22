import * as React from 'react'
import { Form, InputNumber, Select } from 'antd'
import PropTypes from 'prop-types'
import ControllsMenu from 'ControllsMenu/ControllsMenu'
import useFormSettings from 'useFormSettings'
import './FormControls.scss'

const FormControls = () => {
  const {
    setLayout,
    setMaxSize,
    labelColSpan,
    setLabelColSpan,
    wrapperColSpan,
    setWrapperColSpan,
    setSize,
  } = useFormSettings()

  return <ControllsMenu
    title="Layout Props"
    className="form-menu-controls"
  >
    <div className="col-spans">
      <InputNumber
        size="small"
        addonBefore="labelCol"
        addonAfter="span"
        value={labelColSpan}
        onChange={setLabelColSpan}
        min={0}
        max={24}
      // max={24 - wrapperColSpan}
      // style={{ flexGrow: 1 }}
      />
      <InputNumber
        size="small"
        addonBefore="wrapperCol"
        addonAfter="span"
        value={wrapperColSpan}
        onChange={setWrapperColSpan}
        min={0}
        max={24}
      // max={24 - labelColSpan}
      // style={{ flexGrow: 1.125 }}
      />
    </div>
    <Form.Item
      label="layout"
    >
      <Select
        options={[
          { value: "horizontal" },
          { value: "vertical" },
          { value: "inline" },
        ]}
        defaultValue={"horizontal"}
        onChange={setLayout}
        size="small"
      />
    </Form.Item>
    <Form.Item
      label={<span>style&mdash;maxWidth</span>}
    >
      <Select
        options={[
          { label: "none", value: "none" },
          { label: "600px", value: 600 },
          { label: "50%", value: "50%" },
        ]}
        defaultValue={"none"}
        onChange={setMaxSize}
        size="small"
        style={{ minWidth: 81 }}
      />
    </Form.Item>
    <Form.Item
      label="size"
    >
      <Select
        options={[
          { value: "small" },
          { value: "default" },
          { value: "large" },
        ]}
        defaultValue={"small"}
        onChange={setSize}
        size="small"
      />
    </Form.Item>

  </ControllsMenu >
}

FormControls.propTypes = {}

export default FormControls