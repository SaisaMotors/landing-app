import { anyone } from "@/access/anyone";
import { authenticated } from "@/access/authenticated";
import { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
  slug: "services",
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },

  fields: [
    {
      name: "about",
      type: "textarea",
      required: true,
    },

    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "workshop-gallery",
      type: "upload",
      relationTo: "media",
      required: true,
      hasMany: true,
    },
    // {
    //   name: "workshop-gallery",
    //   type: "array",
    //   fields: [
    //     {
    //       name: "image",
    //       type: "upload",
    //       relationTo: "media",
    //       required: true,
    //       hasMany: true,
    //     },
    //   ],
    // },
    {
      name: "services",
      type: "array",

      fields: [
        {
          name: "serviceName",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea", //
          required: true, // Set to true if it's mandatory
        },
      ],
    },

    //
    {
      name: "why-choose-us",
      type: "array",

      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          required: true,
        },

        {
          name: "description",
          type: "textarea", //
          required: true, // Set to true if it's mandatory
        },
      ],

      required: true,
    },

    {
      name: "footer",
      type: "textarea",
      required: true,
    },
  ],
};

export default Services;
