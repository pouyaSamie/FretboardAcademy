<script setup lang="ts">
import GuitarNeck from "../components/Guitar/GuitarNeck.vue";
import NavBar from "../components/Header/NavBar.vue";

</script>

<template>
  <main>
    <NavBar />
    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
      <GuitarNeck />
    </v-main>
  </main>
</template>
