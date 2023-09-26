<template>
  <v-app id="inspire">
   
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Fretboard Academy</v-app-bar-title>
    </v-app-bar>
    <NavigationDrawer :drawer="drawer" />
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <GuitarNeck v-if="false" />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import GuitarNeck from './components/Guitar/GuitarNeck.vue';
  import NavigationDrawer from './components/Navigation/NavigationDrawer.vue';
  const drawer = ref(false)
</script>
<style>
.v-application__wrap{
  overflow: scroll;
}
</style>
