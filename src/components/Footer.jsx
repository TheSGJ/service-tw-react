import React from "react";
import { Link } from "react-router-dom";
import nProgress from "nprogress";
export default function Footer() {
  let year = new Date().getFullYear();
  const handleUpSc = () => {
    nProgress.start();
    window.scrollTo(0, 0); 
  }
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
      <div className="sm:flex sm:items-center sm:justify-between">

        <Link to="/"
          className="flex items-center mb-4 sm:mb-0"
          onClick={handleUpSc}
        >
          
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Service TW
          </span>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <Link onClick={handleUpSc} to="/about" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link to="/service" onClick={handleUpSc} className="mr-4 hover:underline md:mr-6">
              Service
            </Link>
          </li>
          
          <li>
            <Link to="/contact" onClick={handleUpSc} className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {year} {" "}
        <Link to="/" className="hover:underline">
          Service TW
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
