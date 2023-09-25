<template>
  <v-app id="inspire">
    <v-navigation-drawer temporary scrim   v-model="drawer">
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Fretboard Academy</v-app-bar-title>
    </v-app-bar>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <GuitarNeck />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import GuitarNeck from './components/Guitar/GuitarNeck.vue';
  const drawer = ref(false)
</script>
<style>
.v-application__wrap{
  overflow: scroll;
}
</style>
