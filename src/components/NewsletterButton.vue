<template>
  <v-dialog v-model="isDialogueOpen" max-width="500px">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps" color="primary" variant="tonal"
        >Read</v-btn
      >
    </template>

    <template v-slot:default>
      <v-card>
        <v-card-title>
          <span class="headline">Props Text</span>
        </v-card-title>
        <v-card-text>More props text</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" variant="tonal" @click="close">Cancel</v-btn>
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

function close() {
  isDialogueOpen.value = false;
}
</script>
