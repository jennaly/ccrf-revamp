import { defineField, defineType } from "sanity";

const pageName = defineField({
  name: "pageName",
  title: "Page Name",
  type: "string",
});

const header = defineField({
  name: "header",
  title: "Header",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    }),
  ],
});

const whyUs = defineField({
  name: "whyUsSection",
  title: "Why Us Section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    }),

    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          name: "feature",
          title: "Feature",
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
              title: "Image/Icon",
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

const logosSection = defineField({
  name: "logosSection",
  title: "Logos Section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "logos",
      title: "Logos",
      type: "array",
      of: [
        {
          name: "logo",
          title: "Logo",
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
    }),
  ],
});

export const partnerPage = defineType({
  name: "partnerPage",
  title: "Partner Page",
  type: "document",
  fields: [pageName, header, whyUs, logosSection],
  preview: {
    select: {
      title: "pageName",
    },
  },
});
