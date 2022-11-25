import { Route, Link } from "react-router-dom";
import { React, useState, useSelector } from "react";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import MenuCategory from "../MenuPage/MenuCategory";
import SearchBar from "../MenuPage/SearchBar";
import Menus from "../MenuPage/Menus";
import MenuControl from "./MenuControl.js";

import beverage from "../../data/beverage.json";
import coffee from "../../data/coffee.json";
import desserts from "../../data/desserts.json";
import tea from "../../data/tea.json";

import MenuChange from "./MenuChange";
import CategoryButton from "./CategoryButton";

const ComponentStyle = {
  display: "flex",
  flexDirection: "row",
  height: "100vh",
  padding: "30px",
  backgroundColor: "#A4D3A0"
};

const ButtonStyle = {
  textAlign: "center",
  height: "35px",
  borderColor: "#587558" , 
  marginBottom: "20px"

}

const CardStyle = {
  width: "230px",
  height: "350px",
  overflow: "hidden",
}


const CategoryStyle = {
  width: "170px",
  height: "40px",
  marginLeft: "15px",
  backgroundColor: "#587558",
  borderColor: "#587558"
}


const LinkStyle = {
  color: "white",
}







const EditMenu = (props) => {

  var [menuName, setMenuName] = React.useState(useSelector((state) => state.menuName));
  var [menuPrice, setMenuPrice] = React.useState(useSelector((state) => state.menuPrice));
  var [menuText, setMenuText] = React.useState(useSelector((state) => state.menuText));

  const updateData = async (e) => {
    e.preventDefault();
    var data = {menuName, menuPrice, menuText};
    props.props();
  }




  return (


    <div id="EditMenu" style={ComponentStyle}>

    

      <div className="d-grid gap-2 d-md-block position-absolute">
        <nav>
        <button className="btn btn-primary" type="button" style={CategoryStyle}  >beverage</button>
        <button className="btn btn-primary" type="button" style={CategoryStyle}  >coffee</button>
        <button className="btn btn-primary" type="button" style={CategoryStyle}  >desserts</button>
        <button className="btn btn-primary" type="button" style={CategoryStyle}  >tea</button>
        </nav>
      </div>


      <Card className="row row-cols-1 row-cols-md-3 g-3" style={{ marginTop: '40px', marginLeft: '10px' , maxWidth: '60vw'}}>
                <div className="col" >
                <div className="card h-100" style={CardStyle}>
                    <img src={ "그린 티.jpg" } className="card-img-top" alt="..." /> 
                    <div className="card-body">
                        <h5 className="card-title" type="text"  id="menuName" value={menuName} onChange={(e) => setMenuName(e.target.value)} />  
                        <h4 type="number" id="menuPrice" value={menuPrice} onChange={(e) => setMenuPrice(e.target.value)} 원 />
                        <p className="card-text" type="text" id="FormText" value={menuText} onChange={(e) => setMenuText(e.target.value)} />
                    <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
                    </div>
                </div>
                </div>
      </Card>

      


      <div style={{ width: '30vh' , height: '80vh' , marginTop: '70px' ,marginLeft: '55vw', position: 'absolute'}}>
        <MenuControl />
      </div>
        
        <>
      
      <MenuCategory />
      <SearchBar />
      <Menus />
        </>
    </div>

  );
}


export default EditMenu;
