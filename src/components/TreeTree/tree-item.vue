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
import { useTreeStore } from '../../store';
const treetree = useTreeStore()

type Props = {
  item?: FlatList
}
defineProps<Props>()

//服了。想要响应式得加个ref包起来。取值还要xxx.value。vue2的话是写data里就自动包。
let openReply = ref(false)
const reply = () => {
  openReply.value = !openReply.value
}

let newItem = {
  pid: '',
  id: '',
  content: ''
}


// const emit2 = defineEmits<{
//   (emitName: 'ok2', newItem: FlatList): void
// }>()

// const sendMessage = (pid: string) => {
//   newItem.pid = pid
//   newItem.id = String(Math.random())
//   // emit2('ok2', newItem)

//   treetree.$state.initDatala.push(newItem)
//   // console.log(newItem)
//   // console.log(treetree.$state.initDatala)
//   reply()

//   // 这是coplit想的，虽然不是我想要的，但也有点意思。
//   // if (newItem.content) {
//   //   if (item?.children) {
//   //     item.children.push(newItem)
//   //   } else {
//   //     item.children = [newItem]
//   //   }
//   //   newItem = {
//   //     id: Math.random(),
//   //     content: ''
//   //   }
//   // }
//   // openReply = false
// }




</script>

<style scoped>

</style>