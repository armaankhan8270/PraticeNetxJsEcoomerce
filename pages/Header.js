import React from "react";

const Header = () => {
  return (
    <header className="mt-0 text-sm flex font-extrabold shadow-lg h-12 rounded  sm:w-1/3 md:w-1/2 lg:w-full ">
      <h4 className="p-2">Ecommerce</h4>
      <div className="text-end">
        <h4 className="p-2 text-end">Cart</h4>
        <h4 className="p-2">Login</h4>
      </div>
    </header>
  );
};

export default Header;
