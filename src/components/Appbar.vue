<template>
  <v-app-bar color="white" flat app height="80">
    <v-container class="d-flex align-center justify-center">
      <img
        src="@/assets/logo-depauw.png"
        alt="Logo"
        style="width: 100px; height: 100px; position: absolute; left: 20px"
        contain
      />
      <v-btn
        variant="text"
        class="text-uppercase font-weight-bold"
        color="primary"
        to="/"
        >Home</v-btn
      >
      <!-- <v-btn
          variant="text"
          class="text-uppercase font-weight-bold"
          color="primary"
          >About</v-btn
        > -->
      <v-btn
        variant="text"
        class="text-uppercase font-weight-bold"
        color="primary"
        to="/contact"
        >Contact</v-btn
      >
      <!-- <v-btn
          variant="text"
          class="text-uppercase font-weight-bold"
          color="primary"
          >Newsletters</v-btn
        > -->
    </v-container>
  </v-app-bar>
</template>
