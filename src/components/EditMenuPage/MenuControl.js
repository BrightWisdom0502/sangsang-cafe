import { React, useState, useSelector } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import  MenuForm, { values, handleChange, handleSubmit } from './MenuForm';


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
              <div className="md-input-group">
                  <label for="FormName" className="form-label">상품명</label>
                  <input type="text"  id="menuName" />
              </div>
        
              <div className="input-group">
                <label for="FormPrice" className="form-label">가격
                <input type="number" id="menuPrice" />
                </label>
              </div>
        
              <div className="col-input-text-group">
                <label for="FormText" className="form-label">상품설명</label>
                <input type="text" id="FormText" />
              </div>

              <div className="col-md-4">
                <label for="inputState" className="form-label">상품 공개 여부</label>
                <select id="inputState" className="form-select">
                  <option value="공개" selected>공개</option>
                  <option value="비공개">비공개</option>
                </select>
              </div>
              
              
              <div className="col-12">
                <button type="submit" className="btn btn-primary" style={ButtonStyle}>수정</button>
              </div>
            </form>
          </div>
        </div>


      </div>
    );
  }
  
  export default MenuControl;
