"use server";

import { payload } from "@/lib/payload";

export async function getContact() {
  try {
    const res = await payload.find({
      collection: "contact", // Collection name
    });

    return res.docs[0]; // Return the first document if found, otherwise null
  } catch (error) {
    console.error("Error fetchicng Contact  details:", error);
    return null;
  }
}
