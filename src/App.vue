<template>
  <guitarNeck msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import guitarNeck from './components/guitarNeck.vue';

export default defineComponent({
  name: 'App',
  components: {
    guitarNeck,
  },
});
</script>

<style lang="less">
@import url("assets/less/bootstrap.less");
@import url("assets/less/responsive.less");
</style>
