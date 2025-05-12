<template>
    <v-container class="py-8" style="width: 50%;">
      <h1 class="text-h4 mb-4">Contact Me</h1>
      <v-form>
        <v-text-field label="Name" required />
        <v-text-field label="Email" type="email" required />
        <v-textarea label="Message" rows="5" required />
        <v-btn color="primary" class="mt-4">Send</v-btn>
      </v-form>
    </v-container>
  </template>
  