<script setup lang="ts">
import GuitarNeck from "../components/Guitar/GuitarNeck.vue";
import NavigationDrawer from "../components/ToolBar/NavigationDrawer.vue";
import ActionButtons from "../components/SessionPractice/ActionButtons.vue";

</script>

<template>
  <main>
    <NavigationDrawer />
    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
      <GuitarNeck />
    </v-main>
    <ActionButtons />
  </main>
</template>
