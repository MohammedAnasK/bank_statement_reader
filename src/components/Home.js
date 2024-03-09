import React from "react";
import { useSpring, animated } from "react-spring";

const Home = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 3000 },
  });

  return (
    <div className=" container mx-auto p-4">
      <animated.div style={fadeIn}>
        <div>
          <h1 className="animate-pulse neon text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight">
            Transfer Your Bank Statements
            <br />
            <span>Into Tally</span>
            <br />
          </h1>
        </div>
      </animated.div>
    </div>
  );
};

export default Home;
