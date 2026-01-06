import React from "react";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0"></div>

      {/* <!-- footer bottom start --> */}
      <div className="py-5 xl:py-7.5 bg-gray-500">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <p className="text-dark font-medium text-center">
            &copy; {year}. All rights reserved.
          </p>
        </div>
      </div>
      {/* <!-- footer bottom end --> */}
    </footer>
  );
};

export default Footer;
