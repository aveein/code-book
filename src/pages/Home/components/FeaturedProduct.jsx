import React from "react";

export const FeaturedProduct = () => {
  return (
    <section className='my-20'>
    <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>
    <div className="flex flex-wrap justify-center lg:flex-row">
      <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a className="relative" href="/products/10004">
          <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
            Best Seller
          </span>
          <img
            className="rounded-t-lg w-full h-64"
            src="https://images.unsplash.com/photo-1595617795501-9661aafda72a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40"
            alt="The Complete Guide to Backend Development"
          />
        </a>
        <div className="p-5">
          <a href="/products/10004">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              The Complete Guide to Backend Development
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde
            quisquam magni vel eligendi nam.
          </p>
          <div className="flex items-center my-2">
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1" />
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1" />
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1" />
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1" />
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1" />
          </div>
          <p className="flex justify-between items-center">
            <span className="text-2xl dark:text-gray-200">
              <span>$</span>
              <span>99</span>
            </span>
            <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
              Add To Cart <i className="ml-1 bi bi-plus-lg" />
            </button>
          </p>
        </div>
      </div>
      <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a className="relative" href="/products/10006">
          <img
            className="rounded-t-lg w-full h-64"
            src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40"
            alt="Frontend Fastlane Plan With Projects"
          />
        </a>
        <div className="p-5">
          <a href="/products/10006">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Frontend Fastlane Plan With Projects
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde
            quisquam magni vel eligendi nam.
          </p>
          <div className="flex items-center my-2">
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1" />
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1" />
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1" />
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1" />
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1" />
          </div>
          <p className="flex justify-between items-center">
            <span className="text-2xl dark:text-gray-200">
              <span>$</span>
              <span>99</span>
            </span>
            <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
              Add To Cart <i className="ml-1 bi bi-plus-lg" />
            </button>
          </p>
        </div>
      </div>
      <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a className="relative" href="/products/10008">
          <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
            Best Seller
          </span>
          <img
            className="rounded-t-lg w-full h-64"
            src="https://images.unsplash.com/photo-1613490900233-141c5560d75d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40"
            alt="JavaScript Basics To Advance With Shubham"
          />
        </a>
        <div className="p-5">
          <a href="/products/10008">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              JavaScript Basics To Advance With Shubham
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde
            quisquam magni vel eligendi nam.
          </p>
          <div className="flex items-center my-2">
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1" />
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1" />
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1" />
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1" />
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1" />
          </div>
          <p className="flex justify-between items-center">
            <span className="text-2xl dark:text-gray-200">
              <span>$</span>
              <span>29</span>
            </span>
            <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
              Add To Cart <i className="ml-1 bi bi-plus-lg" />
            </button>
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};
