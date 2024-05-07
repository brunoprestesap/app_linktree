import link from "next/link";
import Link from "next/link";
import React from "react";

interface Props {
  description: string;
  img: any;
  link: string;
}

const BtnLink = ({ description, img, link }: Props) => {
  return (
    <Link
      className="flex flex-row items-center justify-start w-full border px-6 py-5 rounded-lg shadow-lg text-white"
      href={link}
    >
      {img}
      <div className="flex justify-center items-center w-full">
        <h2 className="text-[13px] font-medium text-white">{description}</h2>
      </div>
    </Link>
  );
};

export default BtnLink;
