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
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule: any) => Rule.required(),
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "text",
          validation: (Rule: any) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    }),
  ],
});

const intro = defineField({
  name: "introSection",
  title: "Intro Section",
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

const nationalReach = defineField({
  name: "nationalReachSection",
  title: "National Reach Section",
  type: "object",
  fields: [
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
          type: "text",
          validation: (Rule: any) => Rule.required(),
        }),
      ],
    }),
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

const annualReports = defineField({
  name: "annualReportsSection",
  title: "Annual Reports",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "reports",
      title: "Reports",
      type: "array",
      of: [
        {
          name: "report",
          title: "Report",
          type: "object",
          fields: [
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
                  type: "text",
                  validation: (Rule: any) => Rule.required(),
                }),
              ],
            }),
            {
              name: "year",
              title: "Year",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "fileUrl",
              title: "File Url",
              type: "url",
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    }),
  ],
});

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Us Page",
  type: "document",
  fields: [
    pageName,
    header,
    intro,
    impact,
    whyUs,
    nationalReach,
    annualReports,
  ],
  preview: {
    select: {
      title: "pageName",
    },
  },
});
