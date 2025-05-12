<template>
  <v-container class="py-8" style="width: 50%">
    <h1 class="text-h4 mb-4">Contact Me</h1>
    <v-form @submit.prevent="submitForm">
      <v-text-field label="Name" v-model="name" required />
      <v-text-field label="Email" v-model="email" type="email" required />
      <v-textarea label="Message" v-model="message" rows="5" required />
      <v-btn color="primary" class="mt-4" @click="submitForm">Send</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { addMessage } from "@/firebase/firebaseService";

// Form state
const name = ref("");
const email = ref("");
const message = ref("");

async function submitForm() {
  // Handle form submission logic here
  try {
    await addMessage({
      name: name.value,
      email: email.value,
      message: message.value,
    });
  } catch (error) {
    console.error("Error sending message:", error);
  }
  console.log("Form submitted:", {
    name: name.value,
    email: email.value,
    message: message.value,
  });

  console.log("Form submitted:", { name, email, message });
}
</script>

<style scoped>
.v-container {
  max-width: 600px;
  margin: auto;
}
</style>
