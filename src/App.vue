<template>
  <v-app id="inspire">


    <NavigationDrawer />
    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
      <GuitarNeck />
    </v-main>
    <ActionButtons />

  </v-app>
</template>

<script lang="ts" setup>

import GuitarNeck from "./components/Guitar/GuitarNeck.vue";
import NavigationDrawer from "./components/ToolBar/NavigationDrawer.vue";
import ActionButtons from "./components/SessionPractice/ActionButtons.vue";
</script>
<style>
.v-application__wrap {
  overflow-x: scroll;
  overflow-y: hidden;
}
</style>
