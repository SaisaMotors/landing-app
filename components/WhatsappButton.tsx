import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatsappButton = () => {
  const whatsappLink = "https://wa.me/+254701694004";
  return (
    <div className="fixed bottom-6 right-0  bg-transparent rounded-full  hover:bg-green-600 transition duration-300 ease-in-out">
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <Image
          src={"/images/whatsapp.png"}
          height={40}
          width={40}
          alt="whatsapp"
          priority
          quality={99}
        />
      </Link>
    </div>
  );
};

export default WhatsappButton;
