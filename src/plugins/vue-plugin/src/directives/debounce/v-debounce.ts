// 头部执行  尾部执行
const debounce = (
  event: keyof HTMLElementEventMap = 'click',
  el: HTMLElement,
  delay: number = 1000,
  callback: any,
  // 头部执行 尾部执行 默认头部执行
  headExecution = false
) => {
  let timer: any
  let tailExecution = true
  el.addEventListener(event, (...arg) => {
    if (timer) {
      clearTimeout(timer)
    }
    if (headExecution) {
      tailExecution && callback.apply(this, arg)
      tailExecution = false
    }
    timer = setTimeout(() => {
      !headExecution && callback.apply(this, arg)
      tailExecution = true
    }, delay)
  })
}
export { debounce }
