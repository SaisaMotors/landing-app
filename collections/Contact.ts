import { anyone } from "@/access/anyone";
import { authenticated } from "@/access/authenticated";
import { CollectionConfig } from "payload";

export const Contact: CollectionConfig = {
  slug: "contact",
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "location",
      type: "text",
      required: true,
    },
    {
      name: "phone",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
  ],
};

export default Contact;
