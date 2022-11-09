import { createRouter,createWebHistory} from "vue-router";
import TreeTree from '../pages/tree-tree.vue';
import WaterFall from '../pages/water-fall.vue';
import TransitionGroup from '../pages/transition-group.vue';

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
    path: "/transition-group",
    name: "TransitionGroup",
    component: TransitionGroup
  },

]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})


export default router