<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue"
import HelloJsx from "./components/HelloJsx"
import { useRouter } from "vue-router"
const router = useRouter();
const toPagePath = (url: string) => {
  router.push({
    path: url,
  });
};


</script>
<template>
  <HelloWorld msg="Vite + Vue" />
  <HelloJsx msg="hello lalala"></HelloJsx>
  <button @click="toPagePath('/treetree')">treetree</button>
  <button @click="toPagePath('/waterfall')">waterfall</button>
  <button @click="toPagePath('/')">back</button>

  <router-view></router-view>
</template>

<style>
:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

button {
  margin: 5px;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #f3ebff;
  cursor: pointer;
  transition: border-color 0.25s;
}

button:hover {
  border-color: #646cff;
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>
