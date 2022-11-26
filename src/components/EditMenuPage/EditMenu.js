import { NavLink, Link, Route, useNavigate } from "react-router-dom";
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

const ModalStyle = {
  marginTop: '40px', 
  marginLeft: '10px' , 
  maxWidth: '60vw' , 
  maxHeight: '100vh',
  backgroundColor: "#eee",
}
const EditMenu = (props) => {
  
  return (
    <div id="EditMenu" style={ComponentStyle}>
      <div className="d-grid gap-2 d-md-block position-absolute">
        <nav>
        <button className="btn btn-primary" type="button" style={CategoryStyle}>
          <Nav.Link as={Link} to = {Edit001} style={{color: "white"}}>beverage</Nav.Link>
        </button>
        <button className="btn btn-primary" type="button" style={CategoryStyle}>
          <Nav.Link as={Link} to = {Edit002} style={{color: "white"}}>coffee</Nav.Link>
        </button>
        <button className="btn btn-primary" type="button" style={CategoryStyle}>
          <Nav.Link as={Link} to = {Edit003} style={{color: "white"}}>desserts</Nav.Link>
        </button>
        <button className="btn btn-primary" type="button" style={CategoryStyle}>
          <Nav.Link as={Link} to = {Edit004} style={{color: "white"}}>tea</Nav.Link>
        </button>
        </nav>
      </div>


      <div className="row row-cols-1 row-cols-md-4 g-3" 
        style={{  marginTop: '10px', marginLeft: '10px' , minWidth: '60vw' , maxWidth: '60vw' , minHeight: '80vh', maxHeight: '80vh'}}>
  
        <Edit003 />

      </div>

          
      
  

        
      


      <div style={{ width: '30vh' , height: '80vh' , marginTop: '70px' ,marginLeft: '55vw', position: 'absolute'}}>
        <MenuControl />
      </div>
        

    
        <> 
      <MenuCategory />
      <Menus />
        </>
    
    
    </div>


  );
}

function Modal(){
  return (
    <div className="modal" style={ ModalStyle }>
      <h2>내용</h2>
    </div>
  )
}

function MenuCard() {
  return (
    <div className="col">
      <div className="card h-100" style={ CardStyle }>
        <img src={'images/그린 티.jpg'} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title"> 제목 </h5>
            <p className="card-text"> 가격</p>
            <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
        </div>
      </div>
    </div>
  )
}



function Edit001(props) {
  return(
    <div className="row row-cols-1 row-cols-md-4 g-3" 
    style={{ marginTop: '40px', marginLeft: '10px' , minWidth: '60vw' , maxWidth: '60vw' , minHeight: '80vh', maxHeight: '80vh'}}>

    <div className="col">
      <div className="card h-100" style={ CardStyle }>
        <img src={'images/녹차 라떼.jpg'} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title"> 녹차 라떼 </h5>
            <p className="card-text"> 5500원</p>
            <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
        </div>
      </div>
    </div>

    <div className="col">
    <div className="card h-100" style={ CardStyle }>
      <img src={'images/핫 초콜릿.jpg'} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"> 핫 초콜릿 </h5>
          <p className="card-text"> 5000원</p>
          <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
      </div>
    </div>
    </div>

    <div className="col">
    <div className="card h-100" style={ CardStyle }>
      <img src={'images/아이스 초콜릿.jpg'} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"> 아이스 초콜릿 </h5>
          <p className="card-text"> 5300원</p>
          <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
      </div>
    </div>
    </div>
  </div>
  )
}


function Edit002(props) {
  return(
    <div className="row row-cols-1 row-cols-md-4 g-3" 
    style={{ marginTop: '40px', marginLeft: '10px' , minWidth: '60vw' , maxWidth: '60vw' , minHeight: '80vh', maxHeight: '80vh'}}>

    <div className="col">
      <div className="card h-100" style={ CardStyle }>
        <img src={'images/아메리카노.jpg'} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title"> 아메리카노 </h5>
            <p className="card-text"> 4000원</p>
            <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
        </div>
      </div>
    </div>

    <div className="col">
    <div className="card h-100" style={ CardStyle }>
      <img src={'images/바닐라 라떼.jpg'} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"> 카페 라떼 </h5>
          <p className="card-text"> 4500원</p>
          <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
      </div>
    </div>
    </div>

    <div className="col">
    <div className="card h-100" style={ CardStyle }>
      <img src={'images/카푸치노.jpg'} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"> 카푸치노 </h5>
          <p className="card-text"> 4500원</p>
          <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
      </div>
    </div>
    </div>

    <div className="col">
    <div className="card h-100" style={ CardStyle }>
      <img src={'images/아이스 카라멜 마키아또.jpg'} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"> 카라멜 마키아또 </h5>
          <p className="card-text"> 5400원</p>
          <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
      </div>
    </div>
    </div>

    <div className="col">
    <div className="card h-100" style={ CardStyle }>
      <img src={'images/에스프레소.jpg'} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"> 에스프레소 </h5>
          <p className="card-text"> 4000원</p>
          <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
      </div>
    </div>
    </div>

    <div className="col">
    <div className="card h-100" style={ CardStyle }>
      <img src={'images/아포가토.jpg'} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"> 아포카토 </h5>
          <p className="card-text"> 6000원</p>
          <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
      </div>
    </div>
    </div>

  </div>
  )
}


function Edit003(props) {
  return(
    <div className="row row-cols-1 row-cols-md-4 g-3" 
    style={{ marginTop: '40px', marginLeft: '10px' , minWidth: '60vw' , maxWidth: '60vw' , minHeight: '80vh', maxHeight: '80vh'}}>

    <div className="col">
      <div className="card h-100" style={ CardStyle }>
        <img src={'images/베이글.jpg'} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title"> 베이글 </h5>
            <p className="card-text"> 3000원</p>
            <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
        </div>
      </div>
    </div>

    <div className="col">
    <div className="card h-100" style={ CardStyle }>
      <img src={'images/스콘.jpg'} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"> 스콘 </h5>
          <p className="card-text"> 3500원</p>
          <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
      </div>
    </div>
    </div>

    <div className="col">
    <div className="card h-100" style={ CardStyle }>
      <img src={'images/크루아상.jpg'} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"> 크루아상 </h5>
          <p className="card-text"> 4000원</p>
          <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
      </div>
    </div>
    </div>

    <div className="col">
    <div className="card h-100" style={ CardStyle }>
      <img src={'images/초콜릿 칩 쿠키.jpg'} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"> 초콜릿 칩 쿠키 </h5>
          <p className="card-text"> 2800원</p>
          <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
      </div>
    </div>
    </div>

    <div className="col">
    <div className="card h-100" style={ CardStyle }>
      <img src={'images/초콜릿 케이크.jpg'} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"> 초콜릿 케이크 </h5>
          <p className="card-text"> 6000원</p>
          <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
      </div>
    </div>
    </div>

    <div className="col">
    <div className="card h-100" style={ CardStyle }>
      <img src={'images/치즈 케이크.jpg'} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"> 치즈 케이크 </h5>
          <p className="card-text"> 5500원</p>
          <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
      </div>
    </div>
    </div>

  </div>
  )
}


function Edit004(props) {
  return(
    <div className="row row-cols-1 row-cols-md-4 g-3" 
    style={{ marginTop: '40px', marginLeft: '10px' , minWidth: '60vw' , maxWidth: '60vw' , minHeight: '80vh', maxHeight: '80vh'}}>

    <div className="col">
      <div className="card h-100" style={ CardStyle }>
        <img src={'images/그린 티.jpg'} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title"> 그린 티 </h5>
            <p className="card-text"> 5000원</p>
            <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
        </div>
      </div>
    </div>

    <div className="col">
    <div className="card h-100" style={ CardStyle }>
      <img src={'images/민트 티.jpg'} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"> 민트 티 </h5>
          <p className="card-text"> 4500원</p>
          <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
      </div>
    </div>
    </div>

    <div className="col">
    <div className="card h-100" style={ CardStyle }>
      <img src={'images/밀크 티.jpg'} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"> 밀크 티 </h5>
          <p className="card-text"> 5500원</p>
          <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
      </div>
    </div>
    </div>

    <div className="col">
    <div className="card h-100" style={ CardStyle }>
      <img src={'images/얼 그레이 티.jpg'} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"> 얼그레이 티 </h5>
          <p className="card-text"> 4500원</p>
          <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
      </div>
    </div>
    </div>

    <div className="col">
    <div className="card h-100" style={ CardStyle }>
      <img src={'images/캐모마일 티.jpg'} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"> 캐모마일 티 </h5>
          <p className="card-text"> 4500원</p>
          <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
      </div>
    </div>
    </div>

  </div>
  )
}

export default EditMenu;
