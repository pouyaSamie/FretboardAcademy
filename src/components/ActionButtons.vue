<template>

 <VLayoutItem model-value position="bottom" class="text-end mb-10" size="88">
      <div class="mr-10">
        <v-row>
          <v-col v-if="isStarted" cols="1" vcols="12">
            <v-avatar color="green" size="56">F</v-avatar>
          </v-col>
          <v-spacer />
          <v-col cols="1">
            <V-Btn :icon="getIcon()" size="large" @click="toggleStart" :color="getColor()"/>
          </v-col>


        </v-row>
      </div>

    </VLayoutItem>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const toggleStart = () => {
  store.dispatch('updateStatus', !store.state.IsStarted);
};

const isStarted =computed(() => { 
  return store.state.IsStarted 
});

function getIcon() {
  console.log(isStarted.value)
  return isStarted.value ? "mdi-stop-circle" : "mdi-play-circle"
}

function getColor() {
  console.log(isStarted.value)
  return isStarted.value ? "red" : "green" 
}

</script>