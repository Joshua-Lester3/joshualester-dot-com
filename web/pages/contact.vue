<template>
  <v-container>
    <v-card v-if="!submitted" color="tertiary" class="ma-3">
      <v-sheet color="secondary">
        <v-card-title>
          Contact Form
        </v-card-title>
      </v-sheet>
      <v-container>
        <v-text-field max-width="400" label="Name" bg-color="primary" variant="solo" v-model="name" />
        <v-text-field max-width="400" label="Email" bg-color="primary" variant="solo" v-model="email" />
        <v-textarea label="Message" bg-color="primary" variant="solo" clearable v-model="message" />
      </v-container>
      <v-card-actions>
        <v-spacer />
        <v-btn variant="elevated" color="secondary" class="mr-3 mb-3" @click.once="callLambdaFunction">
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card v-else color="tertiary" class="ma-3">
      <v-sheet color="secondary">
        <v-card-title>
          Contact Form
        </v-card-title>
      </v-sheet>
      <div class="ma-5 text-subtitle-1">
        Thanks for reaching out! I'll try to get back to you as soon as possible :)
      </div>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import axios from 'axios';
const name: Ref<string> = ref("");
const email: Ref<string> = ref("");
const message: Ref<string> = ref("");
const submitted: Ref<boolean> = ref(false);

async function callLambdaFunction() {
  try {
    const url = "https://jinii423dk7tlzqzargo4vwih40vaiyt.lambda-url.us-west-2.on.aws/";
    const response = await axios.get(url, {
      params: {
        name: name.value,
        email: email.value,
        message: message.value
      }
    });
    submitted.value = true;
  } catch (error) {
    console.error('Error calling lambda contact form function:', error)
  }
}
</script>