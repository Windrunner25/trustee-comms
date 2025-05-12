<script setup lang="ts">
import Appbar from './components/Appbar.vue';

</script>

<template>
  <v-app>
    <v-main>
      <Appbar/>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
body {
  font-family: 'Montserrat', sans-serif;
}
</style>