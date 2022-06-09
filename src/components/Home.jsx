import { Carousel } from "flowbite-react";
import React from "react";
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <div className="container">
        <Helmet>
              <title>Home - Service TM</title>
        </Helmet>
      <div className="my-4 container-lg">
        <h5 className="text-2xl my-2 font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal my-2 text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>

      <div className="my-4">
        <Carousel>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>

      <div className="container my-3">
        <h5 className="text-2xl font-bold my-2 tracking-tight text-gray-900 dark:text-white">
          Service sector companies have grown in the past for few decades. But
          thier few service sector companies which outperforms the others
        </h5>
        <p className="font-normal my-2 text-gray-700 dark:text-gray-400">
          Service TW is one of startup to provide excellent service. Service
          sector companies have played a significant role in the tech industry
          and it's motive is to help other tech companies or even governments to
          provide. These we have a lot of service companies lying around and you
          need the right one to fullfill your needs. So Contact Service TW today
          and quote a deal with us.
        </p>
      </div>
    </div>
  );
}
