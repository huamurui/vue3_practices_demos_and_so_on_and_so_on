<template>
  <div>
    {{ item!.content }}
    <button style="  font-size: 0.6em;font-weight: 500;" @click="reply">reply</button>
    <div v-if="openReply" :key="item!.id">
      <input type="text" v-model="newItem.content">
      <button style="font-size: 0.6em;font-weight: 500;" @click="treetree.addItem({
        pid: item!.id,
        id: String(Math.random()),
        content: newItem.content,
      });
      reply()">ok</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTreeStore } from '../../stores';
const treetree = useTreeStore()

type Props = {
  item?: FlatList
}
defineProps<Props>()

let openReply = ref(false)
const reply = () => {
  openReply.value = !openReply.value
}

let newItem = {
  pid: '',
  id: '',
  content: ''
}

</script>
