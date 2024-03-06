// import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Example from "./components/Header";
import Info from "./components/Info";
import FAQ from "./components/Q&A";
import Visual from "./components/Visual";
import TestimonialSection16 from "./components/testemonycard";



function App() {
  const Top = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className=" bg-slate-700 h-dvh ">
        <div className="h-dvh">
          <header>
            {" "}
            <Example />{" "}
          </header>
          <div className="h-dvh   bg-slate-950 text-center break-words font-extrabold ">
            <div>
              <h1 className="text-amber-500  text-8xl max-md:text-7xl line-clamp-7">
                With Just One Click With BSR
                <br />
                Transfer Your Bank Statments <br />
                <span>Into Tally</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="h-dvh bg-black">
          <div className="h-2/3 bg-slate-600">
          <Info/></div>
          <div className="h-1/2 flex bg-slate-950">visual rep
          <Visual/>
          </div>
        </div>
        <div className="">
          <div id="review" className=" bg-slate-500">
            <TestimonialSection16 />
          </div>

          <div id="faq" className=" bg-amber-500 p-10 ">
            <FAQ />
          </div>
        </div>
        <div className="h-dvh">
          <div className="h-1/2 bg-slate-950 text-white">signup now</div>
          <div className="h-1/2 bg-amber-500">
           <Footer/>
          </div>
        </div>
      </div>
      <button
      
        onClick={Top}
        className="bg-white bg-no-repeat bg-center  text-white  fixed bottom-0 right-0 rounded-full  h-20 w-20 m-10 max-md:  "

      ></button>
    </>
  );
}

export default App;
