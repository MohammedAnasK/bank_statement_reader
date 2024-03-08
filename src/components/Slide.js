import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const YourComponent = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled enough for the animation (scaleUp)
      const scaleUpTrigger = window.innerHeight * 1.2;
      if (!hasScrolled && window.scrollY > scaleUpTrigger) {
        // Initialize ScrollReveal for the animation (scaleUp)
        ScrollReveal().reveal(".scaleUp", {
          duration: 3000,
          scale: 0.80,
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
      <div className={`scaleUp ${hasScrolled ? 'revealed' : ''} w-full h-96`}>
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
