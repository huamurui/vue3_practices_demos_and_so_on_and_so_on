interface WaterfallItem {
  width: number
  height: number
  order: number
  moveClass: string
}
//需要之后在这里添style吗？还是完全抽离？...是实例化的时候能加，别的不行...给我整的麻麻的

interface WaterfallConfig {
  autoResize: boolean // 一个boolean，关键字段，是否开启自动适应窗口改变UI
  interval: number // 防抖时间间隔，默认200ms
  lineGap: number         //列间隔
  minLineGap: number // 最小列间隔
  maxLineGap: number //最大列间隔
  singleMaxWidth: number //{单个元素的最大宽度
}

interface Rectangle {
  width: number
  height: number
  left: number
  top: number
}
