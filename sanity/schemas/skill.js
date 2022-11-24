export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "skillName",
      title: "Skill Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
