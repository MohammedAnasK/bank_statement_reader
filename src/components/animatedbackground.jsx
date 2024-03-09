import React, { useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min"; // Or any other Vanta effect

const MyComponent = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (vantaRef.current) {
      const vantaEffect = BIRDS({
        el: vantaRef.current,
        color1: 0x3f51b5, // Example customization option (color)
      });

      return () => {
        if (vantaEffect) {
          vantaEffect.destroy();
        }
      };
    }
  }, [vantaRef]);

  return (
    <div ref={vantaRef} className="my-background-div ">
      {/* Your foreground content goes here */}
    </div>
  );
};

export default MyComponent;
