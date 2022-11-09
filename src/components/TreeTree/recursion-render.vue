<template>
  <div style="margin-left:10px;border-left:5px solid grey">
    <div :key="item.id" v-for="item in data">
      <TreeItem :item="{
        id: item.id,
        content: item.content,
        pid: item.pid,
      }"></TreeItem>
      <RecursionRender v-if="item?.children?.length" :data="item.children" />
    </div>
  </div>
</template>

<script setup lang="ts">
import RecursionRender from './recursion-render.vue';
import TreeItem from './tree-item.vue';
type Props = {
  data?: TreeList[]
}
defineProps<Props>()



</script>

