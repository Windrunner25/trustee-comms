<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Newsletter</v-toolbar-title>
      <v-spacer />
      <v-btn to="/" text>Home</v-btn>
      <v-btn to="/contact" text>Contact</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
