import React from "react";
import { FaComputer } from "react-icons/fa6";
import { GrSystem } from "react-icons/gr";
import { MdOtherHouses } from "react-icons/md";
import { RiGhost2Fill } from "react-icons/ri";
import { SiTryhackme } from "react-icons/si";

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const [flyer, setFlyer] = React.useState(false);
    const [flyerTwo, setFlyerTwo] = React.useState(false);
  
    return (
      <>
        {/* This example requires Tailwind CSS v2.0+ */}
        <div className="relative bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://i.ibb.co/4StFNHY/pr4nk-me-1.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Open menu</span>
                  {/* Heroicon name: outline/menu */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <nav className="hidden md:flex space-x-10">
                <div className="relative">
                  {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                  <button
                    type="button"
                    className="
                     group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 pb-8'
                    "
                    onClick={() => (setFlyer(!flyer), setFlyerTwo(false))}
                  >
                    <span>Pranks</span>
                    {/*
                Heroicon name: solid/chevron-down
  
                Item active: "text-gray-600", Item inactive: "text-gray-400"
              */}
                    <svg
                      className={
                        flyer === true
                          ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                          : "transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      }
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {/*
              'Solutions' flyout menu, show/hide based on flyout menu state.
  
              Entering: "transition ease-out duration-200"
                From: "opacity-0 translate-y-1"
                To: "opacity-100 translate-y-0"
              Leaving: "transition ease-in duration-150"
                From: "opacity-100 translate-y-0"
                To: "opacity-0 translate-y-1"
            */}
  
                  <div
                    onMouseLeave={() => setFlyer(false)}
                    className={
                      flyer
                        ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    }
                  >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          {/* react-icons: fa6 FaComputer */}
                          <FaComputer className="flex-shrink-0 h-6 w-6 text-indigo-600" />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Simulator
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Get fake simulation on your device! Various simulations are available such as Windows, Mac, etc.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          {/* react-icons: gr GrSystem */}
                          <GrSystem className="flex-shrink-0 h-6 w-6 text-indigo-600" />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Fake Update
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Prank your friends with fake update screens! 
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          {/* react-icons: ri RiGhost2Fill */}
                          <RiGhost2Fill className="flex-shrink-0 h-6 w-6 text-indigo-600" />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Jumpscare
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Surprise the people around you with a jump scare that comes suddenly 
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          {/* react-icons: si SiTryhackme */}
                          <SiTryhackme className="flex-shrink-0 h-6 w-6 text-indigo-600" />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Be a Hacker
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Be a fake hacker to scare people around you! 
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          {/* react-icons: md MdOtherHouses */}
                          <MdOtherHouses className="flex-shrink-0 h-6 w-6 text-indigo-600" />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Other Pranks!
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              And Many other Pranks! You can also contribute by providing pranks of your own and submit it to us!
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                        <div className="flow-root">
                          <a
                            href="#"
                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                          >
                            {/* Heroicon name: outline/play */}
                            <svg
                              className="flex-shrink-0 h-6 w-6 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="ml-3">Watch Demo</span>
                          </a>
                        </div>
                        <div className="flow-root">
                          <a
                            href="#"
                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                          >
                            {/* Heroicon name: outline/phone */}
                            <svg
                              className="flex-shrink-0 h-6 w-6 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                            <span className="ml-3">Contact Sales</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Changelogs
                </a>
                <div className="relative">
                  {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                  <button
                    type="button"
                    className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => (setFlyerTwo(!flyerTwo), setFlyer(false))}
                  >
                    <span>More</span>
                    {/*
                Heroicon name: solid/chevron-down
  
                Item active: "text-gray-600", Item inactive: "text-gray-400"
              */}
                    <svg
                      className={
                        flyerTwo === true
                          ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                          : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      }
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {/*
              'More' flyout menu, show/hide based on flyout menu state.
  
              Entering: "transition ease-out duration-200"
                From: "opacity-0 translate-y-1"
                To: "opacity-100 translate-y-0"
              Leaving: "transition ease-in duration-150"
                From: "opacity-100 translate-y-0"
                To: "opacity-0 translate-y-1"
            */}{" "}
                  <div
                    onMouseLeave={() => setFlyerTwo(false)}
                    className={
                      flyerTwo
                        ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    }
                  >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          {/* Heroicon name: outline/support */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Help Center
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Get all of your questions answered in our forums or
                              contact support.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          {/* Heroicon name: outline/bookmark-alt */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Issues
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Find Bugs or System error on this website and report it to us, and help us find other problems!
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          {/* Heroicon name: outline/calendar */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Contribute
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Contribute to this web project by contacting us and helping us in developing this project.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          {/* Heroicon name: outline/shield-check */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Security
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Understand how we take your privacy seriously.
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                        <div>
                          <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                            Recent Posts
                          </h3>
                          <ul className="mt-4 space-y-4">
                            <li className="text-base truncate">
                              <a
                                href="#"
                                className="font-medium text-gray-900 hover:text-gray-700"
                              >
                                Boost your conversion rate
                              </a>
                            </li>
                            <li className="text-base truncate">
                              <a
                                href="#"
                                className="font-medium text-gray-900 hover:text-gray-700"
                              >
                                How to use search engine optimization to drive
                                traffic to your site
                              </a>
                            </li>
                            <li className="text-base truncate">
                              <a
                                href="#"
                                className="font-medium text-gray-900 hover:text-gray-700"
                              >
                                Improve your customer experience
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-5 text-sm">
                          <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            {" "}
                            View all posts <span aria-hidden="true">→</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                {/*<a
                  href="#"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Sign in
                  </a>*/}
                <a
                  href="#"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Submit your own pranks!
                </a>
              </div>
            </div>
          </div>
          {/*
      Mobile menu, show/hide based on mobile menu state.
  
      Entering: "duration-200 ease-out"
        From: ""
        To: ""
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    */}
  
          <div
            className={
              open
                ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transform origin-top-right md:hidden"
                : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            }
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      onClick={() => setOpen(!open)}
                    >
                      <span className="sr-only">Close menu</span>
                      {/* Heroicon name: outline/x */}
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      {/* fa6: FaComputer */}
                      <FaComputer className="flex-shrink-0 h-6 w-6 text-indigo-600" />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Simulator
                      </span>
                    </a>
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      {/* react-icons: gr GrSystem */}
                      <GrSystem className="flex-shrink-0 h-6 w-6 text-indigo-600" />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Fake Update
                      </span>
                    </a>
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      {/* react-icons: ri RiGhost2Fill */}
                      <RiGhost2Fill className="flex-shrink-0 h-6 w-6 text-indigo-600" />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Jumpscares
                      </span>
                    </a>
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      {/* react-icons: si SiTryhackme */}
                      <SiTryhackme className="flex-shrink-0 h-6 w-6 text-indigo-600" />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Fake Hacker
                      </span>
                    </a>
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      {/* react-icons: md MdOtherHouses */}
                          <MdOtherHouses className="flex-shrink-0 h-6 w-6 text-indigo-600" />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Other Pranks
                      </span>
                    </a>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Contribute
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Changelogs
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Help Center
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Guides
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Disclaimer
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Bug Reports
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Submit your own Pranks!
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    or contact us for more informations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
export default Navbar