import React from 'react'
import {
  ConfigProvider,
  Select,
  Form,
  Switch,
} from 'antd'
import useFormSettings from 'useFormSettings'

// controls
import ConfigControls from 'ControllsMenu/ConfigControls/ConfigControls'
import FormControls from 'ControllsMenu/FormControls/FormControls'
import FormStateControls from 'ControllsMenu/FormStateControls/FormStateControls'
import FormItemControls from 'ControllsMenu/FormItemControls/FormItemControls'

// forms
import SimpleForm from './form-examples/BasicForm/BasicForm'
import MultiFieldTypesForm from 'form-examples/MultiFieldTypesForm/MultiFieldTypesForm'
import ReactHookForm from 'form-examples/ReactHookForm/ReactHookForm'

import theme from 'styles/theme'
import './App.scss'

const App = () => {
  const [formDescription, setFormDescription] = React.useState("")
  const [formItemProps, setFormItemProps] = React.useState()
  const [submitValues, setSubmitValues] = React.useState()
  const [errorFields, setErrorFields] = React.useState()

  const onFinish = (values) => {
    console.log("onFinish", values)
    setSubmitValues(values)
    setErrorFields(null)
  }

  const onFinishFailed = (errorInfo) => {
    console.log("onFinishFailed", errorInfo)
    setSubmitValues(errorInfo.values)
    setErrorFields(errorInfo.errorFields)
  }

  const onValuesChange = (changedValues, allValues) => {
    console.log("onValuesChange", {
      changedValues,
      allValues,
    })
  }

  const [showLayout, setShowLayout] = React.useState(false)

  const formOptions = [
    { value: "basic-form", label: "Basic Form" },
    { value: "multi-fields-form", label: "Multi Fields Form" },
    { value: "react-hook-form", label: "React Hook Form" },
  ]
  const [form, setForm] = React.useState("basic-form")
  const formComponent = React.useMemo(() => {
    onFinish()
    const formProps = {
      onFinish,
      onFinishFailed,
      onValuesChange,
      showLayout,
    }
    switch (form) {
      case "basic-form":
        setFormDescription("This form shows how noStyle removes label and formatting. It also shows how submit values can be embedded. Also triggering validation onBlur.")
        setFormItemProps(["noStyle"])
        return <SimpleForm
          {...formProps}
        />
      case "multi-fields-form":
        setFormDescription("You can see all AntD component types in this form. You can also see how changing the locale affects AntD components. Default values are set on initialValues.")
        setFormItemProps(null)
        return <MultiFieldTypesForm
          {...formProps}
        />
      // case "no-formitems-form":
      //   setFormDescription("Do AntD components need to be wrapped with Form.Item for values to be collected.")
      //   setFormItemProps(null)
      //   return <NoFormItems
      //     {...formProps}
      //   />
      case "react-hook-form":
        setFormDescription("Form using react-hook-form library.")
        setFormItemProps(null)
        return <ReactHookForm
          {...formProps}
        />
      default:
        return null
    }
  }, [form])
  const {
    locale,
    requiredMark,
    scrollToFirstError,
  } = useFormSettings()

  const formConfig = {
    requiredMark,
    scrollToFirstError,
    validateMessages: {
      required: "${label} is required!",
      // ...
    }
  }

  return (
    <ConfigProvider
      theme={theme}
      locale={locale}
      form={formConfig}
    >
      <div className={`App${showLayout ? ' show-form-layout' : ' hide-form-layout'}`}>
        <div className="app-header">Ant Design Form</div>
        <div className="app-menu">
          <Form.Item label="Form Example"
            className="form-select-wrap"
          >
            <Select
              showSearch
              options={formOptions}
              placeholder="Select a form"
              onChange={setForm}
              defaultValue="react-hook-form"
              size="small"
              className="form-select"
            />
          </Form.Item>
          <Form.Item label="layout">
            <Switch
              checkedChildren="show"
              unCheckedChildren="hide"
              value={showLayout}
              onChange={setShowLayout}
              size="small"
            />
          </Form.Item>
        </div>
        <div className="form-description">{formDescription}</div>
        <ConfigControls />
        <FormControls />
        <FormStateControls />
        <FormItemControls items={formItemProps} />
        <div className="form-wrap">
          {formComponent}
        </div>
        {submitValues &&
          <div className={`submit-data-output${errorFields ? '' : ' success'}`}>
            <div className="submit-values-title">Submit Values</div>
            <pre>{JSON.stringify(submitValues, null, 2)}</pre>
          </div>
        }
        {errorFields &&
          <div className="submit-data-output error">
            <div className="submit-values-title">Error Fields</div>
            <pre>{JSON.stringify(errorFields, null, 2)}</pre>
          </div>
        }
      </div>
    </ConfigProvider>
  )
}

export default App
