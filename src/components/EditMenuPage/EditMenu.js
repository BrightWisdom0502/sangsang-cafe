import { NavLink, Link, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

import MenuCategory from "../MenuPage/MenuCategory";
import Menus from "../MenuPage/Menus";
import MenuControl from "./MenuControl.js";

import beverage from "./beverage";
import coffee from './coffee';
import desserts from './desserts';
import tea from './tea';

import Edit001 from "./Edit001";
import Edit002 from "./Edit002";
import Edit003 from "./Edit003";
import Edit004 from "./Edit004";


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

const EditMenu = (props) => {
  return (
    <div id="EditMenu" style={ComponentStyle}>
      <div className="d-grid gap-2 d-md-block position-absolute">
        <nav>
          <button className="btn btn-primary" type="button" style={CategoryStyle}>
            <Nav.Link as={Link} to = "/Edit001" style={{color: "white"}}>beverage</Nav.Link>
          </button>
          <button className="btn btn-primary" type="button" style={CategoryStyle}>
            <Nav.Link as={Link} to = "/Edit002" style={{color: "white"}}>coffee</Nav.Link>
          </button>
          <button className="btn btn-primary" type="button" style={CategoryStyle}>
            <Nav.Link as={Link} to = "/Edit003" style={{color: "white"}}>desserts</Nav.Link>
          </button>
          <button className="btn btn-primary" type="button" style={CategoryStyle}>
            <Nav.Link as={Link} to = "/Edit004" style={{color: "white"}}>tea</Nav.Link>
          </button>
        </nav>
      </div>

      <div className="row row-cols-1 row-cols-md-4 g-3" style={{ marginTop: '40px', marginLeft: '10px' , maxWidth: '60vw'}}>
        <div className="col">
          {
              beverage.map(function(n, i) {
                  return (
                      <Card beverage={beverage[i]} i={i} key={i} />
                  )
              })
          }
        </div>
        <Card className="card h-100" style={CardStyle}>
          <div className="col-md-4">
            <img src={'images/그린 티.jpg'} width="100%" />
            <h3> 제목 </h3>
            <p> 가격</p>
            <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
          </div>
        </Card>

        <div style={{ width: '30vh' , height: '80vh' , marginTop: '70px' ,marginLeft: '55vw', position: 'absolute'}}>
          <MenuControl />
        </div>
      </div>
    </div>
  );
}


export default EditMenu;
