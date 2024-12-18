import { defineCollection, z } from 'astro:content';

const eventsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    type: z.enum(['conference', 'seminar', 'deadline']),
    description: z.string(),
    featured: z.boolean().optional(),
  }),
});

const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.string(),
    aspects: z.array(z.string()),
    featured: z.boolean().optional(),
  }),
});

const publicationsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    journal: z.string(),
    year: z.string(),
    tags: z.array(z.string()),
    type: z.enum(['journal', 'conference', 'book']),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  'events': eventsCollection,
  'projects': projectsCollection,
  'publications': publicationsCollection,
};