import React from "react";
import AnimatedArrow from "./AnimatedArrow";
import AnimatedArrow1 from "./AnimatedArrow1";
import AnimatedArrow2 from "./AnimatedArrow2";
// import money from "src/assets/money.png";

const Visual = () => {
  return (
    <div className=" text-white  flex">
      {/* <img src={require("src/assets/money.png")} alt="img" /> */}
      {/* <img src="{money}" alt="1" /> */}
      {/* <img src="src/assets/money.png" alt="" /> */}
      {/* <AnimatedArrow /> */}
      {/* <img
        src="https://www.flaticon.com/free-icon/bank-statement_1728987"
        alt="das"
      /> */}
      <div className="flex-1">
        <AnimatedArrow />
      </div>

      <div className="flex-1">
        <AnimatedArrow1 />
      </div>
      <div className="flex-1">
        <AnimatedArrow2 />
      </div>
    </div>
  );
};

export default Visual;
