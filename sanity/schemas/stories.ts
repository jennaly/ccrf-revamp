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

const featuredImage = defineField({
  name: "featuredImg",
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
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [{ title: "URL", name: "href", type: "url" }],
          },
        ],
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
  fields: [title, slug, featuredImage, summary, content],
  preview: {
    select: {
      title: "title",
    },
  },
});
