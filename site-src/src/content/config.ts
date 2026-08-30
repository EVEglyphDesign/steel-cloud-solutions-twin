import { defineCollection, z } from 'astro:content';

// The Emerson & Rush lesson: define collections up front so long-form always has somewhere to land.
// Every collection has a body slot that accepts MDX/MD content of any length.

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().optional(),
    nav: z.boolean().default(false),
    nav_label: z.string().optional(),
    hero_eyebrow: z.string().optional(),
    hero_title: z.string().optional(),
    hero_subtitle: z.string().optional(),
    cta_label: z.string().optional(),
    cta_href: z.string().optional(),
  })
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    hero_eyebrow: z.string().optional(),
    hero_title: z.string(),
    hero_subtitle: z.string().optional(),
    proof_points: z.array(z.object({
      title: z.string(),
      body: z.string()
    })).default([]),
    engagement_model: z.array(z.object({
      step: z.string(),
      body: z.string()
    })).default([]),
    cta_label: z.string().default('Schedule your free consultation'),
    cta_href: z.string().default('/contact'),
  })
});

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string().optional(),
    year: z.number().optional(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    hero_image: z.string().optional(),
  })
});

const people = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    years_experience: z.number().optional(),
    bio: z.string(),
    location: z.string().optional(),
    photo: z.string().optional(),
  })
});

const case_studies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string().optional(),
    outcome: z.string(),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).default([]),
    pdf: z.string().optional(),
  })
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().optional(),
    excerpt: z.string().optional(),
    hero_image: z.string().optional(),
  })
});

const partners = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    kind: z.enum(['sap', 'salesforce', 'delivery', 'other']),
    tier: z.string().optional(),
    summary: z.string(),
    logo: z.string().optional(),
    website: z.string().url().optional(),
  })
});

export const collections = { pages, services, portfolio, people, case_studies, posts, partners };
