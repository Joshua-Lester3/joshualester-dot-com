<template>
  <v-container>
    <v-btn color="primary" class="mb-4" @click="router.push('/blogList')">Back</v-btn>

    <v-card color="primary" class="pa-5">
      <h2>{{ post?.title }}</h2>
      <h5 v-if="post?.date">{{ getPrettyDate(post?.date) }}</h5>
      <ContentRenderer v-if="post" :value="post" />
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
const router = useRouter();
const name = useRoute().query.name;
const post = await queryCollection('blog').path(`/blog/${name}`).first();
function getPrettyDate(date: Date) {
  return new Date(date).toLocaleDateString('en-US', { timeZone: 'UTC' });
}
</script>