import React from 'react';

const Process = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-2 gap-8 items-center justify-center max-md:grid-cols-1">
        <div className="image">
          <img
            src="clip1.gif"
            alt="Computer man"
            className="h- w-1/4 rounded-lg"
          />
        </div>
        <div className="text">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Paris is one of the most magnificent cities in France.
          </h1>
        </div>

        <div className="image">
          <img
            src="clip2.gif"
            alt="Computer man"
            className="h- w-1/4 rounded-lg"
          />
        </div>
        <div className="text">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Paris is one of the most magnificent cities in France.
          </h1>
        </div>
        <div className="image">
          <img
            src="clip2.gif"
            alt="Computer man"
            className="h- w-1/4 rounded-lg"
          />
        </div>
        <div className="text">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Paris is one of the most magnificent cities in France.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Process;
