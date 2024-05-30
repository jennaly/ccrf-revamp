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

const waysToGetInvolved = defineField({
  name: "waysToGetInvolvedSection",
  title: "Ways To Get Involved Section",
  type: "object",
  fields: [
    defineField({
      name: "donate",
      title: "Donate",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
        }),
        defineField({
          name: "text",
          title: "Text",
          type: "text",
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
    }),
    defineField({
      name: "fundraise",
      title: "Fundraise",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
        }),
        defineField({
          name: "text",
          title: "Text",
          type: "text",
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
    }),
    defineField({
      name: "partner",
      title: "Partner",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
        }),
        defineField({
          name: "text",
          title: "Text",
          type: "text",
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
    }),
    defineField({
      name: "volunteer",
      title: "Volunteer",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
        }),
        defineField({
          name: "text",
          title: "Text",
          type: "text",
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
    }),
  ],
});

const impact = defineField({
  name: "impactSection",
  title: "Impact Section",
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
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          name: "statCard",
          title: "Stat Card",
          type: "object",
          fields: [
            {
              name: "statValue",
              title: "Stat Value",
              type: "string",
            },
            {
              name: "statUnit",
              title: "Stat Unit",
              type: "text",
            },
            {
              name: "statText",
              title: "Stat Text",
              type: "text",
            },
          ],
        },
      ],
    }),
  ],
});

const testimonial = defineField({
  name: "testimonialSection",
  title: "Testimonial Section",
  type: "reference",
  to: [{ type: "testimonials" }],
});

export const getInvolvedPage = defineType({
  name: "getInvolvedPage",
  title: "Get Involved Page",
  type: "document",
  fields: [pageName, header, waysToGetInvolved, impact, testimonial],
  preview: {
    select: {
      title: "pageName",
    },
  },
});
