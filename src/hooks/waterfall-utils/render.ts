// md确实是乱七八糟...
function render(rects: Array<Rectangle>, metas: Array<WaterfallItem>) {
  rects.forEach((rect, i) => {
    let style = metas[i].style
    metas[i].rect = rect
    for (let prop in rect) {
      style[prop] = rect[prop] + 'px'
    }
  })
}


