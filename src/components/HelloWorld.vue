<script setup lang="ts">
import { ref } from 'vue'
import  { useHelloStore} from '../store';
const hello = useHelloStore();

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <button type="button" @click="hello.increment()">{{hello.name}} count is {{ hello.count }}, its double count is {{hello.doubleCount}}</button>
  </div>
</template>

