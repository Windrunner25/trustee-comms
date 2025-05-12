<template>
  <section class="past-newsletters">
    <v-container class="py-8">
      <h2 class="text-h5 font-weight-bold mb-6">Previous Issues</h2>
      <v-row>
        <v-col
          v-for="(issue, i) in previousNewsletters"
          :key="i"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card class="pa-4 hover-card fade-in">
            <v-card-title class="text-h6">{{ issue.title }}</v-card-title>
            <v-card-subtitle class="text-caption">{{
              issue.date
            }}</v-card-subtitle>
            <v-card-actions>
            <NewsletterButton :newsletter="april2025[0]"/>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import NewsletterButton from "@/components/NewsletterButton.vue";

const previousNewsletters = [
  { title: "April 2025 - DSG Elections", date: "April 18, 2025" },
];

const april2025 = [
  {
    title: "April 2025 - DSG Elections",
    body: "Throughout the month of April, I was preparing for and running my DSG campaign. After ten days of campaigning and three days of voting, I was elected as the student representative to the Board of Trustees.",
  },
];
</script>

<style scoped>
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
