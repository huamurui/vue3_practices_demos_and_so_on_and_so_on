import { createRouter, createWebHistory } from "vue-router"
import TreeTree from '../pages/TreeTree.vue'
import WaterFall from '../pages/WaterFall.vue'

const routes = [
  {
    path: "/treetree",
    name: "TreeTree",
    component: TreeTree
  },
  {
    path: "/waterfall",
    name: "WaterFall",
    component: WaterFall
  }

]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})


export default router