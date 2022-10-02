import { useContext, useState } from "react";
import { createContext } from "react";

export const StoreContext = createContext();

export const StateStoreContext = ({ children }) => {
  const [Cost, setCost] = useState(0);
  const [bucket, setbucket] = useState([
    {
      title: "Pant",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSUXtYMXAEf9DKh95KpQL1uNuKLa-fRmLRx8Q34Xnkvlc8jFuEgkTGTWVbakfF0POY7_L9z8m2J_F5SPDpnPrzAxd8Ni16aCmXZl-V3mD7b6LhypaDmArbv&usqp=CAE",
      desc: "nice shoes",
      price: 3453,
      categorey: "clothes",
    },
    {
      title: "Teshirt",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSUXtYMXAEf9DKh95KpQL1uNuKLa-fRmLRx8Q34Xnkvlc8jFuEgkTGTWVbakfF0POY7_L9z8m2J_F5SPDpnPrzAxd8Ni16aCmXZl-V3mD7b6LhypaDmArbv&usqp=CAE",
      desc: "nice shoes",
      price: 3453,
      categorey: "clothes",
    },
  ]);
  // for (let i = 0; i <= bucket.length; i++) {
  //   const Price = bucket[i].price;
  //   setCost(Cost + Price);
  // }
  const CratData = [];
  const [AddToCart, setAddToCart] = useState([]);

  return (
    <StoreContext.Provider
      value={{ bucket, setbucket, CratData, AddToCart, setAddToCart, Cost }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const GlobalStoreContext = () => useContext(StoreContext);
