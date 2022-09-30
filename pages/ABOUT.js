import axios from "axios";
import React from "react";
import { useEffect } from "react";

const HOME = () => {
  useEffect(() => {
    const getdata = async () => {
      await axios
        .get("http://localhost:3000/api/text")
        .then((e) => console.log(e));
    };
    getdata();
  }, []);
  return <div>home</div>;
};

export default HOME;
