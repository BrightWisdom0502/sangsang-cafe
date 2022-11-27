import { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const componentStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
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

const MenuControl = () => {
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

  return (
    <div style={componentStyle}>
      <h2 style={titleStyle}>메뉴 수정</h2>
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
        <Button style={buttonStyle} variant="outline-success">변경</Button>{' '}
        <Button style={buttonStyle} variant="outline-success" onClick={resetInputInfo}>취소</Button>{' '}
      </div>
    </div>
  );
}

export default MenuControl;