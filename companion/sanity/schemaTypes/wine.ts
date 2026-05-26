import { defineField, defineType } from "sanity";

export const wine = defineType({
  name: "wine",
  title: "Wine",
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
      name: "producer",
      title: "Producer",
      type: "reference",
      to: [{ type: "producer" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "region",
      title: "Region",
      type: "reference",
      to: [{ type: "region" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "grapes",
      title: "Grapes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "grape" }] }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "vintage",
      title: "Vintage",
      type: "string",
      description: "Use a vintage or a general label like Current release.",
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "tastingContext",
      title: "Tasting Context",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "foodPairing",
      title: "Food Pairing",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "positioning",
      title: "Positioning",
      type: "text",
      rows: 4,
      description: "Public-safe explanation of who this wine is for and why it matters.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      producer: "producer.title",
      vintage: "vintage",
    },
    prepare({ title, producer, vintage }) {
      return {
        title,
        subtitle: [producer, vintage].filter(Boolean).join(" · "),
      };
    },
  },
});
