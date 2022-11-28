<template>
  <div class="wraps">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

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
  reflow()//这个是懒加载的时候，触发的
})

const init = () => {
  reflow()
}
const reflow = () => {
  emit('reflowed')
}


</script>

<style scoped >

</style>
