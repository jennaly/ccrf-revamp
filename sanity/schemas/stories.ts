import { defineField, defineType } from "sanity";

const title = defineField({
  name: "title",
  title: "Title",
  type: "string",
  validation: (Rule: any) => Rule.required(),
});

const slug = defineField({
  name: "slug",
  title: "Slug",
  type: "slug",
  options: {
    source: "title",
    maxLength: 90,
  },
});

const ambassador = defineField({
  name: "ambassador",
  title: "Ambassador's Name",
  type: "string",
});

const featuredImage = defineField({
  name: "featuredImage",
  title: "Featured Image",
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

const summary = defineField({
  name: "summary",
  title: "Summary",
  type: "text",
  validation: (Rule: any) => Rule.required(),
});

const content = defineField({
  name: "content",
  title: "Content",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      options: {
        spellCheck: true,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
  ],

  validation: (Rule: any) => Rule.required(),
});

export const stories = defineType({
  name: "stories",
  title: "Stories",
  type: "document",
  fields: [title, slug, ambassador, featuredImage, summary, content],
  preview: {
    select: {
      title: "title",
    },
  },
});
