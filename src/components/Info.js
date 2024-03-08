import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Info = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="max-w-4xl p-8 bg-gradient-to-br rounded-md h-full break-words overflow-wrap"
      data-aos="zoom-in-right" 
    >
      <div className="p-4">
        <h4 className='text-slate-800 pb-4'>We Are Here To Help You</h4>
        <h2 className="text-6xl text-slate-950 font-extrabold mb-4">What we do?</h2>
        <p className="text-slate-950 mb-4 leading-relaxed text-2xl break-words">
          We offer seamless integration between your bank statements and Tally accounting software, enabling one-click transfer of financial data. By automating the import process, it significantly reduces manual entry time for accountants, enhancing efficiency and accuracy in financial record-keeping. This streamlined approach simplifies reconciliation tasks and ensures real-time updates in Tally, empowering businesses to make informed decisions based on up-to-date financial information.
        </p>
      </div>
    </div>
  );
};

export default Info;
