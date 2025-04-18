import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      source: 'blog/*.md',
      type: 'page',
      schema: z.object({
        date: z.date(),
        title: z.string(),
      }),
    }),
  },
});
