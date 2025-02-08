import { anyone } from "@/access/anyone";
import { authenticated } from "@/access/authenticated";
import { CollectionConfig } from "payload";

export const BodyStyle: CollectionConfig = {
  slug: "bodyStyle",
  admin: {
    useAsTitle: "style", // Displays the title in the admin panel
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: "style",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export default BodyStyle;
