import { getContact } from "@/actions/contact";
import React from "react";
import ContactForm from "./ContactForm";
import LocationMap from "./LocationMap";

const page = async () => {
  const res: any = await getContact();
  console.log("contact details", res);

  const { title, location, phone, email, coverImage } = res;

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-6 ">
        <div className="p-6 basis-full lg:basis-1/3">
          <div className="space-y-5">
            <strong className="text-[25px]">{title}</strong>
            <p className="text-[20px]">{location}</p>

            <div className="flex text-lg items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#B2B2B2"
                className="size-8"
              >
                <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                <path
                  fill-rule="evenodd"
                  d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>{phone}</span>
            </div>

            <div className="flex text-lg items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#B2B2B2"
                className="size-8"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>

              <span className="text-lg">{email}</span>
            </div>
          </div>
        </div>
        <div className="p-6 border flex flex-col lg:flex-row basis-full lg:basis-2/3">
          <div className="basis-full lg:basis-[260px]">
            <ContactForm />
          </div>

          {/* // map location */}
          <div className="p-6 basis-full lg:flex-1">
            <LocationMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
