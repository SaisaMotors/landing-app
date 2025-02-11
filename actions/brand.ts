"use server";

import payloadConfig from "@/payload.config";
import { getPayload } from "payload";

const payload = await getPayload({ config: payloadConfig });
const getBrands = async () => {
  try {
    const brands = await payload.find({
      collection: "brand", // The slug of the collection
      limit: 100, // Adjust the limit as needed
    });

    return brands.docs; // Returns the array of brand documents
  } catch (error) {
    console.error("Error fetching brands:", error);
    throw error;
  }
};

export default getBrands;
