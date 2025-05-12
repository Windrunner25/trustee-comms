<template>
  <v-dialog v-model="isDialogueOpen" max-width="50%" min-height="50%">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps" color="primary" variant="tonal"
        >Read More</v-btn
      >
    </template>

    <template v-slot:default>
      <v-card class="newsletter-card pa-6" elevation="6">
        <v-card-title class="newsletter-title mb-4">
          <span class="headline">{{ newsletter.title }}</span>
        </v-card-title>
        <v-card-text class="newsletter-body">{{ newsletter.body }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" variant="tonal" @click="close">Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Form state
const isDialogueOpen = ref(false);

const props = defineProps({
  newsletter: {
    type: Object,
    required: true,
  },
});

function close() {
  isDialogueOpen.value = false;
}
</script>

<style scoped>
.newsletter-card {
  border-left: 6px solid #dbc979; /* Vuetify primary blue */
  background-color: #fafafa;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
}

.newsletter-card:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

.newsletter-title {
  font-weight: 600;
  font-size: 1.5rem;
  color: #2c3e50;
}

.newsletter-body {
  line-height: 1.8;
  font-size: 1.05rem;
  color: #444;
}
</style>
