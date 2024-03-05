// import logo from "./logo.svg";
import "./App.css";
import Example from "./components/Header";
import FAQ from "./components/Q&A";
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
          <div className="h-dvh   bg-slate-950 text-center break-words">
            <div>
              <h1 className="text-amber-500 text-9xl max-md:text-7xl line-clamp-7">
                With Just One Click With BSR
                <br />
                Transfer Your Bank Statments <br />
                <span>Into Tally</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="h-dvh bg-black">
          <div className="h-1/2 bg-slate-400">info about product</div>
          <div className="h-1/2 bg-slate-950">visual rep</div>
        </div>
        <div className="">
          <div className=" bg-slate-500">
            <TestimonialSection16 />
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWNtOXUzMjJzemxjeDBxZmlnY2U5NTR5NnZhbThpbHJmeHg0aHV5diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OyTOdV7tcPpXpJrLLi/giphy.gif"
              alt=""
            />
          </div>

          <div className=" bg-amber-500 p-10 ">
            <div id="arrowAnim" className="h-10 w-10">
              <div class="arrowSliding">
                <div class="arrow"></div>
              </div>
              <div class="arrowSliding delay1">
                <div class="arrow"></div>
              </div>
              <div class="arrowSliding delay2">
                <div class="arrow"></div>
              </div>
              <div class="arrowSliding delay3">
                <div class="arrow"></div>
              </div>
            </div>
            <FAQ />
          </div>
        </div>
        <div className="h-dvh">
          <div className="h-1/2 bg-slate-950 text-white">signup now</div>
          <div className="h-1/2 bg-amber-500">
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
        </div>
      </div>
      <button
        onClick={Top}
        className=" bg-white bg-no-repeat bg-center  text-white  fixed bottom-0 right-0 rounded-full  h-20 w-20 m-10 max-md:  "
      ></button>
    </>
  );
}

export default App;
