<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      <img src="./assets/img/logo.png" width="100" height="46" class="ml-3" />
      <v-app-bar-title></v-app-bar-title>
      <v-btn target="_blank" href="https://github.com/pouyaSamie/FretboardAcademy" icon>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>
    <NavigationDrawer :drawer="drawer" />
    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
      <GuitarNeck />
    </v-main>
    <ActionButtons />

  </v-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import GuitarNeck from "./components/Guitar/GuitarNeck.vue";
import NavigationDrawer from "./components/Navigation/NavigationDrawer.vue";
import ActionButtons from "./components/SessionPractice/ActionButtons.vue";
const drawer = ref(false);
</script>
<style>
.v-application__wrap {
  overflow-x: scroll;
  overflow-y: hidden;
}
</style>
