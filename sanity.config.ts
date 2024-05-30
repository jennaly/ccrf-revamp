import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";
import singletonDocs from "./sanity/config/singleton";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);

const singletonTypes = new Set(["settings"]);

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: "production",
  title: "CCRF Studio",
  apiVersion: "2024-01-01",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items(
            // Singleton document types
            singletonDocs
              .map(({ title, id, schemaType }) =>
                S.listItem()
                  .title(title)
                  .id(id)
                  .child(S.document().schemaType(schemaType).documentId(id))
              )
              .concat([
                // Regular document types
                S.divider(),
                S.documentTypeListItem("stories").title("Stories"),
                S.documentTypeListItem("faq").title(
                  "Frequently Asked Questions"
                ),
                S.documentTypeListItem("testimonials").title("Testimonials"),
              ])
          ),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes, // Filter out singleton types from the global "New document" menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not included
    // in the "singletonActions" list
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});

export default config;
