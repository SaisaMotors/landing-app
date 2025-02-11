"use server";
import { payload } from "@/lib/payload";

export async function getCars(brand: any = "", PAGE_SIZE: number) {
  try {
    const cars = await payload.find({
      collection: "cars",
      limit: PAGE_SIZE,
      //   page: 1,
      where: {
        "brand.brand": {
          equals: brand, // Filter respective cars based on brand
        },
      },
      sort: "-createdAt", // Sort by newest first
    });

    return cars?.docs;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
}

export async function getCarByID(id: string) {
  try {
    const car = await payload.findByID({
      collection: "cars", // required
      id: id, // required
      depth: 2,
      fallbackLocale: false,
      overrideAccess: false,
      showHiddenFields: true,
    });
    return car;
  } catch (error) {
    console.error(`Error fetching car with id ${id}`, error);
    throw error;
  }
}

export async function getSimilarCars({
  brand,
  engine,
  // model,
  // price,
}: {
  brand: any;
  engine: any;
  // model: string;
  // price: number;
}) {
  try {
    const response = await payload.find({
      collection: "cars",
      where: {
        brand: { equals: brand },
        engine: { equals: engine },
        // model: { equals: model },
        // price: {
        //   greater_than_equal: price * 0.9,
        //   less_than_equal: price * 1.1,
        // }, // ±10% price range
      },
      limit: 4,
    });

    return response.docs; // Return the matched cars
  } catch (error) {
    console.error("Error fetching similar cars:", error);
    return [];
  }
}
