import { anyone } from "@/access/anyone";
import { authenticated } from "@/access/authenticated";
import { CollectionConfig } from "payload";

export const Specification: CollectionConfig = {
  slug: "specification",
  admin: {
    useAsTitle: "specification", // Displays the title in the admin panel
    defaultColumns: ["specification"],
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: "specification",
      type: "text",
      required: true,
      unique: true,
    },
  ],
};

export default Specification;
