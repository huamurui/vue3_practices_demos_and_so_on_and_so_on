export default function calculate(config: WaterfallConfig, metas: Array<WaterfallItem>, rects: Array<Rectangle>) {
  let a
  verticalLineProcessor.calculate(a, config, metas, rects)
}

//这里的config，一个是拿客户端sytle
var verticalLineProcessor = (() => {
  //好了，这里是真正的计算了。
  function calculate(item: any, options: WaterfallConfig, metas: Array<WaterfallItem>, rects: Array<Rectangle>) {
    let width = item.$el.clientWidth
    let strategy = getRowStrategy(width, options)//getCellwidthAndColumcount，是的我会这么叫...？要不写注释里好了。不变名字了
    let tops = [1, 2]
    metas.forEach((meta, index) => {
      let offset = tops.reduce(
        (last, top, i) => (top < tops[last] ? i : last),
        0
      )
      //这里的tops是每列的高度，offset是最短的那一列的index..这里写的有点...不好理解
      let width = strategy.width[offset % strategy.count]
      let rect = rects[index]
      rect.top = tops[offset]
      rect.left =
        strategy.left + (offset ? sum(strategy.width.slice(0, offset)) : 0)
      rect.width = width
      rect.height = meta.height * (width / meta.width)
      //重新得到的height就这么简单的一行...日。算是看完了吧。这代码写的...嗯...一般，花活太多。
      tops[offset] = tops[offset] + rect.height
    })
    item.style.height = Math.max.apply(Math, tops) + 'px'
  }

  //综下所述，我觉得，叫getCellsWidthAndColumCount更好
  //这个策略是算列数和每列的宽度，主要变量有...有好多。抄了！
  function getRowStrategy(width: number, options: WaterfallConfig) {
    let count = width / options.lineGap
    // 列数，利用默认值计算的，向下取整
    let slotWidth
    if (options.singleMaxWidth >= width) {
      count = 1
      slotWidth = Math.max(width, options.minLineGap)
      //如果元素宽度比窗口还大，直接一列，让元素宽取可以取到的最大
    } else {
      let maxContentWidth = options.maxLineGap * ~~count
      let minGreedyContentWidth = options.minLineGap * ~~(count + 1)
      //~~应该是取整的意思，这里计算出两个变量，最大最小的整体宽度
      let canFit = maxContentWidth >= width
      let canFitGreedy = minGreedyContentWidth <= width
      //...greedy，...做两个布尔值，然后是判断。
      if (canFit && canFitGreedy) {
        count = Math.round(count)//round四舍五入
        slotWidth = width / count//单元素宽度...再次赋值
      } else if (canFit) {
        count = ~~count
        slotWidth = width / count
      } else if (canFitGreedy) {
        count = ~~(count + 1)
        slotWidth = width / count
        //这两个else if，count取整一个向上一个向下，然后和上面一样计算单元素宽度
      } else {
        //最后这种...向下取整，宽度取最大
        count = ~~count
        slotWidth = options.maxLineGap
      }
      if (count === 1) {
        //如果算完了还是一列，那么宽度取最大
        slotWidth = Math.min(width, options.singleMaxWidth)
        slotWidth = Math.max(slotWidth, options.minLineGap)
      }
    }
    return {
      width: getArrayFillWith(slotWidth, count),//元素宽度...也许是为了grow的时候方便用的，也是可以删掉...
      count: count,//列数...重命名以下，columnCount
      left: 0,//如果你不用的话...把这个删了吧。
    }
  }


  return {
    calculate,
  }
})()



/**
 * util
 */
function sum(arr: Array<number>) {
  return arr.reduce((sum, val) => sum + val)
}

function getArrayFillWith(item: any, count: number) {
  let getter = typeof item === 'function' ? () => item() : () => item
  let arr = []
  for (let i = 0; i < count; i++) {
    arr[i] = getter()
  }
  return arr
}

