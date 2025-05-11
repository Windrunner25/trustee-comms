<!-- src/components/Newsletter.vue -->
<template>
    <v-card class="mb-6" color="grey-lighten-4" elevation="1">
      <v-card-title class="text-h6">{{ title }}</v-card-title>
      <v-card-subtitle class="text-caption">{{ date }}</v-card-subtitle>
      <v-divider />
      <v-card-text v-html="renderedContent" class="mt-2" />
    </v-card>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { marked } from 'marked' // make sure to install marked
  
  const props = defineProps({
    title: String,
    date: String,
    content: String, // Markdown string
  })
  
  // Convert markdown to HTML
  const renderedContent = computed(() => marked.parse(props.content || ''))
  </script>
  