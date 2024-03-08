// import logo from "./logo.svg";
import "./App.css";

import Footer from "./components/Footer";
import Example from "./components/Header";
import Info from "./components/Info";
import FAQ from "./components/Q&A";
import Visual from "./components/Visual";
import TestimonialSection16 from "./components/testemonycard";
import Home from "./components/Home";
import Process from "./components/Process";
import Button from "./components/Button";

import Slide from "./components/Slide";

function App() {
 
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

      <Button/>


    </>
  );
}

export default App;
