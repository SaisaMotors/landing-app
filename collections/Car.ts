import { anyone } from "@/access/anyone";
import { authenticated } from "@/access/authenticated";
import { CollectionConfig } from "payload";

export const Car: CollectionConfig = {
  slug: "cars",
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },

  admin: {
    useAsTitle: "carName", // Displays the title in the admin panel
    defaultColumns: ["carName", "productid"],
  },
  fields: [
    {
      name: "productid",
      type: "text",
      unique: true,
      required: true,
    },
    {
      name: "carName",
      type: "text",
      unique: true,
      required: true,
    },
    {
      name: "brand",
      type: "relationship",
      relationTo: "brand",
      unique: true,
      required: true,
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media", // Ensure you have a 'media' collection
      required: true,
    },
    {
      name: "availability",
      type: "checkbox",
      defaultValue: true,
    },
    {
      name: "make",
      type: "text",
      required: true,
    },
    {
      name: "arrivalDate",
      type: "date",
    },
    {
      name: "engine",
      type: "text",
    },
    {
      name: "transmission",
      type: "text",
    },
    {
      name: "interior",
      type: "text",
    },
    {
      name: "exterior",
      type: "text",
    },
    {
      name: "fuel",
      type: "text",
    },
    {
      name: "drive",
      type: "text",
    },

    {
      name: "bodyStyle",
      type: "text",
      //   relationTo: 'bodyStyle', // Assuming you have a 'users' collection
      required: true,
    },
    // {
    //   name: 'bodyStyle',
    //   type: 'group',
    //   fields: [
    //     {
    //       name: 'logo',
    //       type: 'upload',
    //       relationTo: 'media',
    //     },
    //     {
    //       name: 'text',
    //       type: 'text',
    //     },
    //   ],
    // },
    {
      name: "price",
      type: "text",
      required: true,
    },

    {
      name: "specifications",
      type: "relationship",
      required: true,
      hasMany: true,
      relationTo: "specification",
      label: "Select Specifications",
      admin: {
        description: "Choose the relevant specifications for this product.",
      },
    },
    {
      name: "gallery",
      type: "upload",
      relationTo: "media", // Ensure you have a 'media' collection
      required: false,
      hasMany: true,
    },
    // {
  ],
};

export default Car;
