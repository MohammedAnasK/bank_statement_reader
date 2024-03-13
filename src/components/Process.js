import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Process = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container  p-8 grid mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center justify-center max-md:grid-cols-1 max-md:border-0">
        {/* Step 1 */}
        <div
          className="grid grid-cols-2 border-2 p-5 rounded-xl border-slate-700 shadow  max-md:grid-cols-1 max-md:border-x-0 max-md:border-y-2 max-md:p-5"
          data-aos="fade-up"
        >
          <div className="image">
            <img
              src="video1.gif"
              alt="Computer man"
              className="w-full h-96 rounded-lg max-lg:h-full max-md:h-full max-xl:h-full"
            />
          </div>
          <div className="my-auto max-md:pt-5">
            <h1 className=" text-xl text-white text-center">
              <p>
                <span className="text-3xl font-bold text-center ">Step 1:</span>
                <br />
                Access the service platform and navigate to the bank statement
                upload section. Choose your bank from the provided list, then
                upload your bank statement in PDF format.
              </p>
            </h1>
          </div>
        </div>

        {/* Step 2 */}
        <div
          className="grid grid-cols-2 border-2 p-5 rounded-xl border-slate-700 shadow  max-md:grid-cols-1 max-md:border-x-0 max-md:border-y-2 max-md:p-5"
          data-aos="fade-up"
        >
          <div className="image">
            <img
              src="video2.gif"
              alt="Computer man"
              className="w-full h-96 rounded-lg max-lg:h-full max-md:h-full max-xl:h-full"
            />
          </div>
          <div className="pl text my-auto max-md:pt-5">
            <h1 className="pl text-xl text-white text-center">
              <p>
                <span className="text-3xl font-bold text-center">Step 2:</span>
                <br />
                View transaction details. After successfully uploading the
                statement, click on the view icon to access the transaction
                details. Review the transactions listed in the statement to
                ensure accuracy. Additionally, select the ledger format and
                identify credit and debit transactions as required.
              </p>
            </h1>
          </div>
        </div>

        {/* Step 3 */}
        <div
          className="grid grid-cols-2 border-2 p-5 rounded-xl border-slate-700 shadow  max-md:grid-cols-1 max-md:border-x-0 max-md:border-y-2 max-md:p-5"
          data-aos="fade-up"
        >
          <div className="image">
            <img
              src="video3.gif"
              alt="Computer man"
              className="w-full h-96 rounded-lg max-lg:h-full max-md:h-full max-xl:h-full"
            />
          </div>
          <div className="pl text my-auto max-md:pt-5">
            <h1 className="pl text-xl text-white text-center">
              <p>
                <span className="text-3xl font-bold text-center">Step 3:</span>
                <br />
                Send to Tally. After verifying the transactions, manually select
                the transactions you wish to import into Tally. Then, click on
                the "Send To Tally" button. Select the fields and data to be
                transferred to your Tally account. Customize the mapping of data
                fields as necessary to ensure accurate integration with your
                Tally software.
              </p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
