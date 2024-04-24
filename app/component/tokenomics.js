import React from "react";
import Image from "next/image";
import token from "../asset/token.png";
import supply from "../asset/supply.png";
export default function Tokenomics() {
  return (
    <div>
      <h1 className="text-center text-3xl  pt-20">Tokenomics</h1>
      <div className="flex pt-4 divide-x-2   divide-black justify-center gap-6 px-4 items-center  ">
        <div className="w-1/2">
          <Image src={token} alt="hero" width={250} height={250} />
        </div>
        <div className="w-1/2">
          <Image src={supply} alt="hero" width={250} height={250} />
        </div>
      </div>

      <h1 className="text-center pt-12">Contract Address:</h1>
      <h1 className="text-center">TBA</h1>
    </div>
  );
}
