<template>
  <div>
    <WaterfallConfig :Config="lalala" @reflowed="reflowed">
      <WaterfallItem v-for="item  in items" :key="item.index" :waterItem="item">
        <div :style="item.style" :index="item.index">{{ item }}</div>
      </WaterfallItem>
    </WaterfallConfig>

  </div>
</template>

<script setup lang='ts'>
import WaterfallConfig from '../components/WaterFall/WaterfallConfig.vue'
import WaterfallItem from '../components/WaterFall/WaterfallItem.vue'
import ItemFactory from '../utils/ItemFactory'

const lalala = {
  autoResize: true,
  interval: 200,
  lineGap: 250,
  minLineGap: 100,
  maxLineGap: 320,
  singleMaxWidth: 300,//这个貌似，，没什么用
}

let isBusy = ref(false)
let items = reactive(ItemFactory.get(100))
const addItems = function () {
  if (!isBusy.value && items.length < 500) {
    isBusy.value = true
    items.push.apply(items, ItemFactory.get(50))
    console.log(items.length)
  }
}
const reflowed = function () {
  console.log('reflowed', isBusy.value)
  //en ...emit这个东西啊，要谨慎使用。
  //一般都是子组件，通过emit，通知父组件，子组件的状态发生了变化，父组件需要做出相应的处理。
  //这里是在Conifg那边设了一个定时器，每隔200ms，就会允许触发一次reflowed事件。但...这只是基础。
  //有很多问题..比如计算部分你到底要放哪。。
  isBusy.value = false
}
onMounted(() => {
  window.addEventListener('scroll', function () {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if (scrollTop + window.innerHeight >= document.body.clientHeight) {
      addItems()
    }
  })
})


</script>

<style scoped>

</style>