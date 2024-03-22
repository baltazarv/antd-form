import * as React from 'react'
import { Form, Switch } from 'antd'
import PropTypes from 'prop-types'
import ControllsMenu from 'ControllsMenu/ControllsMenu'
import useFormSettings from 'useFormSettings'
import './FormStateControls.scss'

const FormStateControls = ({

}) => {
  const {
    setDisabled,
  } = useFormSettings()

  return <ControllsMenu
    title="State Props"
    className="form-menu-controls"
  >
    <div className="form-state-controls">
      <Form.Item label="disabled">
        <Switch
          onChange={setDisabled}
          size="small"
        />
      </Form.Item>
    </div>
  </ControllsMenu >
}

FormStateControls.propTypes = {}

export default FormStateControls