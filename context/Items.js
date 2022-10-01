import { useContext, useState } from "react";
import { createContext } from "react";

export const StoreContext = createContext();

export const StateStoreContext = ({ children }) => {
  const [bucket, setbucket] = useState([
    {
      title: "Shues",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSUXtYMXAEf9DKh95KpQL1uNuKLa-fRmLRx8Q34Xnkvlc8jFuEgkTGTWVbakfF0POY7_L9z8m2J_F5SPDpnPrzAxd8Ni16aCmXZl-V3mD7b6LhypaDmArbv&usqp=CAE",
      desc: "nice shoes",
      price: 345,
      categorey: "clothes",
    },
  ]);

  return (
    <StoreContext.Provider value={{ bucket, setbucket }}>
      {children}
    </StoreContext.Provider>
  );
};

export const GlobalStoreContext = () => useContext(StoreContext);
