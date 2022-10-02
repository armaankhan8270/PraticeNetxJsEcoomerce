import Link from "next/link";
import React from "react";
import { GlobalStoreContext } from "../context/Items";

const Navbar = () => {
  const { bucket } = GlobalStoreContext();
  return (
    <div>
      <header>
        <nav className="flex px-4 items-center justify-between h-12 shadow-md text-black no-underline">
          <Link href="/">
            <a className="text-lg text-black no-underline  font-bold">
              Ecommerce
            </a>
          </Link>
          <div className="text-black no-underline">
            <Link className="text-black no-underline" href="/Bucket">
              <a className="text-lg lg:p-4 md:p-2 sm:p-2 p-2 text-black no-underline  font-bold">
                Cart{" "}
                <span className="bg-red-500 m-1 p-1 text-white rounded-sm">
                  {bucket?.length}
                </span>
              </a>
            </Link>
            <Link className="text-black no-underline" href="/Login">
              <a className="text-lg text-black no-underline  font-bold">
                Login
              </a>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
