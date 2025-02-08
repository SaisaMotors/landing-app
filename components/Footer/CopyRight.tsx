import Image from "next/image";
import Link from "next/link";
import React from "react";

const CopyRight = () => {
  return (
    <div className="w-full bg-[#5c5c5c] py-8 p-4 flex justify-center items-center">
      <div className="flex flex-col items-center ">
        <div className="flex gap-4">
          <Link href="" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/facebook.png"
              alt="facebook"
              height={20}
              width={13}
              quality={99}
            />
          </Link>
          <Link href="" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/twitter.png"
              alt="twitter"
              height={20}
              width={27}
              quality={99}
            />
          </Link>
          <Link href="" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/instagram.png"
              alt="instagram"
              height={23}
              width={23}
            />
          </Link>
          <Link href="" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/youtube.png"
              alt="youtube"
              height={21}
              width={30}
              quality={99}
            />
          </Link>
        </div>
        <p className="text-white text-center text-[14px] mt-1">
          Copyrights 2025 SAISA MOTORS LIMITED. All Rights Reserved.| Privacy
          Policy & Terms Of Use
        </p>
      </div>
    </div>
  );
};

export default CopyRight;
