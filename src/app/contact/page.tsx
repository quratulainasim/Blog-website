import React from "react";
import Link from "next/link";
function Contact() {
  return (
    <>
      <section className="bg-white">
        <div className="container px-5 py-20 mx-auto min-h-screen">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-2xl font-bold mb-4 text-slate-500 underline">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto  text-gray-400 font-semibold">
              Discover how science-backed insights can guide you toward a
              healthier lifestyle. Whether you are curious about the latest
              wellness breakthroughs or seeking personalized advice, I am here
              to support your journey to better living. Fill out the form below,
              and i will get back to you with thoughtful responses to your
              questions.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-md text-gray-400"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-100 rounded focus:bg-white border border-gray-100 text-black p-2 "
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-md text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-100 rounded focus:bg-white border border-gray-100 text-black p-2"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-md text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-100 rounded focus:bg-white border border-gray-100 text-black h-32 py-1 px-3 resize-none"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <Link href="/">
                  <button className="flex mx-auto text-slate-50 font-bold bg-slate-500 border-0 py-2 px-4 hover:bg-gray-300 rounded text-lg">
                    Submit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
