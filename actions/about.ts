"use server";

import { payload } from "@/lib/payload";

export async function getAboutUs() {
  try {
    const res = await payload.find({
      collection: "about-us", // Collection name
      //   limit: 1, // Assuming there's only one document
    });

    console.log("res", res);
    return res.docs[0]; // Return the first document if found, otherwise null
  } catch (error) {
    console.error("Error fetching About Us data:", error);
    return null;
  }
}
