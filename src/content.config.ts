import { defineCollection, z } from 'astro:content';

// Define your blog collection
const blogCollection = defineCollection({
  // Optionally define schema for frontmatter
  schema: z.object({
    title: z.string(),
    created: z.date(),
    updated: z.date(),
    revision: z.number(),
    language: z.string(),
    visibility: z.boolean().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  tutorials: blogCollection,
  "collections/lecture_notes-2025fall-discrete_structures": blogCollection,
};
