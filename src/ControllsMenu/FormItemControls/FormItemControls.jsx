import * as React from 'react'
import { Form, Switch } from 'antd'
import PropTypes from 'prop-types'
import ControllsMenu from 'ControllsMenu/ControllsMenu'
import useFormSettings from 'useFormSettings'
import './FormItemControls.scss'

const FormItemControls = ({ items }) => {
  const {
    setNoStyle,
  } = useFormSettings()

  if (!items || (Array.isArray(items) && items.length === 0)) return null;

  return <ControllsMenu
    title="Form Item Props"
  >
    {items.find((item) => item === "noStyle") && <Form.Item label="noStyle">
      <Switch
        onChange={() => setNoStyle((state) => !state)}
        size="small"
      />
    </Form.Item>}
  </ControllsMenu>
}

FormItemControls.propTypes = {}

export default FormItemControls