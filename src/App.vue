<template>
  <NavBar />
  <GuitarNeck msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GuitarNeck from './components/GuitarNeck.vue';
import NavBar from './components/NavBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    GuitarNeck,
  },
});
</script>

<style lang="less">
@import url("assets/less/bootstrap.less");
@import url("assets/less/responsive.less");
</style>
