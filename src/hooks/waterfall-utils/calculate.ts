export default function getRowStrategy(width: number, options: WaterfallConfig) {
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




/**
 * util
 */
function getArrayFillWith(item: any, count: number) {
  let getter = typeof item === 'function' ? () => item() : () => item
  let arr = []
  for (let i = 0; i < count; i++) {
    arr[i] = getter()
  }
  return arr
}

