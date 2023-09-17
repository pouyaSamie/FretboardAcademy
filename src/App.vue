<template>
  <NavBar />
  <GuitarNeck v-if="false" msg="Welcome to Your Vue.js + TypeScript App"/>
  <NoteSelect />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GuitarNeck from './components/GuitarNeck.vue';
import NavBar from './components/NavBar.vue';
import NoteSelect from './components/NoteSelect.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    GuitarNeck,
    NoteSelect,
  },
});
</script>

<style lang="less">
@import url("assets/less/bootstrap.less");
@import url("assets/less/responsive.less");
</style>
