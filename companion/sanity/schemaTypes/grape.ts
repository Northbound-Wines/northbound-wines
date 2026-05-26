import { defineField, defineType } from "sanity";

export const grape = defineType({
  name: "grape",
  title: "Grape",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "regionalExpression",
      title: "Regional Expression",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "drinkingContext",
      title: "Drinking Context",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "regions",
      title: "Relevant Regions",
      type: "array",
      of: [{ type: "reference", to: [{ type: "region" }] }],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
