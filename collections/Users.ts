import { authenticated } from "@/access/authenticated";
import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",

  access: {
    read: ({ req }) => {
      if (req.user) return true;
      return false;
    },
    create: ({ req }) => true,
    update: ({ req }) => req.user?.role === "admin",
    delete: ({ req }) => req.user?.role === "admin",
  },
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: "firstName",
      type: "text",
      required: true,
    },

    {
      name: "lastName",
      type: "text",
      required: true,
    },

    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "user", // Default role
      options: [
        { label: "User", value: "user" },
        { label: "Admin", value: "admin" },
      ],
    },

    {
      name: "password",
      type: "text", // Payload automatically hashes passwords
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: "phone",
      type: "text",
      // required: true,
    },
    {
      name: "companyName",
      type: "text",
      // required: false,
    },
    {
      name: "address",
      type: "text",
      // required: true,
    },
    {
      name: "city",
      type: "text",
      // required: true,
    },
    {
      name: "state",
      type: "text",
      // required: true,
    },
    {
      name: "postalCode",
      type: "text",
      // required: true,
    },
    {
      name: "country",
      type: "text",
      // required: true,
    },
    {
      name: "agreeMarketingEmails",
      type: "checkbox",
      // required: true,
      defaultValue: false,
    },
    {
      name: "terms",
      type: "checkbox",
      // required: true,
      defaultValue: false,
    },
  ],
};
