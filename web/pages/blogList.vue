<template>
  <v-container>
    <v-card color="tertiary">
      <v-sheet color="primary">
        <v-card-title>
          Blog Posts
        </v-card-title>
      </v-sheet>
      <v-card v-if="posts.length > 0" class="ma-8" min-height="100" v-for="post in posts" :key="post.id"
        @click="router.push(`/blog?name=${getName(post.path)}`)" color="secondary">
        <v-card-title>
          {{ post.title }}
        </v-card-title>
        <v-card-subtitle v-if="post.date">
          {{ getPrettyDate(post.date) }}
        </v-card-subtitle>
        <v-card-subtitle>
          {{ post.description }}
        </v-card-subtitle>
      </v-card>
      <v-card-title v-else>No posts yet...</v-card-title>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
const posts = await queryCollection('blog').order('date', 'DESC').all();
const router = useRouter();

function getName(path: string): string {
  let splitPath = path.split('/');
  return splitPath[splitPath.length - 1];
}
function getPrettyDate(date: Date) {
  return new Date(date).toLocaleDateString('en-US', { timeZone: 'UTC' });
}
</script>