import dayjs from 'dayjs'

// locale
// See https://ant.design/docs/react/i18n#adding-newplanguage
import enUS from 'antd/locale/en_US'
import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'
dayjs.locale('en')

export {
  enUS,
  zhCN,
}