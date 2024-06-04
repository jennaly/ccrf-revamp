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

const fundraisedAmount = defineField({
  name: "fundraisedAmountSection",
  title: "Fundraised Amount",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          name: "stat",
          title: "Stat",
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
          ],
        },
      ],
    }),
  ],
});

const fundraiseOptions = defineField({
  name: "fundraiseOptionsSection",
  title: "Fundraise Options",
  type: "array",
  of: [
    {
      name: "fundraiseOption",
      title: "Fundraise Option",
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
          name: "icon",
          title: "Icon",
          type: "image",
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
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
            }),
            defineField({
              name: "ctaUrl",
              title: "CTA Url",
              type: "url",
            }),
          ],
        }),
      ],
    },
  ],
});

const campaignSection = defineField({
  name: "campaignSection",
  title: "Campaign Section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "campaigns",
      title: "Campaigns",
      type: "array",
      of: [
        {
          name: "campaignID",
          title: "Campaign ID",
          type: "string",
        },
      ],
    }),
  ],
});

export const fundraisePage = defineType({
  name: "fundraisePage",
  title: "Fundraise Page",
  type: "document",
  fields: [
    pageName,
    header,
    fundraisedAmount,
    fundraiseOptions,
    campaignSection,
  ],
});
