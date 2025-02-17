import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export const formatPrice = (price: any) => {
//   const decimalPlaces = price >= 1000000 ? 1 : 0; // One decimal if price >= 1M, else no decimals

//   return new Intl.NumberFormat("en-KE", {
//     style: "currency",
//     currency: "KES",
//     minimumFractionDigits: decimalPlaces,
//     maximumFractionDigits: decimalPlaces,
//   }).format(price);
// };

export const formatPrice = (price: any) => {
  if (Number(price) >= 1000000) {
    return `KSh ${(price / 1000000).toFixed(1)}M`;
    // } else if (price >= 1000) {
    //   return `KSh ${(price / 1000).toFixed(2)}K`;
  } else {
    return `KSh ${price.toLocaleString("en-KE")}`;
  }
};
// Example Usage:
// console.log(formatPrice(999999));   // "KSh 999,999"
// console.log(formatPrice(1000000));  // "KSh 1,000,000.0"
// console.log(formatPrice(2500000));  // "KSh 2,500,000.0"

export function splitArray(array: any) {
  const mid = Math.ceil(array.length / 2); // Find the middle index
  const firstHalf = array.slice(0, mid);
  const secondHalf = array.slice(mid);

  return { firstHalf, secondHalf };
}

export const formatText = (text: string): string => {
  return text
    .split("-") // Split by hyphen
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
    .join(" "); // Join words with space
};
