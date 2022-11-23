export { }
// function reflowHandler(token: number, interval: number) {
//   clearTimeout(token)
//   token = setTimeout(reflow, interval)
// }

// function reflow() {
//   if (!this.$el) {
//     return
//   }
//   let width = element.clientWidth

//   let metas = $children(this).map((slot) => slot.getMeta())

//   let virtualRects: Array<Rectangle> = metas.map(() => ({}))
//   calculate(metas, virtualRects)
//   setTimeout(() => {
//     render(virtualRects, metas)
//     emit('reflowed')
//     //这里是给pages发消息，重置isBusy
//   }, 0)
// }
