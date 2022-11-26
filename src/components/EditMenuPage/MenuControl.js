import { React, useState, useSelector } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import  MenuForm from './MenuForm';


const AdminMenuStyle = {
  position : "absolute",
  marginTop : "10px",
  marginLeft : "65%",
  width : "30vw",
  height : "80vh"
};

const ButtonStyle = {
  backgroundColor: "#587558",
  borderColor: "#587558"
}



const MenuControl = ({init}) => {
    <>
    <MenuForm init = {init} />
    </>


    return (
      <div id="EditMenu" >
        <div className="card text-left" style={AdminMenuStyle}>

          <div className="card-body">
            <h5 className="card-title">상품 편집</h5>
            <p className="card-text">상품 편집 페이지입니다.</p>

            <form action="" className="EditCard">
              <>
              { MenuForm }
              </>
            </form>
          </div>
        </div>


      </div>
    );
  }
  
  export default MenuControl;
