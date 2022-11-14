<template>
  <div class="wraps">
    <div :style="{
      height: item.height + 'px',
      background: item.background,
      top: item.top + 'px',
      left: item.left + 'px',
    }" v-for="item in waterList" class="items">
      <WaterfallItem :waterItem="item"></WaterfallItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import WaterfallItem from './waterfall-item.vue';
const props = defineProps<{
  list: any[];
}>();

const waterList = reactive<any[]>([]);


const init = () => {
  const heightList: any[] = [];
  const width = 180;
  const x = document.body.clientWidth;
  const column = Math.floor(x / width);

  for (let i = 0; i < props.list.length; i++) {
    if (i < column) {
      props.list[i].top = 10;
      props.list[i].left = i * width;
      heightList.push(props.list[i].height + 10);
      waterList.push(props.list[i]);
    } else {
      let current = heightList[0];
      let index = 0;
      heightList.forEach((h, inx) => {
        if (current > h) {
          current = h;
          index = inx;
        }
      });
      props.list[i].top = current + 20;
      props.list[i].left = index * width;
      heightList[index] = heightList[index] + props.list[i].height + 20;
      waterList.push(props.list[i]);
    }
  }
};

onMounted(() => {
  window.onresize = () => init();
  init();
});
</script>

<style scoped lang="less">
.wraps {
  margin: 20px;
  position: relative;
  height: 100%;

  .items {
    border-radius: 8px;
    position: absolute;
    width: 160px;

  }

  .items:hover {
    box-shadow: 0 0 10px #646cff;
  }
}
</style>
