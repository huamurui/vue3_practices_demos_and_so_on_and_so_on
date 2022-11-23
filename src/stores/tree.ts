
import { buildTree } from '../hooks/tree-utils';
import data from '../mock/tree/data.json';
import { defineStore } from 'pinia'

export default defineStore({
  id: 'treetree',
  state: () => {
    return {
      initDatala: data
    }
  },
  getters: {
    getTreeData(): TreeList[] {
      return buildTree<"id", "pid", FlatList>(this.initDatala, "id", "pid");
    }
  },
  actions: {
    addItem(newItem: FlatList) {
      this.initDatala.push(newItem);
    },
  },
});