import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" xl: mx-auto w-full relative text-center bg-gradient-to-b from-slate-950 via-slate-800 to-slate-950  text-white">
        <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
          <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
            Ready to get your productivity back?
            <br />
            Start your free trial today.
          </h2>
          <a
            className="mt-8 text-white xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-slate-950 rounded-full shadow-xl border-2 border-whtie hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500"
            href="#"
          >
            <span className="animate-text bg-gradient-to-br   from-sky-500 via-teal-500  to-white bg-clip-text text-transparent  font-black">
              Sign Up
            </span>
          </a>
          <div className="mt-14 xl:mt-20">
            <nav className="flex flex-wrap justify-center text-lg font-medium">
              <div className="px-5 py-2 hover:underline">
                <a href="#">Contact</a>
              </div>
              <div className="px-5 py-2  hover:underline">
                <a href="#">Pricing</a>
              </div>
              <div className="px-5 py-2  hover:underline">
                <a href="#">Privacy</a>
              </div>
              <div className="px-5 py-2  hover:underline">
                <a href="#">Terms</a>
              </div>
              <div className="px-5 py-2  hover:underline">
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
