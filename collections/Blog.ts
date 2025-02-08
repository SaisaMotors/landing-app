// import { CollectionConfig } from 'payload/types'

import { CollectionConfig } from "payload";

const Blog: CollectionConfig = {
  slug: "blogs",
  labels: {
    singular: "Blog",
    plural: "Blogs",
  },
  admin: {
    useAsTitle: "title", // Displays the title in the admin panel
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description: "URL-friendly identifier for the blog post",
      },
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media", // Ensure you have a 'media' collection
      required: false,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users", // Assuming you have a 'users' collection
      required: true,
    },
    // {
    //   name: 'categories',
    //   type: 'relationship',
    //   relationTo: 'categories', // Assuming you have a 'categories' collection
    //   hasMany: true, // Allows multiple categories
    //   required: false,
    // },
    {
      name: "categories",
      type: "select",
      hasMany: true,
      options: ["Useful Tips", "Car Reviews"],
      required: false,
    },
    {
      name: "tags",
      type: "select",
      hasMany: true,
      options: ["Tech", "Business", "Health", "Lifestyle", "Education"],
      required: false,
    },
    {
      name: "published",
      type: "checkbox",
      defaultValue: false, // Posts are drafts by default
    },
    {
      name: "publishedDate",
      type: "date",
      required: false,
      admin: {
        condition: (data) => data.published, // Show only when published is true
      },
    },
  ],
  timestamps: true, // Enables 'createdAt' and 'updatedAt'
};

export default Blog;
