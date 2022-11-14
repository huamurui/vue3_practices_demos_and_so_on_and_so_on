<template>
  <div :style="{
    background: item.background,
    textAlign: 'center',
    textAnchor: 'middle',
  }" @click="toDetail(item)">
    {{ item.height }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  waterItem: any;
}>();
const item = props.waterItem;


//想写router但是...没有id。没法写
const toDetail = (item: any) => {
  console.log(item.height);
};

</script>

<style scoped>

</style>