<template>
  <v-app>

    <v-app-bar color="tertiary">
      <v-app-bar-title @click="router.push('/')" class="cursor-pointer">
        Joshua Lester
      </v-app-bar-title>
      <!-- <template v-slot:append class="mr-5">
        <v-btn @click="router.push('/blogList')">Blog</v-btn>
      </template> -->
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const router = useRouter();
</script>
