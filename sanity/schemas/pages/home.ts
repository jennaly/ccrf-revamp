import { defineField, defineType } from "sanity";
import { getExtension, getImageDimensions } from "@sanity/asset-utils";

const hero = defineField({
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "backgroundImg",
      title: "Background Image",
      type: "object",
      validation: (Rule: any) => Rule.required(),
      fields: [
        defineField({
          name: "desktopImg",
          title: "Image - Desktop",
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
        }),

        defineField({
          name: "mobileImg",
          title: "Image - Mobile",
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
        }),
      ],
    }),
  ],
});

const pageName = defineField({
  name: "pageName",
  title: "Page Name",
  type: "string",
  readOnly: true,
});

const mission = defineField({
  name: "missionSection",
  title: "Mission Section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "paragraph",
      title: "Paragraph Text",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule: any) => Rule.required(),
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "cta",
      title: "CTA",
      type: "object",
      fields: [
        defineField({
          name: "ctaText",
          title: "CTA Text",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        }),
        defineField({
          name: "ctaUrl",
          title: "CTA URL",
          type: "url",
          validation: (Rule: any) => Rule.required(),
        }),
      ],
    }),
  ],
});

const whatWeFund = defineField({
  name: "whatWeFundSection",
  title: "'What We Fund' Section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "programs",
      title: "Programs",
      type: "array",
      of: [
        {
          name: "program",
          title: "Program",
          type: "object",
          fields: [
            {
              name: "heading",
              title: "Heading",
              type: "text",
            },
            {
              name: "text",
              title: "Text",
              type: "text",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              fields: [
                defineField({
                  name: "alt",
                  title: "Alternative Text",
                  type: "string",
                  validation: (Rule: any) => Rule.required(),
                }),
              ],
            },
          ],
        },
      ],
    }),
  ],
});

const stories = defineField({
  name: "storiesSection",
  title: "Stories Section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "featuredStories",
      title: "Featured Stories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "stories" }],
        },
      ],
    }),
  ],
});

const video = defineField({
  name: "videoSection",
  title: "Video Section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "videoURL",
      title: "Video URL",
      type: "url",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "height",
      title: "Video Height",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "width",
      title: "Video Width",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Video Title",
      description:
        "This is used by screen readers to read out what the content of the video is.",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
  ],
});

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [pageName, hero, mission, whatWeFund, stories, video],
  preview: {
    select: {
      title: "pageName",
    },
  },
});
