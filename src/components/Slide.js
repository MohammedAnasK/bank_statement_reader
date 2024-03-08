import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const YourComponent = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTrigger = window.innerHeight * 0.8;

      if (!hasScrolled && window.scrollY > scrollTrigger) {
        // Initialize ScrollReveal only if the animation hasn't occurred yet
        ScrollReveal().reveal(".slide-right", {
          duration: 1000,
          origin: "right",
          distance: "700px",
          easing: "ease-in-out",
          reset: true // Reset the animation when scrolling back up
        });

        // Set the state to indicate that the animation has occurred
        setHasScrolled(true);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);

  return (
    <section className="p-4 h-screen flex flex-col justify-center bg-gray-200">

      <div className={`slide-right ${hasScrolled ? 'revealed' : ''} w-full h-96`}>
      <h1 className="flex text-4xl font-bold text-red-500 mb-4">Slide In</h1>
        <img
          src="clip1.gif"
          alt="puppy retriever"
          className="w-full h-full object-contain block mx-auto"
        />
      </div>
    </section>
  );
};

export default YourComponent;
