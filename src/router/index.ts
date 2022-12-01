import { createRouter, createWebHistory } from "vue-router"
import TreeTree from '../pages/TreeTree.vue'
import WaterFall from '../pages/BiuBiu.vue'

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
  },
  {
    path: "/async",
    name: "Async",
    component: () => import('../pages/Async.vue')
  }

]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})


export default router