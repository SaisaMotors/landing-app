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

export const getAllBodyStyles = async () => {
  try {
    const bodyStyles = await payload.find({
      collection: "bodyStyle", // Collection slug
      limit: 100, // Adjust as needed
    });

    return bodyStyles.docs; // Returns an array of BodyStyle documents
  } catch (error) {
    console.error("Error fetching BodyStyles:", error);
    return [];
  }
};

export const getFeaturedModels = async () => {
  try {
    const brands = await payload.find({
      collection: "brand",
      limit: 100, // Fetch up to 100 brands
    });

    // Merge all models into a single array, taking only two from each brand
    const allModels = brands.docs.flatMap((brand) =>
      brand?.models?.slice(0, 2).map((model) => ({
        name: model.name,
        brand: brand.brand, // Include brand name for reference
      }))
    );

    return allModels;
  } catch (error) {
    console.error("Error fetching models:", error);
    return [];
  }
};

export const getAllBrands = async () => {
  try {
    const brands = await payload.find({
      collection: "brand",
      limit: 100, // Fetch up to 100 brands
    });

    return brands.docs;
  } catch (error) {
    console.error("Error fetching models:", error);
    return [];
  }
};

export const getCarsByBrand = async (brand: string) => {
  try {
    const cars = await payload.find({
      collection: "cars",
      where: {
        "brand.brand": {
          equals: brand,
        },
      },
    });

    return cars.docs;
  } catch (error) {
    console.error("Error fetching cars:", error);
    return [];
  }
};
