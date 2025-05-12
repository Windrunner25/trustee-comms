<template>
  <v-app>
    <v-main>
      <!-- Hero Section -->
      <section class="hero-section">
        <v-container class="py-16">
          <v-row align="center" justify="space-between">
            <v-col cols="12" md="6" class="text-left">
              <h1 class="display-2 font-weight-bold mb-4 fade-slide">
                Brian Wolf - Board of Trustees
              </h1>
              <p class="text-subtitle-1 mb-6 fade-slide">
                Subscribe to receive communications about what I am working on
                as a Trustee.
              </p>
              <v-text-field
                label="Your email address"
                hide-details
                class="mb-3 fade-slide"
                filled
                v-model="email"
              ></v-text-field>
              <v-btn
                color="primary"
                size="large"
                class="fade-slide"
                @click="subscribe"
                >Subscribe</v-btn
              >
              <v-alert
                v-if="success"
                type="success"
                class="mt-3 fade-slide"
                border="start"
                elevation="2"
                closable
              >
                Subscription successful!
              </v-alert>
              <p class="mt-4 text-caption fade-slide">
                * By clicking <strong>“Subscribe”</strong> button, you agree to
                be contacted by Brian Wolf via email.
              </p>
            </v-col>
            <v-col cols="12" md="6">
              <v-img
                src="../assets/IMG_6638.JPG"
                alt="Newsletter Hero Image"
                class="rounded-lg elevation-4 fade-slide"
                cover
                height="450"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </section>
      <v-container>
        <hr />
      </v-container>
      <!-- Latest Newsletter -->
      <section class="latest-newsletter">
        <v-container class="py-12">
          <v-row justify="center">
            <v-col cols="12" md="8">
              <v-card class="pa-6 hover-card fade-in">
                <v-card-title class="text-h5 font-weight-bold"
                  >Latest Happenings: May 2025</v-card-title
                >
                <v-card-text class="mt-2">
                  This month, I attended a dinner with the Board of Trustees at
                  the President's house. I introduced myself as the incoming
                  student representative to current Trustees.
                </v-card-text>
                <v-card-actions>
                  <NewsletterButton :newsletter="may2025[0]" />
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
      <NewsletterCard />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import { addRecipient } from "@/firebase/firebaseService";

const success = ref(false);
const email = ref("");
const may2025 = [
  {
    title: "May 2025 - DSG Elections",
    body: `As a Presidential Ambassador, I often host Trustees when they are on campus. 
 This past week, I attended a dinner with the Board of Trustees at President Lori 
 White's house. The first hour of the evening was spent mingling and discussing
 events from the day of meetings. At dinner, I shared more about myself and the
 campus experiences I hope to draw on as a student representative. Conversation points
 included my perspective on non-Greek student housing and time in the Computer Science
 department.`,
  },
];

async function subscribe() {
  if (email.value) {
    try {
      await addRecipient(email.value);
    } catch (error) {
      console.error("Error adding recipient:", error);
      alert("There was an error subscribing. Please try again later.");
    }
    console.log(`Subscribed: ${email.value}`);
    success.value = true;
    email.value = ""; // Clear the input field after subscription
  } else {
    alert("Please enter a valid email address.");
  }
}
</script>

<style scoped>
.hero-section {
  /* background: linear-gradient(135deg, #e6e7d8, #dbc979); */
  color: #333;
  font-family: "Montserrat", sans-serif;
}

.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.fade-in {
  animation: fadeIn 0.6s ease forwards;
  opacity: 0;
}

.fade-slide {
  animation: fadeSlideUp 0.6s ease forwards;
  opacity: 0;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes fadeSlideUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
