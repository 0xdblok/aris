import React from "react";

export default function Step() {
  return (
    <div class="p-4 max-w-xl mx-6 pt-20  md:mx-auto  border-4 border-black rounded-xl">
      <h2 class="font-heading dark:text-gray-100 mb-8 text-3xl font-bold lg:text-4xl">
        STEP ARISTOTE
      </h2>

      <div class="flex">
        <div class="mr-4 flex flex-col items-center">
          <div>
            <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-6 w-6 text-white dark:text-slate-200">
                <path d="M5 12l5 5l10 -10"></path>
              </svg>
            </div>
          </div>
          <div class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
        </div>
        <div class="pt-1 pb-8">
          <p class="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
            Step 1
          </p>
          <p class="text-gray-600 dark:text-slate-400">Fairlaunch</p>
        </div>
      </div>

      <div class="flex">
        <div class="mr-4 flex flex-col items-center">
          <div>
            <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900">
              <svg
                class="animate-spin border-white h-5 w-5  flex justify-center  border-dotted  border-2 rounded-full "
                viewBox="0 0 24 24"></svg>
            </div>
          </div>
          <div class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
        </div>
        <div class="pt-1 pb-8">
          <p class="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
            Step 2
          </p>
          <p class="text-gray-600 dark:text-slate-400">
            Strategical Partnership and Reward community holder
          </p>
        </div>
      </div>

      <div class="flex">
        <div class="mr-4 flex flex-col items-center">
          <div>
            <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900">
              <svg
                class="animate-spin border-white h-5 w-5  flex justify-center  border-dotted  border-2 rounded-full "
                viewBox="0 0 24 24"></svg>
            </div>
          </div>
          <div class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
        </div>
        <div class="pt-1 pb-8">
          <p class="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
            Step 3
          </p>
          <p class="text-gray-600 dark:text-slate-400">
            Coingecko and CeX listing
          </p>
        </div>
      </div>

      <div class="flex">
        <div class="mr-4 flex flex-col items-center">
          <div>
            <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900 bg-blue-900">
              <svg
                class="animate-spin border-white h-5 w-5  flex justify-center  border-dotted  border-2 rounded-full "
                viewBox="0 0 24 24"></svg>
            </div>
          </div>
        </div>
        <div class="pt-1 ">
          <p class="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
            Ride wave
          </p>
        </div>
      </div>
    </div>
  );
}
