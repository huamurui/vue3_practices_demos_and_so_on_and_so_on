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
  singleMaxWidth: 300,
}

let isBusy = ref(false)
let items = reactive(ItemFactory.get(100))
// 奇怪的尝试...
items.forEach((item: any) => {
  item.style = {
    width: item.width + 'px',
    height: item.height + 'px',
    background: item.style.background,
  }
})

const addItems = function () {
  if (!isBusy.value && items.length < 500) {
    isBusy.value = true
    items.push.apply(items, ItemFactory.get(50))
    console.log(items.length)
  }
}
const reflowed = function () {
  console.log('reflowed', isBusy.value)
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