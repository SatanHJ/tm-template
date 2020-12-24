import Vue from 'vue'

// antd的库
import {
  ConfigProvider,
  Layout,
  Input,
  InputNumber,
  Button,
  Switch,
  Radio,
  Checkbox,
  Select,
  Card,
  Form,
  Row,
  Col,
  Modal,
  Table,
  Tabs,
  Icon,
  Badge,
  Popover,
  Dropdown,
  List,
  Avatar,
  Breadcrumb,
  Steps,
  Spin,
  Menu,
  Drawer,
  Tooltip,
  Alert,
  Tag,
  Divider,
  DatePicker,
  TimePicker,
  Upload,
  Progress,
  Skeleton,
  Popconfirm,
  PageHeader,
  Result,
  Statistic,
  Descriptions,
  message,
  notification,
  Pagination,
  FormModel,
  Cascader,
  empty,
  Tree,
  Empty
} from 'ant-design-vue'

// 第三方的库
import VueCropper from 'vue-cropper'

Vue.use(ConfigProvider)
Vue.use(Layout)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Button)
Vue.use(Switch)
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(Select)
Vue.use(Card)
Vue.use(Form)
Vue.use(Row)
Vue.use(Col)
Vue.use(Modal)
Vue.use(Table)
Vue.use(Tabs)
Vue.use(Icon)
Vue.use(Badge)
Vue.use(Popover)
Vue.use(Dropdown)
Vue.use(List)
Vue.use(Avatar)
Vue.use(Breadcrumb)
Vue.use(Steps)
Vue.use(Spin)
Vue.use(Menu)
Vue.use(Drawer)
Vue.use(Tooltip)
Vue.use(Alert)
Vue.use(Tag)
Vue.use(Divider)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Upload)
Vue.use(Progress)
Vue.use(Skeleton)
Vue.use(Popconfirm)
Vue.use(PageHeader)
Vue.use(Result)
Vue.use(Statistic)
Vue.use(Descriptions)
Vue.use(Pagination)
Vue.use(FormModel)
Vue.use(Cascader)
Vue.use(empty)
Vue.use(Tree)
Vue.use(Empty)

// 二次确认
function doubleConfirm(content, title = '系统提示', ...opt) {
  return new Promise((resolve, reject) => {
    Modal.confirm({
      title,
      content,
      cancelText: opt.cancelText || '取消',
      okText: opt.okText || '确定',
      onCancel() {
        reject(Error('取消'))
      },
      onOk() {
        resolve()
      }
    })
  })
}

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning
Vue.prototype.$doubleConfirm = doubleConfirm

Vue.use(VueCropper)

process.env.NODE_ENV !== 'production' &&
  console.warn(
    '[脚手架提示] NOTICE: Antd使用按需引用的方式，如果出现使用Antd某个组件报需要注册该组件的错误，请在/src/core/lazy-use.js中添加该组件'
  )
