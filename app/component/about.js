import React from "react";
import Image from "next/image";
import bet from "../asset/bet.png";
export default function About() {
  return (
    <div className="pt-28">
      <div>
        <div className="flex justify-center">
          <Image src={bet} alt="hero" width={350} height={350} />
        </div>
        <div className="flex justify-center pt-4">
          {" "}
          <a className=" px-4 py-3 rounded-lg bg-black text-gray-100">
            Buy now
          </a>
        </div>
      </div>
    </div>
  );
}
