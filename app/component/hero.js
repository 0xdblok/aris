import React from "react";
import Image from "next/image";
import logo from "../asset/logo.jpg";
import mont from "../asset/mont.jpg";
export default function Hero() {
  return (
    <section class="text-gray-600 body-font ">
      <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
            Artistotle
          </h1>
          <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed">
            Short description here, Short description here Short description
            here Short description here Short description here Short description
            here.
          </p>
          <div class="flex justify-center">
            <a
              href="#"
              class="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none  rounded text-lg">
              Dexscreener
            </a>
            <a
              href="#"
              class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none  rounded text-lg">
              Buy Now
            </a>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
          <Image src={logo} alt="hero" width={500} height={500} />
        </div>
      </div>
    </section>
  );
}
