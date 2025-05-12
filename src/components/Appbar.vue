<template>
  <!-- Top Toolbar -->
  <v-app-bar color="white" flat app height="80">
    <v-container class="d-flex justify-space-between align-center">
      <!-- Logo -->
      <v-row align="center" no-gutters>
          <v-img
            src="@/assets/logo-depauw.png"
            alt="Logo"
            max-height="100"
            contain
            class="mr-4"
          ></v-img>
      </v-row>

      <!-- Nav Links -->
      <v-row class="d-none d-md-flex" align="center" no-gutters>
        <v-btn
          variant="text"
          class="text-uppercase font-weight-bold"
          color="primary"
          to="/"
          >Home</v-btn
        >
        <v-btn
          variant="text"
          class="text-uppercase font-weight-bold"
          color="primary"
          >About</v-btn
        >
        <v-btn
          variant="text"
          class="text-uppercase font-weight-bold"
          color="primary"
          to="/contact"
          >Contact</v-btn
        >
        <v-btn
          variant="text"
          class="text-uppercase font-weight-bold"
          color="primary"
          >Newsletters</v-btn
        >
      </v-row>
    </v-container>
  </v-app-bar>
</template>
