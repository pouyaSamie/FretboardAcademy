<template>
  <NavBar />
  <GuitarNeck />
  <NoteSelect  />
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import GuitarNeck from './components/Guitar/GuitarNeck.vue';
import NoteSelect from './components/NoteSelect.vue';

</script>

<style lang="less">
@import url("assets/less/bootstrap.less");
@import url("assets/less/responsive.less");
</style>
