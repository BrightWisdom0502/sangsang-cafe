import React, { useState } from "react";
import ItemCard from "./itemCard";
import Data from "./Data.js";
import map from "lodash"

const List = () => {
  const [filter, setFilter] = useState(Data.productData);

  const coffee = () => {
    const coffees = Data.productData.filter(item => item.category === "coffee")
    setFilter(coffees)
  }
  const tea = () => {
    const teas = Data.productData.filter(item => item.category === "tea")
    setFilter(teas)
  }
  
  console.log(Data.productData, "data");
  return (
    <div>
      <h1 className="text-center mt-3">Coffee</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {Data.productData.map((item, index) => {
            return (
              <ItemCard
                img={item.img}
                desc={item.desc}
                title={item.title}
                price={item.price}
                key={index}
                item={item}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default List;
