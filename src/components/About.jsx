import { Accordion } from "flowbite-react";
import React from "react";
import { Helmet } from "react-helmet";
export default function About() {
  return (
    <div className="container">
      <Helmet>
        <title>About - Service TM</title>
      </Helmet>
      <div className="container my-3">
      <h2 className="text-xl text-center font-bold my-4">About - Service TW</h2>
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
      <h2 className="text-xl font-bold text-center my-4">FAQs:</h2>
      <Accordion flush={true}>
        <Accordion.Panel>
          <Accordion.Title>What is Flowbite?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built
              on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to{" "}
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                get started
              </a>{" "}
              and start developing websites even faster with components on top
              of Tailwind CSS.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Is there a Figma file available?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the{" "}
              <a
                href="https://flowbite.com/figma/"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Figma design system
              </a>{" "}
              based on the utility classes from Tailwind CSS and components from
              Flowbite.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What are the differences between Flowbite and Tailwind UI?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
