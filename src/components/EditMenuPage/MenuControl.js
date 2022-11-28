import { useEffect, useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Coffee from "../../data/coffee.json";
import Drink from "../../data/beverage.json";
import Desserts from "../../data/desserts.json";
import Tea from "../../data/tea.json";
import useFetch from "../../hooks/useFetch";

const componentStyle = {
  display: "flex",
  flexDirection: "column",
  width: "50%",
  padding: "30px"
}

const titleStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "50px",
  fontWeight: "bold",
  height: "30%"
}

const formStyle = {
  display: "flex",
  flexDirection: "column"
}

const textInputStyle = {
  marginBottom: "30px"
}

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center"
}

const buttonStyle = {
  width: "40%",
  marginLeft: "10px"
}

const MenuControl = ({ currentMenu, category, parentForceUpdate }) => {
  const Coffee = useFetch("http://localhost:3001/Coffee")
  const Drink = useFetch("http://localhost:3001/Drink")
  const Dessert = useFetch("http://localhost:3001/Dessert")
  const Tea = useFetch("http://localhost:3001/Tea")

  const [menuName, setMenuName] = useState("");
  const [menuPrice, setMenuPrice] = useState("");

  const onChangeMenuName = (e) => {
    setMenuName(e.target.value);
  }

  const onChangeMenuPrice = (e) => {
    setMenuPrice(e.target.value);
  }

  const resetInputInfo = () => {
    setMenuName("");
    setMenuPrice("");
  }

  const changeMenuInfo = () => {
    
    
    if (category === "커피") {
      
      Coffee.map(item =>{if (item.title === currentMenu.title) {
        
        fetch(`http://localhost:3001/Coffee/${item.id}`, {
          method: "PUT",
          headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify({
          ...item,
          title: menuName,
          price: parseInt(menuPrice)
      }),
    
        }).then(res=>{
          if (res.ok) {
            alert("수정이 완료되었습니다.")
          }
        })}})
      
      
        

         
        
    } else if (category === "차") {
      Tea.map(item =>{if (item.title === currentMenu.title) {
        
        fetch(`http://localhost:3001/Tea/${item.id}`, {
          method: "PUT",
          headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify({
          ...item,
          title: menuName,
          price: parseInt(menuPrice)
      }),
    
        }).then(res=>{
          if (res.ok) {
            alert("수정이 완료되었습니다.")
          }
        })}})
      
    } else if (category === "음료") {
      Drink.map(item =>{if (item.title === currentMenu.title) {
        
        fetch(`http://localhost:3001/Drink/${item.id}`, {
          method: "PUT",
          headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify({
          ...item,
          title: menuName,
          price: parseInt(menuPrice)
      }),
    
        }).then(res=>{
          if (res.ok) {
            alert("수정이 완료되었습니다.")
          }
        })}})
      
    } else if (category === "디저트") {
      Dessert.map(item =>{if (item.title === currentMenu.title) {
        
        fetch(`http://localhost:3001/Dessert/${item.id}`, {
          method: "PUT",
          headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify({
          ...item,
          title: menuName,
          price: parseInt(menuPrice)
      }),
    
        }).then(res=>{
          if (res.ok) {
            alert("수정이 완료되었습니다.")
          }
        })}})
      
    }
    resetInputInfo();
    parentForceUpdate();
  }

  return (
    <div style={componentStyle}>
      <h2 style={titleStyle}>메뉴 수정</h2>
      <div style={{marginBottom: "50px"}}>
        <h3>상품명 : {currentMenu.title}</h3>
        <h3>가격 : {(currentMenu.price === -1) ? "" : currentMenu.price.toString()}</h3>
      </div>
      <div style={formStyle}>
        <FloatingLabel
          controlId="floatingInput"
          label="상품명"
          style={textInputStyle}
        >
          <Form.Control onChange={onChangeMenuName} value={menuName} type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="가격"
          style={textInputStyle}
        >
          <Form.Control onChange={onChangeMenuPrice} value={menuPrice} type="email" placeholder="name@example.com" />
        </FloatingLabel>
      </div>
      <div style={buttonContainerStyle}>
        <Button style={buttonStyle} variant="outline-success" onClick={changeMenuInfo}>변경</Button>{' '}
        <Button style={buttonStyle} variant="outline-success" onClick={resetInputInfo}>취소</Button>{' '}
      </div>
    </div>
  );
}

export default MenuControl;