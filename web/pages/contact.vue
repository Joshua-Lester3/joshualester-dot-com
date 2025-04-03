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
import aws4 from 'aws4';
import { URL } from 'url';
import AWS from 'aws-sdk';
import { Credentials } from '@aws-amplify/core';

const name: Ref<string> = ref("");
const email: Ref<string> = ref("");
const message: Ref<string> = ref("");
const submitted: Ref<boolean> = ref(false);

AWS.config.region = 'us-west-2';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-west-2:7364a1c1-1935-4ddc-94ec-ca2237048f96'
});

async function callLambdaFunction() {
  try {
    const creds = AWS.config.credentials as AWS.Credentials;

    creds.get(async (err: any) => {
      if (err) {
        console.error('error retrieving creds', err);
        return;
      }
    });
    const url = "https://jinii423dk7tlzqzargo4vwih40vaiyt.lambda-url.us-west-2.on.aws/";
    const urlObj = new URL(url);
    const opts = {
      host: urlObj.host,
      path: urlObj.pathname + urlObj.search,
      method: 'GET',
      service: 'lambda',
      region: 'us-west-2',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    aws4.sign(opts, {
      accessKeyId: creds.accessKeyId,
      secretAccessKey: creds.secretAccessKey,
      sessionToken: creds.sessionToken
    });


    const response = await axios.get(url, {
      headers: opts.headers,
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