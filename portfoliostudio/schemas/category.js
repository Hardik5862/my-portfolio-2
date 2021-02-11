export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "languages",
      title: "Languages",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "webdevelopment",
      title: "Web Development",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "graphicdesign",
      title: "Graphic design",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "certificates",
      title: "Certificates",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "logo", title: "Course Logo", type: "image" },
            { name: "coursetitle", type: "string", title: "Course Title" },
            { name: "url", type: "string", title: "Url" },
          ],
        },
      ],
    },
  ],
};
