// import logo from "./logo.svg";
import "./App.css";

import Footer from "./components/Footer";
import Example from "./components/Header";
import Info from "./components/Info";
import FAQ from "./components/Q&A";
import Visual from "./components/Visual";
import TestimonialSection16 from "./components/testemonycard";
import Home from "./components/Home";
import { Tooltip } from "@material-tailwind/react";
import Process from "./components/Process";

import Slide from "./components/Slide";

function App() {
  const Top = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className=" bg-slate-700 h-dvh ">
        <div className=" ">
          {" "}
          <Example />
          <div className="h-dvh   bg-slate-950 text-center break-words font-extrabold flex  items-center justify-center leading-10">
            <Home />
          </div>
        </div>
        {/* <div className="h-dvh bg-black"> */}
        <div
          id="service"
          className=" bg-gradient-to-b from-slate-950 via-slate-800 to-slate-950 "
        >
          <Info />
        </div>
        <div id="animation">
          <div className="bg-slate-950 ">
            <Process />
          </div>
        </div>

        <div id="animation">
          <div className=" bg-slate-950 ">
            <Visual />
          </div>
        </div>
        {/* </div> */}
        <div id="review" className="">
          <div className=" bg-slate-950 text-center">
            <TestimonialSection16 />
          </div>

          <div id="faq" className=" bg-slate-950   p-10 ">
            <FAQ />
            {/* <YourComponent /> */}
          </div>
        </div>
        {/* <div className="h-dvh"> */}
        {/* <div className="h-1/2 bg-slate-950 text-white">signup now</div> */}
        <div
          id="footer"
          className=" bg-gradient-to-b from-slate-950 via-slate-800 to-slate-950 "
        >
          <Footer />
        </div>
      </div>
      {/* </div> */}
      <Tooltip content="Click To Top">
        <button
          onClick={Top}
          className="bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950  border-4  border-slate-500 bg-no-repeat bg-center  text-white  fixed bottom-0 right-0 rounded-full  h-20 w-20 m-5  active:bg-red-600 max-md:  "
        >
          <img src="arrow-141-48.png" alt="" className="p-5 " />
        </button>
      </Tooltip>
    </>
  );
}

export default App;
