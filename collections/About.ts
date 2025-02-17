import { anyone } from "@/access/anyone";
import { authenticated } from "@/access/authenticated";
import { CollectionConfig } from "payload";

export const About: CollectionConfig = {
  slug: "about-us",
  admin: {
    useAsTitle: "about-us", // Displays the title in the admin panel
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: "about-us",
      type: "text",
      required: true,
    },
    // {
    //   name: "coverImage",
    //   type: "upload",
    //   relationTo: "media",
    //   required: true,
    // },
    {
      name: "core-values",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],

      required: true,
    },
    {
      name: "our-mission",
      type: "text",
      required: true,
    },
    {
      name: "vision",
      type: "text",
      required: true,
    },

    {
      name: "our-services",
      type: "array",
      fields: [
        {
          name: "service",
          type: "text",
          required: true,
        },
      ],

      required: true,
    },

    {
      name: "tailored-services",
      type: "array",
      fields: [
        {
          name: "service",
          type: "text",
          required: true,
        },
      ],

      required: true,
    },
  ],
};

export default About;
