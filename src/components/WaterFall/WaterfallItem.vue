<template>
  <div @click="toDetail(item)">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  waterItem: WaterfallItem;
}>()
const item = props.waterItem
const emit = defineEmits<{
  (event: 'reflowed', ...args: any[]): void
  (event: 'reflow', ...args: any[]): void
}>()


const toDetail = (item: any) => {
  console.log(item.height);
};

onMounted(() => {
  emit('reflow');
  emit('reflowed');
});
</script>

<style scoped>

</style>