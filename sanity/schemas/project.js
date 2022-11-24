export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "projectTitle",
      title: "Title of the project",
      type: "string",
    },
    {
      name: "projectTitleNL",
      title: "Title of the project NL",
      type: "string",
    },
    {
      name: "projectTitleFR",
      title: "Title of the project FR",
      type: "string",
    },
    {
      name: "projectTitlePT",
      title: "Title of the project PT",
      type: "string",
    },
    {
      name: "projectImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
    },
    {
      name: "summaryNL",
      title: "Summary NL",
      type: "text",
    },
    {
      name: "summaryFR",
      title: "Summary FR",
      type: "text",
    },
    {
      name: "summaryPT",
      title: "Summary PT",
      type: "text",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      name: "buildLink",
      title: "Build Link",
      type: "url",
    },
  ],
};
