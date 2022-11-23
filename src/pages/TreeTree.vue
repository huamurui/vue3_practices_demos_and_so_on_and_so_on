<template>
  <div>
    <RecursionRender :data="treetree.getTreeData"></RecursionRender>
  </div>
</template>


<script setup lang="ts">
import RecursionRender from '../components/TreeTree/RecursionRender.vue'
import { useTreeStore } from '../stores'

const treetree = useTreeStore()

</script>
