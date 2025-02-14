import { headers as getHeaders } from "next/headers.js";
import Image from "next/image";
import { getPayload } from "payload";
import React from "react";
import { fileURLToPath } from "url";
import config from "@/payload.config";
import "../styles.css";
import HomeCarousel from "@/components/HomeCarousel";
import BrandsSection from "@/components/BrandsSection";
import { fetchCarousels } from "@/actions/carousel";
import SearchBodyStyle from "@/components/SearchBodyStyle";
import FeaturedCars from "@/components/FeaturedCars";

export default async function HomePage() {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user } = await payload.auth({ headers });

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`;

  const carousels = await fetchCarousels();
  return (
    <div className="min-h-screen">
      <main>
        <HomeCarousel carousels={carousels} />
        {/* Brands */}
        <BrandsSection />
        {/* SHOP CARS BY BODYSTYLE */}
        <SearchBodyStyle />
        {/* FEATURED CARS */}
        <FeaturedCars />
      </main>
    </div>
  );
}
