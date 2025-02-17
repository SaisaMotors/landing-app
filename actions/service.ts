"use server";

import { payload } from "@/lib/payload";

export async function getServiceCenter() {
  try {
    const res = await payload.find({
      collection: "services", // Collection name
    });

    return res.docs[0]; // Return the first document if found, otherwise null
  } catch (error) {
    console.error("Error fetchicng services:", error);
    return null;
  }
}
