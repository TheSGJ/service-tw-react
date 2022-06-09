import React from "react";
import Button from "@material-ui/core/Button";
import { useForm, ValidationError } from "@formspree/react";
import { Card, Toast } from "flowbite-react";
import Breadcrumb from "flowbite-react/lib/esm/components/Breadcrumb";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [state, handleSubmit] = useForm("mvolykjd");
  if (state.succeeded) {
    return (
      <div className="grid place-items-center">
        <Helmet>
              <title>Message was sent successfully! | Contact - Service TM</title>
        </Helmet>
        <Toast className="my-6 mx-1">
          <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
            ✉️
          </div>
          <div className="ml-3 text-sm font-normal">
            Message was sent successfully
          </div>
          <Toast.Toggle />
        </Toast>

        <Card className="my-2 py-18">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Message was successfully sent! 📧
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Thanks for your feedback, we'll get in touch with you soon.
          </p>
        </Card>
      </div>
    );
  }
  return (
    <div>
        <Helmet>
              <title>Contact Us - Service TM</title>
        </Helmet>
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="my-3 grid place-items-center"
      >
        <Breadcrumb.Item>
        <Link to="/">Home</Link>
        </Breadcrumb.Item>
        
        <Breadcrumb.Item>
        <Link to="/contact">Contact</Link>
        </Breadcrumb.Item>
        
      </Breadcrumb>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-col text-center mx-8">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
              Feedback
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-700 dark:text-white dark:border-white"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600 dark:text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 z-10 ease-in-out dark:bg-gray-700 dark:text-white dark:border-white"
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  type="submit"
                  disabled={state.submitting}
                >
                  Submit
                </Button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <Link to="/" className="text-indigo-500">
                  example@email.com
                </Link>
                <p className="leading-normal my-5">
                  49 Smith St.
                  <br />
                  Saint Cloud, MN 56301
                </p>
                <span className="inline-flex">
                  <Link to="/" className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </Link>
                  <Link to="/" className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </Link>
                  <Link to="/" className="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </Link>
                  <Link to="/" className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
