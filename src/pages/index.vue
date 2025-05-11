<template>
  <v-app>
    <!-- Top Toolbar -->
    <v-app-bar color="white" flat app height="80">
      <v-container class="d-flex justify-space-between align-center">
        <!-- Logo -->
        <v-row align="center" no-gutters>
          <!-- <v-img src="/logo.svg" alt="Logo" max-height="40" max-width="160" contain class="mr-4"></v-img> -->
        </v-row>

        <!-- Nav Links -->
        <v-row class="d-none d-md-flex" align="center" no-gutters>
          <v-btn variant="text" class="text-uppercase font-weight-bold" color="primary">About</v-btn>
          <v-btn variant="text" class="text-uppercase font-weight-bold" color="primary">Contact</v-btn>
          <v-btn variant="text" class="text-uppercase font-weight-bold" color="primary">News</v-btn>
          <v-btn variant="text" class="text-uppercase font-weight-bold" color="primary">Services</v-btn>
          <v-btn variant="text" class="text-uppercase font-weight-bold" color="primary">Policy & Solutions</v-btn>
        </v-row>

        <!-- Icons -->
        <v-row align="center" class="ml-4" no-gutters>
          <v-icon color="red" class="mx-2">mdi-youtube</v-icon>
          <v-icon color="red" class="mx-2">mdi-twitter</v-icon>
          <v-icon color="red" class="mx-2">mdi-instagram</v-icon>
          <v-icon color="red" class="mx-2">mdi-facebook</v-icon>
          <v-icon color="red">mdi-email</v-icon>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <!-- Hero Section -->
      <section class="hero-section">
        <v-container class="py-16">
          <v-row align="center" justify="space-between">
            <v-col cols="12" md="6" class="text-left">
              <h1 class="display-2 font-weight-bold mb-4 fade-slide">
                Make Each New<br />Newsletter Better<br />Than the Last
              </h1>
              <p class="text-subtitle-1 mb-6 fade-slide">
                Email has an ability many channels don’t: creating valuable, personal touches – at scale.
              </p>
              <v-text-field label="Your email address" hide-details class="mb-3 fade-slide" filled></v-text-field>
              <v-btn color="primary" size="large" class="fade-slide">Subscribe</v-btn>
              <p class="mt-4 text-caption fade-slide">
                * By clicking <strong>“Subscribe”</strong> button, you agree to our Terms and that you have read our
                <strong>Data Use Policy</strong>.
              </p>
            </v-col>
            <v-col cols="12" md="6">
              <v-img
                src="../assets/suit.JPG"
                alt="Newsletter Hero Image"
                class="rounded-lg elevation-4 fade-slide"
                cover
                height="450"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Latest Newsletter -->
      <section class="latest-newsletter">
        <v-container class="py-12">
          <v-row justify="center">
            <v-col cols="12" md="8">
              <v-card class="pa-6 hover-card fade-in">
                <v-card-title class="text-h5 font-weight-bold">Latest Issue: May 2025</v-card-title>
                <v-card-text class="mt-2">
                  This month we unpack what's changing in the data landscape — and how to stay ahead.
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" variant="tonal">Read</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Past Newsletters -->
      <section class="past-newsletters">
        <v-container class="py-8">
          <h2 class="text-h5 font-weight-bold mb-6">Previous Issues</h2>
          <v-row>
            <v-col v-for="(issue, i) in previousNewsletters" :key="i" cols="12" sm="6" md="4">
              <v-card class="pa-4 hover-card fade-in">
                <v-card-title class="text-h6">{{ issue.title }}</v-card-title>
                <v-card-subtitle class="text-caption">{{ issue.date }}</v-card-subtitle>
                <v-card-actions>
                  <v-btn color="primary" variant="tonal" text>Read</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-main>
  </v-app>
</template>

<script setup>
const previousNewsletters = [
  { title: 'April 2025 - Spring Recap', date: 'April 5, 2025' },
  { title: 'March 2025 - Looking Ahead', date: 'March 10, 2025' },
  { title: 'February 2025 - Behind the Scenes', date: 'February 15, 2025' },
]
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #e6e7d8, #dbc979);
  color: #333;
  font-family: 'Montserrat', sans-serif;
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
