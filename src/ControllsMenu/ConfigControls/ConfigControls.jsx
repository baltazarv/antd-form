import * as React from 'react'
import PropTypes from 'prop-types'
import { Form, Switch, Radio } from 'antd'
import ControllsMenu from 'ControllsMenu/ControllsMenu'
import useFormSettings from 'useFormSettings'
import * as locales from 'locales'
import './ConfigControls.scss'

const ConfigControls = ({

}) => {
  const {
    locale,
    changeLocale,
    requiredMark,
    setRequiredMark,
    scrollToFirstError,
    setScrollToFirstError,
  } = useFormSettings()

  return <ControllsMenu
    title="Config Props"
    className="config-menu-controls"
  >
    <Form.Item label="scrollToFirstError">
      <Switch
        checked={scrollToFirstError}
        onChange={setScrollToFirstError}
        size="small"
      />
    </Form.Item>
    <Form.Item label="requiredMark">
      <Switch
        checked={requiredMark}
        onChange={setRequiredMark}
        size="small"
      />
    </Form.Item>
    <Form.Item label="locale">
      <Radio.Group value={locale} onChange={changeLocale} size="small">
        <Radio.Button key="en" value={locales.enUS}>
          English
        </Radio.Button>
        <Radio.Button key="cn" value={locales.zhCN}>
          中文
        </Radio.Button>
      </Radio.Group>
    </Form.Item>

  </ControllsMenu>
}

ConfigControls.propTypes = {}

export default ConfigControls