import { Divider } from "@material-ui/core";
import Link from "next/link";
import React, { useState } from "react";
import { GlobalStoreContext } from "../context/Items";
import ProductDeatil from "./ProductDeatil";

const Bucket = () => {
  // const [bucket, setbucket] = useState([

  //   {
  //     title: "Shues",
  //     img: "https://kitwind.io/static/d2e5b49f71965a3fa8390ae53c4427b6/ffff1/preview.webp",
  //     desc: "nice shoes",
  //     price: 345,
  //     categorey: "clothes",
  //   },

  // ]);
  const { bucket, setbucket, Cost } = GlobalStoreContext();
  const armaan = ["s"];
  return (
    <div className=" overflow-auto  flex font-serif justify-between">
      <div className="w-[75%] ">
        {/* {bucket.map((item, ind) => { */}
        {/* return ( */}
        <h1>Bucket</h1>
        <div
          // key={ind}
          className=" grid gap-5 grid-cols-2 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 "
        >
          {bucket.map((item, ind) => {
            return (
              <div
                key={ind}
                className=" max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto"
              >
                <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
                  <div className="relative w-full h-48">
                    <img
                      src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      className="object-cover w-full h-full rounded-t"
                      alt="Plan"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                    <div>
                      <div className="text-lg font-semibold">{item.title}</div>
                      <p className="text-sm text-gray-900">{item.desc}</p>
                      <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                        {item.price}
                      </div>
                    </div>
                    <Link href="/">
                      <a className="inline-flex items-center bg-orange-500 justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                        Buy Basic
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* //end */}
        {/* ); */}
        {/* })} */}
      </div>
      <div className="w-[25%] font-sans bg-[#F5F5F5] m-2 shadow-white shadow-md">
        <div className="h-64 m-2 shadow-md shadow-slate-900">
          <h1 className="text-sm lg:text-3xl text-slate-900 font-bold p-3 ">
            SubTotal
          </h1>
          <h1 className="text-sm lg:text-3xl text-slate-400 font-bold  ">
            TotalItems: {bucket?.length}
          </h1>
          <h1>Cost: {Cost}</h1>
        </div>
      </div>
    </div>
  );
};

export default Bucket;

{
  /* <div className="flex gris">
{bucket.map((item, ind) => {
  return (
    <div
      className=" flex justify-between lg:w-full md:w-1/2 sm:w-1/3 border-2 border-slate-900  "
      key={ind}
    >
      <div className="w-[90%]">
        <div className=" flex justify-between h-32 shadow-md p-3 m-3">
          <div>img</div>
          <div>price</div>
        </div>
      </div>
    </div>
  );
})}
<div className="w-[10%]">subtotal</div>
</div> */
}
