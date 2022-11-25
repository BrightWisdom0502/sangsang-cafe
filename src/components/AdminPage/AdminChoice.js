import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { FaTools } from 'react-icons/fa';
import { BiArrowBack } from "react-icons/bi";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  height: "100vh",
  backgroundColor: "#a4d3a0"
}

const forAdminButtonsContainerStyle = {
  marginBottom: "100px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}

const titleStyle = {
  textAlign: "center",
  fontSize: "70px",
  fontWeight: "bold"
}

const iconStyle = {
  textAlign: "center",
  fontSize: "70px",
  fontWeight: "bold"
}

const buttonStyle = {
  width: "500px",
  marginBottom: "30px",
  backgroundColor: "white",
  color: "black",
  textDecoration: "none",
  border: "none"
}

const backButtonStyle = {
  width: "100px",
  height: "100px",
  marginLeft: "50px",
  textAlign: "center"
}

const backButtonIconStyle = {
  fontSize: "50px"
}

const AdminChoice = () => {
  return (
    <div style={containerStyle}>
      <Button variant="outline-dark" style={backButtonStyle}>
        <Link style={{color: "inherit", textDecoration: "inherit"}} to="/"><BiArrowBack style={backButtonIconStyle} /></Link>
        {/* <BiArrowBack style={{fontSize: "50px"}} /> */}
      </Button>
      <h1 style={titleStyle}>관리자 모드</h1>
      <h2 style={iconStyle}>{<FaTools />}</h2>
      <div style={forAdminButtonsContainerStyle}>
        <Link to = "/view-order-list">
          <Button variant="outline-primary" style={buttonStyle}>
            <h2>주문 내역</h2>
          </Button>
        </Link>
        <Link to="/edit-menu">
          <Button variant="outline-primary" style={buttonStyle}>
            <h2>메뉴 수정</h2>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default AdminChoice;