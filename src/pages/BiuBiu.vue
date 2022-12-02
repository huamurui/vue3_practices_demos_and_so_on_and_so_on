//here is a demo of how to use the component
<script setup lang="ts">

import { WaterfallConfig, WaterfallCell } from 'vue-biu-waterfall/lib'
import ItemFactory from '../mock/ItemFactory'
import { reactive, ref } from 'vue'
const config = {
  interval: 200,
  lineGap: 250,
  minLineGap: 100,
  maxLineGap: 320,
  singleMaxWidth: 300,
}


let items = reactive(ItemFactory.get(18))
let isReflowing = false
const reflow = () => {
  isReflowing = true
  if (isReflowing) {
    items.push(...ItemFactory.get(6))
    setTimeout(() => {
    }, 500)
  }
}
const reflowed = () => {
  console.log('reflowed')
  isReflowing = false
}
// let set = reactive({ ultraSetColumnCount: NaN })

const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const backToHome = () => {
  window.location.href = '/'
}

</script>

<template>
  <div class="back-to-top" @click="backToTop">backToTop</div>
  <div class="back-to-home" @click="backToHome">backToHome</div>
  <div>
    <WaterfallConfig :waterfallConfig="config" @scrollToBottom="reflow" @allThingDone="reflowed">
      <div style="position:relative;">
        <WaterfallCell :waterCell="item" v-for="item in items" :key="item.index">
          <div style="color:grey;"> {{ item.index }} </div>
        </WaterfallCell>
      </div>
    </WaterfallConfig>
  </div>

</template>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: red;
  /* 设置背景颜色，你可以设置自己想要的颜色或图片 */
  color: white;
  /* 文本颜色 */
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;
  /* 圆角 */
}

.back-to-home {
  position: fixed;
  bottom: 20px;
  left: 30px;
  z-index: 299;
  border: none;
  outline: none;
  background-color: red;
  /* 设置背景颜色，你可以设置自己想要的颜色或图片 */
  color: white;
  /* 文本颜色 */
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;
  /* 圆角 */
}
</style>