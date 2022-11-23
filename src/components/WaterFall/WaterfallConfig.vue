<template>
  <div class="wraps">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import calculate from "../../hooks/waterfall-utils/calculate"
const props = defineProps<{
  Config: WaterfallConfig
  // list: any[]
}>();
const emit = defineEmits<{
  (event: 'reflowed', ...args: any[]): void
}>();

onMounted(() => {
  window.onresize = () => init()//首次加载
})

onBeforeUpdate(() => {
  reflowHandler()//这个是懒加载的时候，触发的
})

const init = () => {
  reflowHandler()
};


let token = ref(0)
function reflowHandler() {
  clearTimeout(token.value)
  token.value = setTimeout(reflow, props.Config.interval)
}

function reflow() {
  calculate(props.Config, fuck1, fuck2, fuck3)
  //尝试传参的过程应该也知道这是在干什么了...传入的是什么，数据要从哪来，计算的结果是什么，是返回值还是直接操作了变量...
  //变量，挪地方就容易...哈哈。变量需要集中在一个namespace里去演奏，而不变的量，每过一次函数都是一个全新的，有关系，又没关系。

  //...有些明白了，为什么要用返回值，而不是直接操作变量...容易拆。 某种意义上也更容易理解。
  //这个可能是我大一写那个狗屁C的管理系统程序时，就在怀疑的地方。

  //总之现在这样你是拆不了的。不仅仅是类型的问题，还有变量的问题。你需要变量吗？你要在哪里做这些东西？
  //另外如果要除掉变量，那些中转量的名字类型名字你得重新起一堆名字。因为ts需要一串串具体的类型...
  //rnm，退钱！
  emit('reflowed')
}


</script>

<style scoped >

</style>
