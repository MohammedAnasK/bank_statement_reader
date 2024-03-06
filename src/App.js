// import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Example from "./components/Header";
import Info from "./components/Info";
import FAQ from "./components/Q&A";
import Visual from "./components/Visual";
import TestimonialSection16 from "./components/testemonycard";
// import AnimatedArrow from "./components/AnimatedArrow";

function App() {
  const Top = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className=" bg-slate-700 h-dvh ">
        <div className=" ">
          <header>
            {" "}
            <Example />{" "}
          </header>
          <div className="h-dvh   bg-slate-950 text-center break-words font-extrabold flex  items-center justify-center leading-10">
            <div>
              <h1 className="text-amber-500  text-8xl max-md:text-7xl line-clamp-7">
                Transfer Your Bank Statments
                <br />
                <span>Into Tally</span>
                <br />
                With Just One Click
              </h1>
            </div>
          </div>
        </div>
        {/* <div className="h-dvh bg-black"> */}
        <div className=" bg-amber-500 ">
          <Info />
        </div>
        <div className="  bg-slate-950 ">
          <Visual />
        </div>
        {/* </div> */}
        <div className="">
          <div className=" bg-amber-500 text-center">
            <TestimonialSection16 />
          </div>

          <div className=" bg-slate-950 p-10 ">
            <FAQ />
          </div>
        </div>
        {/* <div className="h-dvh"> */}
        {/* <div className="h-1/2 bg-slate-950 text-white">signup now</div> */}
        <div className=" bg-amber-500">
          <Footer />
        </div>
      </div>
      {/* </div> */}
      <button
        onClick={Top}
        className="bg-red-500 border-4  border-sky-300 bg-no-repeat bg-center  text-white  fixed bottom-0 right-0 rounded-full  h-20 w-20 m-5  active:bg-red-600 max-md:  "
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/130/130906.png"
          alt=""
          className="p-3 "
        />
      </button>
    </>
  );
}

export default App;
