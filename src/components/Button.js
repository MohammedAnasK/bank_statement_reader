import React, { useState, useEffect } from "react";
 
 
const Button = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
 
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 0) ||
          currentScrollPos < 0
      );
      setPrevScrollPos(currentScrollPos);
    };
 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
 
  useEffect(() => {
    const AOS = require("aos");
    AOS.init({
      duration: 400,
    });
  }, []);
 
  return (
    <div>
      {visible && (
      
          <button
            onClick={scrollToTop}
            className={`fade-buttonbg-gradient-to-b from-slate-800 via-slate-900 to-slate-950  border-4  border-slate-500 bg-no-repeat bg-center  text-white  fixed bottom-0 right-0 rounded-full  h-14 w-14 m-5  active:bg-red-600 max-md: `}
            data-aos="fade-left"
          >
            <img src="arrow-141-48.png" alt="" className="p-3" />
          </button>
     
      )}
    </div>
  );
};
 
export default Button;