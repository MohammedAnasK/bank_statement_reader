import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Process = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div className="container mx-auto p-8 grid">
      <div className="grid grid-cols-1 gap-8 items-center justify-center max-md:grid-cols-1 max-md:border-0">
        {/* Step 1 */}
        <div
          className="grid grid-cols-2 border-2 p-5 rounded-xl border-slate-700 shadow bg-gradient-to-br from-slate-800 to-transparent max-md:grid-cols-1 max-md:border-x-0 max-md:border-y-2 max-md:p-5"
          data-aos="fade-right" 
        >
          <div className="image">
            <img
              src="clip1.gif"
              alt="Computer man"
              className="w-full rounded-lg"
            />
          </div>
          <div className="text mb-20">
            <h1 className="pl-5 text-2xl text-white text-center">
              <p>
                <span className="text-3xl font-bold text-center">Step 1:</span>
                <br /> Select your bank and upload the statement in PDF format.
                Log in to the service platform and navigate to the bank statement
                upload section. Choose your bank from the provided list. Upload
                the bank statement in PDF format.
              </p>
            </h1>
          </div>
        </div>

        {/* Step 2 */}
        <div
          className="grid grid-cols-2 border-2 p-5 rounded-xl border-slate-700 shadow bg-gradient-to-br from-slate-800 to-transparent max-md:grid-cols-1"
          data-aos="fade-left" 
        >
          <div className="image">
            <img
              src="clip2.gif"
              alt="Computer man"
              className="w-full rounded-lg"
            />
          </div>
          <div className="pl-5 text mb-20">
            <h1 className="pl-5 text-2xl text-white text-center">
              <p>
                <span className="text-3xl font-bold text-center">Step 2:</span>
                <br />
                View transaction details. Once the statement is uploaded, click
                on the view icon to access the transaction details. Review the
                transactions listed in the statement to ensure accuracy.
              </p>
            </h1>
          </div>
        </div>

        {/* Step 3 */}
        <div
          className="grid grid-cols-2 border-2 p-5 rounded-xl border-slate-700 shadow bg-gradient-to-br from-slate-800 to-transparent max-md:grid-cols-1"
          data-aos="fade-right" 
        >
          <div className="image">
            <img
              src="clip2.gif"
              alt="Computer man"
              className="w-full rounded-lg"
            />
          </div>
          <div className="pl-5 text mb-20">
            <h1 className="pl-5 text-2xl text-white text-center">
              <p>
                <span className="text-3xl font-bold text-center">Step 3:</span>
                <br />
                Send to Tally. After verifying the transactions, click on the
                "Send To Tally" button. Select the fields and data that you want
                to send to your Tally account. Customize the mapping of data fi
              </p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
