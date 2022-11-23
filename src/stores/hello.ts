import { defineStore } from 'pinia'

export default defineStore({
  id: 'hello',
  state: () => {
    return {
      count: 0,
      name: 'pinia'
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

