<template>
  <NavBar />
  <GuitarNeck v-if="false" />
  <NoteSelect  />
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import GuitarNeck from './components/GuitarNeck.vue';
import NoteSelect from './components/NoteSelect.vue';

</script>

<style lang="less">
@import url("assets/less/bootstrap.less");
@import url("assets/less/responsive.less");
</style>
