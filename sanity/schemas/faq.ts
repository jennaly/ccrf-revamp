import { defineField, defineType } from "sanity";

const question = defineField({
  name: "question",
  title: "Question",
  type: "text",
  validation: (Rule: any) => Rule.required(),
});

const answer = defineField({
  name: "answer",
  title: "Answer",
  type: "text",
  validation: (Rule: any) => Rule.required(),
});

export const faq = defineType({
  name: "faq",
  title: "Frequently Asked Questions",
  type: "document",
  fields: [question, answer],
  preview: {
    select: {
      title: "question",
    },
  },
});
