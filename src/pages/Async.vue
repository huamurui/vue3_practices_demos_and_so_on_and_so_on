<template>
  <div>
    <Suspense>
      <template #default>
        <SyncVue></SyncVue>
      </template>
      <template #fallback>
        <skeletonVue></skeletonVue>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import skeletonVue from '../components/Async/skeleton.vue';

import { defineAsyncComponent } from 'vue'
const SyncVue = defineAsyncComponent(() => import('../components/Async/sync.vue'))

</script>

<style scoped>

</style>