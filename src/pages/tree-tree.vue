<template>
  <div>
    <RecursionRender :data="treetree.getTreeData"></RecursionRender>
  </div>
</template>


<script setup lang="ts">
import RecursionRender from '../components/TreeTree/recursion-render.vue'
import { useTreeStore } from '../store'


const treetree = useTreeStore()
// 看看下面这一堆玩意，全白费！...pinia真棒嘿嘿嘿..小菠萝


// const initDatala = treetree.$state.initDatala
//这里已经是响应式的了...问题是后边那个buildTree不是响应式的。
//或者说我直接复制粘贴来的并不是一个hook，而是一个普通的纯纯的函数。看看怎么加生命周期。
//加了生命周期也没用，“因为这个函数是在setup里执行的，而不是在组件里执行的。”？现象是，我改变一下路由，再回来，data就变。但是如果只是点完ok，initdatala变了，但data不变。
//我再试试watch...感觉没人这么写，我真是个神经病 。

// let datala: Array<Object> = reactive(initDatala)
// datala.push({ id: '3', content: 'la', pid: '0' })
// const getItem = (item: FlatList,) => {
//   console.log(item)
//   datala.push(item)
// }
// console.log(datala)



// let data: TreeList[] = buildTree<"id", "pid", FlatList>(initDatala, "id", "pid")
// const datata = () => { data = buildTree<"id", "pid", FlatList>(initDatala, "id", "pid") }

//为什么啊wc...调用了datata为什么data还是tnnd不变啊啊啊
//调用了但没完全调用是吧
//那为什么切换路由可以让那玩意更新...要不我试试router.replace。弱智了我。

// watch(initDatala, () => {
//   datata()  //这一行完全没起作用，注释掉也是刷新route就变了。不对、这里的datata起作用了，consolelog的data变了的，但页面上的data没变。。
//   console.log('initDatala变了')
//   console.log(data)

// })


// 重新来看一看，initDatala是pinia的，buildtree也在watch里执行了，data作为一个变量也更新了...但vue知道initDatala却不知道data的变化？用reactive包了也不行。
// 也许我应该直接把data也交给pinia。

// onMounted(() => {
//   datata()
//   console.log('onMounted', data)
// })


//日了。不弄了。
//理想情况是我能完成功能，并且把buildTree变成一个真的钩子，在那里面去监听initDatala的变化，刷新等等。

//pinia还是很棒的。
//另外，好多东西的用途好相似......
//还有，那个瀑布的，“我觉得我应该把它变成一个组件，而不是一个页面。因为它的功能是把一个数组变成一个瀑布流，而不是一个页面。这样的话，我就可以在任何页面里用它了。而不是每次都要写一遍。”
//copilot真聪明，很好的建议，我没想这个，但值得参考。我想的是在瀑布那边也加点能操作的功能，比如搞个随机添加item的按钮。



//setup本身也算一个生命周期，就是创建组件之前...
//我想到了一个可能。那就是，我在这个组件里用生命周期的钩子或wacth里去做东西，可能就是不起效果的，因为这个组件早就tmd完活了，数据更新涉及去创建新的小组件...？所以应该在小组件里去调生命周期？或者生命周期方案在这里压根就是不行的...去哪整啊啊啊。
//到底啥原因啊。。。日。

</script>
