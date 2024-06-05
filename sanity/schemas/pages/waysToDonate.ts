import { defineField, defineType } from "sanity";

const pageName = defineField({
  name: "pageName",
  title: "Page Name",
  type: "string",
  readOnly: true,
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

const waysToDonateSection = defineField({
  name: "waysToDonateSection",
  title: "Ways To Donate Section",
  type: "object",
  fields: [
    defineField({
      name: "giftOnline",
      title: "Gift Online",
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
      name: "giftOverPhone",
      title: "Gift Over Phone",
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
      name: "mailCheck",
      title: "Mail a Check",
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
      name: "donateStock",
      title: "Donate Stock",
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

export const waysToDonatePage = defineType({
  name: "waysToDonatePage",
  title: "Ways To Donate Page",
  type: "document",
  fields: [pageName, header, waysToDonateSection, impact, testimonial],
  preview: {
    select: {
      title: "pageName",
    },
  },
});
