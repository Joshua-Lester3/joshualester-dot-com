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
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers';
import { createSignedFetcher, type SignedFetcherOptions } from 'aws-sigv4-fetch';

const name: Ref<string> = ref("");
const email: Ref<string> = ref("");
const message: Ref<string> = ref("");
const submitted: Ref<boolean> = ref(false);


async function callLambdaFunction() {
  try {
    const credentialsProvider = fromCognitoIdentityPool({
      identityPoolId: "us-west-2:7364a1c1-1935-4ddc-94ec-ca2237048f96",
      clientConfig: { region: 'us-west-2' },
    });
    const credProvider = await credentialsProvider();
    const url = "https://jinii423dk7tlzqzargo4vwih40vaiyt.lambda-url.us-west-2.on.aws/";
    const urlObj = new window.URL(url);
    urlObj.searchParams.append('name', name.value);
    urlObj.searchParams.append('email', email.value);
    urlObj.searchParams.append('message', message.value);
    const options: SignedFetcherOptions = {
      service: 'lambda',
      region: 'us-west-2',
      credentials: {
        accessKeyId: credProvider.accessKeyId,
        secretAccessKey: credProvider.secretAccessKey,
        sessionToken: credProvider.sessionToken,
      }
    };
    const signedFetch = createSignedFetcher(options);
    const response = await signedFetch(urlObj);
    submitted.value = true;
  } catch (error) {
    console.error('Error calling lambda contact form function:', error)
  }
}
</script>