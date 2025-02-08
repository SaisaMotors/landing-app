// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import About from "./collections/About";
import Blog from "./collections/Blog";
import Contact from "./collections/Contact";
import Specification from "./collections/Specifications";
import Brand from "./collections/Brand";
import BodyStyle from "./collections/BodyStyle";
import Carousel from "./collections/Carousel";
import Services from "./collections/Services";
import Car from "./collections/Car";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    About,
    Blog,
    Contact,
    Specification,
    Brand,
    BodyStyle,
    Carousel,
    Services,
    Car,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder

    uploadthingStorage({
      collections: {
        media: true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN,
        acl: "public-read",
      },
    }),
  ],
});
