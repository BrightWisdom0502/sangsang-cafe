import './Menu.css';
import Cart from './Cart';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCard from "./itemCard";
import {CartProvider} from "react-use-cart"
import SearchFilter from "react-filter-search"
import { Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { AiFillHome } from "react-icons/ai";

import Coffee from "../../data/coffee.json";
import Drink from "../../data/beverage.json";
import Desserts from "../../data/desserts.json";
import Tea from "../../data/tea.json";

const buttonStyle = {
  width: "100px",
  marginRight: "30px",
  textAlign: "center"
}

const buttonIconStyle = {
  fontSize: "50px"
}

function App() {
  const [menutop, setMenutop] = useState("커피");
  const [Data, setData] = useState(Coffee);
  const [searchInput,setSearchInput] = useState("");
  
  const ToHot = () => {
    setData(Data);
    const coffees = Data.filter(item => item.category === "Hot")
    setFilter(coffees)
  }
  const ToIce = () => {
    setData(Data);
    const coffees = Data.filter(item => item.category === "Ice")
    setFilter(coffees)
  } 

  const [filter, setFilter] = useState(Data.filter(item => item.category === "Hot"));
  const coffee = () => {
    setData(Coffee);
    const coffees = Coffee.filter(item => item.category === "Hot")
    const menutop = "커피";
    setFilter(coffees)
    setMenutop(menutop)
  
  }
  const tea = () => {
    setData(Tea)
    const teas = Tea.filter(item => item.category === "Hot")
    const menutop = "차";
    setFilter(teas)
    setMenutop(menutop)
  }
  const drink = () => {
    setData(Drink)
    const drinks = Drink.filter(item => item.category === "Hot")
    const menutop = "음료";
    setFilter(drinks)
    setMenutop(menutop)
  }
  const dessert = () => {
    setData(Desserts)
    //const desserts = Data.filter(item => item.category === "Dessert")
    const menutop = "디저트";
    setFilter(Desserts)
    setMenutop(menutop)
  }

  console.log(Data, "data");
  
  return (
    <div className='BackGround'>
      <CartProvider>
        <div className='Kiosk'>
          <div className='menu-part'>
            <div className='category'>
              <div className='btn_group' role="group" aria-label="Basic mixed styles example">
                <Button variant="outline-dark" style={buttonStyle}>
                  <Link style={{color: "inherit", textDecoration: "inherit"}} to="/"><AiFillHome style={buttonIconStyle} /></Link>
                  {/* <AiFillHome style={{fontSize: "50px"}} /> */}
                </Button>
                <button type="button" className="btn_category" onClick={() => coffee()}>커피</button>
                <button type="button" className="btn_category" onClick={() => tea()}>차</button>
                <button type="button" className="btn_category" onClick={() => drink()}>음료</button>
                <button type="button" className="btn_category" onClick={() => dessert()}>디저트</button>
              </div>
            </div>
            <div class="search">
              <form>
                <input value={searchInput} placeholder="메뉴를 검색하시오" class="searchTerm" aria-label="Search through site content" onChange={(e) => setSearchInput(e.target.value)} />
              </form>
              <div className='HotIce_Group'>
                <ToggleButtonGroup size="lg" type="radio" name="options" defaultValue={1}>
                  <ToggleButton id="tbg-radio-1" variant="danger" value={1} onClick={() => ToHot()}> Hot </ToggleButton>
                  <ToggleButton id="tbg-radio-2" variant="primary" value={2} onClick={() => ToIce()}> Ice </ToggleButton>
                </ToggleButtonGroup>
              </div>
            </div>
            <div className="product_list">
              <h1 className="text-center mt-3">{menutop}</h1>
              <div className='menus' style={{ width: "100%", overflow: "auto", display: "flex" }}>
                <div style={{ display: "flex", overflow: "auto" }}>
                  <SearchFilter
                    value={searchInput}
                    data={filter}
                    renderResults={(results) => (
                      <div style={{ display: "flex", overflow: "auto" }}>
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
          <div className='cart-part'>
            <div class="cart">
              <Cart />
            </div>
          </div>
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
