import { defineField, defineType } from "sanity";

const sentiment = defineField({
  name: "sentiment",
  title: "Sentiment",
  type: "text",
  validation: (Rule: any) => Rule.required(),
});

const attribution = defineField({
  name: "attribution",
  title: "Attribution",
  type: "text",
  validation: (Rule: any) => Rule.required(),
});

const image = defineField({
  name: "image",
  title: "Image",
  type: "image",
  options: { hotspot: true },
  validation: (Rule: any) => Rule.required(),
  fields: [
    defineField({
      name: "alt",
      title: "Alternative Text",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
  ],
});

export const testimonials = defineType({
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [sentiment, attribution, image],
  preview: {
    select: {
      title: "attribution",
    },
  },
});
