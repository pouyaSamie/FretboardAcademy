<template>
      <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      <img src="@/assets/img/logo.png" width="100" height="46" class="ml-3" />
      <v-app-bar-title></v-app-bar-title>
      <v-btn target="_blank" href="https://github.com/pouyaSamie/FretboardAcademy" icon>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>
</template>
<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps(['drawer']);
const { drawer } = toRefs(props);
</script>