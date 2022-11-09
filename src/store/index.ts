import {defineStore } from 'pinia';
import { buildTree } from '../hooks/tree-utils';

export const useHelloStore = defineStore({
  id: 'hello',
  state: () => {
    return{
      count: 0,
      name :'pinia'
    }
  },
  getters: {
    doubleCount(): number {
      return this.count * 2;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});


export const useTreeStore = defineStore({
  id: 'treetree',
  state: () => {
    return{
      initDatala : [
        { id: '1', content: 'biu', pid: '0' },
        { id: '11', content: 'biubiu', pid: '1' },
        { id: '12', content: 'biuta', pid: '1' },
        { id: '122', content: 'biutata', pid: '12' },
        { id: '2', content: 'ta', pid: '0' },
        { id: '21', content: 'tabiu', pid: '2' },
        { id: '22', content: 'tata', pid: '2' },
        { id: '222', content: 'tatata', pid: '22' },
      ]
    }
  },
  getters: {
    getTreeData(): TreeList[] {
      return buildTree<"id", "pid", FlatList>(this.initDatala, "id", "pid");
    }
  },
  actions: {
    addItem(newItem:FlatList)  {
      this.initDatala.push(newItem);
    },
  },
});