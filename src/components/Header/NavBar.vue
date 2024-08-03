<template>
  <NavigationDrawer :drawer="drawer" />
  <v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>

    <img src="@/assets/img/logo.png" width="100" height="46" class="ml-3" />

    <v-app-bar-title></v-app-bar-title>
   <ActionPanle />
    <p class="tour-step3">
      Score: {{ userScoreStore.UserScore }} / {{ userScoreStore.TotalChoice }}
    </p>

    <v-btn target="_blank" href="https://github.com/pouyaSamie/FretboardAcademy" icon>
      <v-icon>mdi-github</v-icon>
    </v-btn>
    <Tour />
  </v-app-bar>
</template>
<script setup lang="ts">
import NavigationDrawer from "./NavigationDrawer.vue";
import { ref } from 'vue'
import Tour from '../Tour/SheperdTour.vue'
import ActionPanle from "@/components/SessionPractice/ActionPanle.vue"
import { useScoreStore } from '@/stores/userScoreStore'
const userScoreStore = useScoreStore()
const drawer = ref(false)

</script>
