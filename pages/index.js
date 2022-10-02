/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "../Components/Layout";
import { GlobalStoreContext } from "../context/Items";
import Bucket from "./Bucket";
import ProductDeatil from "./ProductDeatil";

export default function Home({ data }) {
  const [datas, setdatas] = useState([]);
  const [product, setproduct] = useState([]);
  const [cart, setcart] = useState(false);
  const [show, setshow] = useState(false);
  const [items, setitem] = useState({
    title: "",
    img: "",
    desc: "",
    price: "",
    categorey: "",
  });
  const DAAAta = [];
  const { bucket, setbucket, cartData, AddToCart, setAddToCart } =
    GlobalStoreContext();
  useEffect(() => {
    const getData = async () => {
      const url = `https://fakestoreapi.com/products`;
      await axios.get(url).then((product) => {
        setdatas(product.data);
        setproduct(product.data);
        console.log(product);
      });
    };
    getData();
  }, []);
  return (
    <Layout title={"amzon"}>
      <>
        {show ? (
          <ProductDeatil
            title={items.title}
            img={items.img}
            desc={items.desc}
            price={items.price}
            categorey={items.categorey}
          />
        ) : (
          ""
        )}
      </>
      <div className="grid gap-4 lg:grid-cols- md:grid-cols-2 sm:grid-cols-1">
        {cart ? (
          <Bucket />
        ) : (
          <>
            {datas?.map((item, ind) => {
              return (
                <div key={ind} className="py-6">
                  <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="w-1/3 bg-cover">
                      <img className="lg:p-4" src={item.image} alt="" />
                    </div>
                    <div className="w-2/3 p-4">
                      <h1 className="text-gray-900 font-bold text-2xl">
                        {item.title}
                      </h1>
                      <p className="mt-2 text-gray-900 text-xm">
                        {item.description?.split("", 150)}
                      </p>
                      <div className="flex item-center mt-2">
                        <svg
                          className="w-5 h-5 fill-current text-gray-700"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                        <svg
                          className="w-5 h-5 fill-current text-gray-700"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                        <svg
                          className="w-5 h-5 fill-current text-gray-700"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                        <svg
                          className="w-5 h-5 fill-current text-gray-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                        <svg
                          className="w-5 h-5 fill-current text-gray-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      </div>
                      <div className="flex item-center justify-between mt-3">
                        <h1 className="text-gray-700 font-bold text-xl">
                          {item.price}
                        </h1>
                        <button
                          onClick={() => {
                            setitem({
                              title: item.title,
                              img: item.image,
                              desc: item.description,
                              price: item.price,
                              categorey: item.category,
                            });

                            setshow(true);
                          }}
                          className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                        >
                          Add to Card
                        </button>
                        <button
                          onClick={() => {
                            setbucket({
                              title: item.title,
                              img: item.image,
                              desc: item.description,
                              price: item.price,
                              categorey: item.category,
                            });
                          }}
                        >
                          add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </Layout>
  );
}
// const="<div classNameName=" container  fs-3 text-center my-5 mx-auto navs d-flex bg-black rounded-pill text-light">"
