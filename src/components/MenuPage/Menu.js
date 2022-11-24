import './Menu.css';
import Cart from './Cart';
import React, { useState } from "react";
import ItemCard from "./itemCard";
import HotData from "./HotData.js";
import IceData from "./IceData";
import {CartProvider} from "react-use-cart"
import SearchFilter from "react-filter-search"
import { Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

function App() {
  const [menutop, setMenutop] = useState("커피");
  const [Data, setData] = useState(HotData);
  const [searchInput,setSearchInput] = useState("");
  
  const ToHot = () => {
    setData(HotData);
    const coffees = HotData.productData.filter(item => item.category === "Coffee")
    setFilter(coffees)
  }
  const ToIce = () => {
    setData(IceData);
    const coffees = IceData.productData.filter(item => item.category === "Coffee")
    setFilter(coffees)
  } 

  const [filter, setFilter] = useState(Data.productData.filter(item => item.category === "Coffee"));
  const coffee = () => {
    const coffees = Data.productData.filter(item => item.category === "Coffee")
    const menutop = "커피";
    setFilter(coffees)
    setMenutop(menutop)
  
  }
  const tea = () => {
    const teas = Data.productData.filter(item => item.category === "Tea")
    const menutop = "차";
    setFilter(teas)
    setMenutop(menutop)
  }
  const drink = () => {
    const drinks = Data.productData.filter(item => item.category === "Drink")
    const menutop = "음료";
    setFilter(drinks)
    setMenutop(menutop)
  }
  const dessert = () => {
    const desserts = Data.productData.filter(item => item.category === "Dessert")
    const menutop = "디저트";
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
            <input value={searchInput} placeholder="메뉴를 검색하시오" class="searchTerm" aria-label="Search through site content" onChange={(e)=> setSearchInput(e.target.value)}/>
          </form>
          <div className='HotIce_Group'>
            <ToggleButtonGroup size="lg" type="radio" name="options" defaultValue={1}>
              <ToggleButton id="tbg-radio-1" variant="danger" value={1} onClick={() => ToHot()}> Hot </ToggleButton>
              <ToggleButton id="tbg-radio-2" variant="primary" value={2} onClick={() => ToIce()}> Ice </ToggleButton>
            </ToggleButtonGroup>
            
          </div>
        </div>
      
          <div className='category'>
            
            <div className='btn_group' role="group" aria-label="Basic mixed styles example">
              <button type="button" className="btn_category" onClick={()=>coffee()}>커피</button>
              <button type="button" className="btn_category" onClick={()=>tea()}>차</button>
              <button type="button" className="btn_category" onClick={()=>drink()}>음료</button>
              <button type="button" className="btn_category" onClick={()=>dessert()}>디저트</button>
            </div>
          </div>
          
        

        <div className="product_list">
        
      <h1 className="text-center mt-3">{menutop}</h1>
      <div style={{ width:"100%",overflow:"auto",display:"flex"}}>
        <div style={{display:"flex", overflow:"auto"}}>
          {/* {filter.map((item, index) => {
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
          })} */}
          <SearchFilter
          value={searchInput}
          data={filter}
          renderResults={(results) => (
            <div style={{display:"flex", overflow:"auto"}}>
              {results.map((item, index) => (
                <ItemCard
                img={item.img}
                desc={item.desc}
                title={item.title}
                price={item.price}
                key={index}
                item={item}
                category={item.category}
              />
              ))}
            </div>
          )}
        />
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
