import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" xl: mx-auto w-full relative text-center bg-amber-500 text-black">
        <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
          <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
            Ready to get your productivity back?
            <br />
            Start your free trial today.
          </h2>
          <a
            className="mt-8 text-white xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-slate-950 rounded-full shadow-xl border border-transparent hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500"
            href="#"
          >
            Sign Up
          </a>
          <div className=" align-middle text-center">
            {/* <ul class="mb-6 md:mb-0 text-center">
              <li class="flex ">
                <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
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
                    class="h-6 w-6"
                  >
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                  </svg>
                </div>
                <div class="ml-4 mb-4">
                  <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Our Address
                  </h3>
                  <p class="text-gray-600 dark:text-slate-400">
                    1230 Maecenas Street Donec Road
                  </p>
                  <p class="text-gray-600 dark:text-slate-400">
                    New York, EEUU
                  </p>
                </div>
              </li>
              <li class="flex">
                <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
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
                    class="h-6 w-6"
                  >
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                  </svg>
                </div>
                <div class="ml-4 mb-4">
                  <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Contact
                  </h3>
                  <p class="text-gray-600 dark:text-slate-400">
                    Mobile: +1 (123) 456-7890
                  </p>
                  <p class="text-gray-600 dark:text-slate-400">
                    Mail: tailnext@gmail.com
                  </p>
                </div>
              </li>
              <li class="flex">
                <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
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
                    class="h-6 w-6"
                  >
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                    <path d="M12 7v5l3 3"></path>
                  </svg>
                </div>
                <div class="ml-4 mb-4">
                  <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Working hours
                  </h3>
                  <p class="text-gray-600 dark:text-slate-400">
                    Monday - Friday: 08:00 - 17:00
                  </p>
                  <p class="text-gray-600 dark:text-slate-400">
                    Saturday &amp; Sunday: 08:00 - 12:00
                  </p>
                </div>
              </li>
            </ul> */}
          </div>
          <div className="mt-14 xl:mt-20">
            <nav className="flex flex-wrap justify-center text-lg font-medium">
              <div className="px-5 py-2">
                <a href="#">Contact</a>
              </div>
              <div className="px-5 py-2">
                <a href="#">Pricing</a>
              </div>
              <div className="px-5 py-2">
                <a href="#">Privacy</a>
              </div>
              <div className="px-5 py-2">
                <a href="#">Terms</a>
              </div>
              <div className="px-5 py-2">
                <a href="#">Twitter</a>
              </div>
            </nav>
            <p className="mt-7 text-base">© 2023 XYZ, LLC</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
