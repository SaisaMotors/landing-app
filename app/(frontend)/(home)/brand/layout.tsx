"use client";
import { Metadata } from "next";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  const params = useParams();
  const slug = params.slug; // Extract the slug from the route

  return (
    <>
      <div className="py-10">
        <div className="flex justify-center items-center flex-col  gap-3">
          <div className="flex items-center gap-3">
            <Link className="text-primary" href={"/"}>
              Home
            </Link>
            <span className="text-[#6c757d]">/</span>
            <Link href="#" className="text-[#6c757d]">
              {slug}
            </Link>
          </div>
          <h2 className="uppercase font-semibold text-[35.2px]">{slug}</h2>
        </div>

        {children}
      </div>
    </>
  );
}
