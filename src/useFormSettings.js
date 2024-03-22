import React from "react"
import dayjs from 'dayjs'
import { enUS, zhCN } from 'locales'

// // locale
// // See https://ant.design/docs/react/i18n#adding-newplanguage
// import enUS from 'antd/locale/en_US'
// import zhCN from 'antd/locale/zh_CN'
// import 'dayjs/locale/zh-cn'

// dayjs.locale('en')

const FormSettingsContext = React.createContext()

export const FormSettingsProvider = ({
  children,
}) => {
  const [formSettings, setFormSettings] = React.useState({
    //   layout: "horizontal",
    //   labelCol: { span: 4 },
    //   wrapperCol: { span: 14 },
    requiredMark: true,
    //   colon: true,
    //   name: "form",
    //   size: "middle",
    //   initialValues: {},
    //   scrollToFirstError: false,
    //   validateMessages: {},
    //   onFinish: () => { },
    //   onFinishFailed: () => { },
    //   onValuesChange: () => { },
    //   form: null,
    //   formRef: null,
    //   formComponent: null,
    //   formProps: {},
    //   showLayout: true,
    //   submitTableDatasource: [],
    //   setFormSettings: (newFormSettings) => {
    //     setFormSettings({
    //       ...formSettings,
    //       ...newFormSettings,
    //     })
    //   },
  })

  // CONFIG
  const [locale, setLocal] = React.useState(zhCN)
  // const [locale, setLocal] = React.useState(enUS)
  const changeLocale = (e) => {
    console.log("changeLocale", {
      value: e.target.value,
    })
    const localeValue = e.target.value;
    setLocal(localeValue)
    if (!localeValue) {
      dayjs.locale('en')
    } else {
      dayjs.locale('zh-cn')
    }
  }

  const [requiredMark, setRequiredMark] = React.useState(true)
  const [scrollToFirstError, setScrollToFirstError] = React.useState(true)

  // FORM

  // LAYOUT

  // label and wrapper col spans
  const [labelColSpan, setLabelColSpan] = React.useState(8)
  const labelCol = React.useMemo(() => (labelColSpan === 0 ? null : { span: labelColSpan }), [labelColSpan])
  const [wrapperColSpan, setWrapperColSpan] = React.useState(16)
  const wrapperCol = React.useMemo(() => (wrapperColSpan === 0 ? null : { span: wrapperColSpan }), [wrapperColSpan])

  const [layout, setLayout] = React.useState()
  const [maxSize, setMaxSize] = React.useState("none")
  const [size, setSize] = React.useState("small")

  // STATE
  const [disabled, setDisabled] = React.useState(false)

  // FORM ITEMS
  const [noStyle, setNoStyle] = React.useState(false)

  return (
    <FormSettingsContext.Provider
      value={{
        // CONFIG
        locale,
        // setLocal,
        changeLocale,
        requiredMark,
        setRequiredMark,
        scrollToFirstError,
        setScrollToFirstError,

        // FORM

        // LAYOUT

        // label and wrapper col spans
        labelColSpan,
        setLabelColSpan,
        wrapperColSpan,
        setWrapperColSpan,
        labelCol,
        wrapperCol,

        layout,
        setLayout,
        maxSize,
        setMaxSize,

        size,
        setSize,

        // STATE
        disabled,
        setDisabled,

        // FORM ITEMS
        noStyle,
        setNoStyle,
      }}
    >
      {children}
    </FormSettingsContext.Provider>
  )
}

const useFormSettings = () => React.useContext(FormSettingsContext)

export default useFormSettings