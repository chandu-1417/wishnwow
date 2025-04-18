import { React, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import { MdKeyboardBackspace } from "react-icons/md";

const BookNow = () => {
  const [selectedTheater, setSelectedTheater] = useState("");
  localStorage.setItem("theater", selectedTheater);

  return (
    <div>
      <div className="w-full flex flex-col py-[1.5rem] items-center bg-gradient-to-b from-[#f05f57] from-[0%] to-[#360940] to-[100%]">
        <Link to="/" className="w-full flex items-center">
          <button className="mb-2 flex items-center gap-1 text-white mt-5 mr-auto ml-2 md:ml-10">
            <MdKeyboardBackspace />
            Back
          </button>
        </Link>
        <div className="text-xl lg:text-3xl text-gray-100 font-medium">
          Two Locations in Hyderabad
        </div>
        <div className="bg-[#ebeaea60] mt-5 flex flex-col items-center rounded-2xl py-5 md:py-6 w-[91%] max-w-[202rem] shadow-md px-3">
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-x-20 gap-y-5 w-[100%] mb-6">
            <Link to="/select-slot"><div className="max-w-[22rem] bg-white rounded-3xl shadow-md transition-all p-4 flex flex-col gap-2 text-[#5a0c97] relative overflow-hidden" onClick={() => setSelectedTheater("Hitech city")}>
              <div className="h-[240px] relative">

                <img
                  src="https://bnbtplstorageaccount.blob.core.windows.net/theaterpics/v3carnival3.jpg"
                  alt=""
                  className="rounded-3xl object-cover w-full h-full"
                />

              </div>
              <div className="px-1 flex justify-between w-full items-center mt-1 text-xs font-medium">
                <h5 className="text-2xl font-medium">Hitech city</h5>
                <div className="flex gap-1 items-center">
                  <img
                    src="https://bnbtplstorageaccount.blob.core.windows.net/googleicons/google.svg"
                    alt=""
                  />
                  <p className="flex gap-1 text-[14px] items-center">
                    4.9 <IoIosStar /> (4750+ reviews)
                  </p>
                </div>
              </div>
              <div className="flex px-1 text-xs justify-evenly">
                <button className="px-3 py-2 bg-[#5b0c9728] rounded-3xl flex gap-1 items-center text-blue-600 underline h-8 py-2 px-3">
                  <svg
                    className="h-6 w-6"
                    fill="blue"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="FastfoodIcon"
                  >
                    <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z"></path>
                  </svg>
                  Food Menu
                </button>
                <div className="px-3 py-2 bg-[#5b0c9728] rounded-3xl flex gap-1 items-center h-8 py-2 px-3">
                  <svg
                    className="h-6 w-6"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="DirectionsCarFilledIcon"
                  >
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM7.5 16c-.83 0-1.5-.67-1.5-1.5S6.67 13 7.5 13s1.5.67 1.5 1.5S8.33 16 7.5 16zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5.81 10l1.04-3h10.29l1.04 3H5.81z"></path>
                  </svg>
                  Parking Available
                </div>
              </div>
              <div className="mx-auto">
                <button className="px-4 py-2 text-gray-50 bg-[#5a0c97] mt-1 rounded-3xl w-fit ml-1">
                  Book Online
                </button>
              </div>
            </div>
            </Link>
            <Link to="/select-slot">
              <div className="max-w-[22rem] bg-white rounded-3xl shadow-md transition-all p-4 flex flex-col gap-2 text-[#5a0c97] relative overflow-hidden" onClick={() => setSelectedTheater("Miyapur")}>
                <div className="h-[240px] relative">

                  <img
                    src="https://bnbtplstorageaccount.blob.core.windows.net/theaterpics/v2spectra1.jpg"
                    alt=""
                    className="rounded-3xl object-cover w-full h-full"
                  />

                </div>
                <div className="px-1 flex justify-between w-full items-center mt-1 text-xs font-medium">
                  <h5 className="text-2xl font-medium">Miyapur</h5>
                  <div className="flex gap-1 items-center">
                    <img
                      src="https://bnbtplstorageaccount.blob.core.windows.net/googleicons/google.svg"
                      alt=""
                    />
                    <p className="flex gap-1 text-[14px] items-center">
                      4.9 <IoIosStar /> (4750+ reviews)
                    </p>
                  </div>
                </div>
                <div className="flex px-1 text-xs justify-evenly">
                  <div className="bg-[#5b0c9728] rounded-3xl flex gap-1 items-center text-blue-600 underline h-8 py-2 px-3">
                    <svg
                      fill="blue"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="FastfoodIcon"
                      className="h-6 w-6"
                    >
                      <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z"></path>
                    </svg>
                    Food Menu
                  </div>
                  <div className="px-3 py-2 bg-[#5b0c9728] rounded-3xl flex gap-1 items-center h-8 py-2 px-3">
                    <svg
                      className="h-6 w-6"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="DirectionsCarFilledIcon"
                    >
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM7.5 16c-.83 0-1.5-.67-1.5-1.5S6.67 13 7.5 13s1.5.67 1.5 1.5S8.33 16 7.5 16zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5.81 10l1.04-3h10.29l1.04 3H5.81z"></path>
                    </svg>
                    Parking Available
                  </div>
                </div>
                <div className="mx-auto">
                  <button className="px-4 py-2 text-gray-50 bg-[#5a0c97] mt-1 rounded-3xl w-fit ml-1">
                    Book Online
                  </button>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <button className="rounded-lg flex items-center gap-2 px-3 sm:px-5 py-3 text-gray-200 font-medium md:text-lg tracking-wide uppercase bg-[#5a0c97] hover:bg-[#5b0c97bf]">
              <svg
                className="h-6 w-6"
                fill="white"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="PhoneInTalkIcon"
              >
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"></path>
              </svg>{" "}
              Book via Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
