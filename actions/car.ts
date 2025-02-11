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
