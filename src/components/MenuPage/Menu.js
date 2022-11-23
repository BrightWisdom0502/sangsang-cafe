import './Menu.css';
import Cart from './Cart';
import React, { useState } from "react";
import ItemCard from "./itemCard";
import Data from "./Data.js";
import {CartProvider} from "react-use-cart"
import styled from "@emotion/styled"

function App() {
  const [menutop, setMenutop] = useState("Coffee")

  const [filter, setFilter] = useState(Data.productData.filter(item => item.category === "Coffee"));
  const coffee = () => {
    const coffees = Data.productData.filter(item => item.category === "Coffee")
    const menutop = "Coffee";
    setFilter(coffees)
    setMenutop(menutop)
  
  }
  const tea = () => {
    const teas = Data.productData.filter(item => item.category === "Tea")
    const menutop = "Tea";
    setFilter(teas)
    setMenutop(menutop)
  }
  const drink = () => {
    const drinks = Data.productData.filter(item => item.category === "Drink")
    const menutop = "Drink";
    setFilter(drinks)
    setMenutop(menutop)
  }
  const dessert = () => {
    const desserts = Data.productData.filter(item => item.category === "Dessert")
    const menutop = "Dessert";
    setFilter(desserts)
    setMenutop(menutop)
  }
  console.log(Data.productData, "data");

  
  
  return (
    
    <div  className='BackGround'>
      <CartProvider>
      <div className='Kiosk'>
        <div class="search">
          <form>
            <input type="search" placeholder="메뉴를 검색하시오" class="searchTerm" aria-label="Search through site content"/>
          </form>
        </div>
      
          <div className='category'>
            <div className='btn_group'>
              <button className="btn_category" onClick={()=>coffee()}>커피</button>
              <button className="btn_category" onClick={()=>tea()}>차</button>
              <button className="btn_category" onClick={()=>drink()}>음료</button>
              <button className="btn_category" onClick={()=>dessert()}>디저트</button>
            </div>
          </div>
        

        <div className="product_list">
        
      <h1 className="text-center mt-3">{menutop}</h1>
      <div style={{ width:"100%",overflow:"auto",display:"flex"}}>
        <div style={{display:"flex", overflow:"auto"}}>
          {filter.map((item, index) => {
            return (
              <ItemCard
                img={item.img}
                desc={item.desc}
                title={item.title}
                price={item.price}
                key={index}
                item={item}
                category={item.category}
              />
            );
          })}
        </div>
      </div>
  
          
        </div>
        
      </div>



        <div class="cart">
        <Cart/>
        </div>
        </CartProvider>  
      </div>
      
    
  
  );
}

export default App;
