import { anyone } from "@/access/anyone";
import { authenticated } from "@/access/authenticated";
import { CollectionConfig } from "payload";

export const Brand: CollectionConfig = {
  slug: "brand",
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: "brand", // Displays the title in the admin panel
    defaultColumns: ["brand"],
  },
  fields: [
    {
      name: "brand",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "models",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
          unique: true,
        },
      ],
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export default Brand;
