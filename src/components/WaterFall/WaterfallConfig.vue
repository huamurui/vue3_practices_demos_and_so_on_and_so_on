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
  reflowHandler()//这个是懒加载的时候，触发的
})

const init = () => {
  reflowHandler()
};


let token = ref(0)
function reflowHandler() {
  // clearTimeout(token.value)
  // token.value = setTimeout(
  reflow
  // , props.Config.interval)
}

function reflow() {
  emit('reflowed')
}


</script>

<style scoped >

</style>
