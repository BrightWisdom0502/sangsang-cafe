import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { AiFillHome } from "react-icons/ai";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#A4D3A0"
}

const buttonStyle = {
  width: "100px",
  height: "100px",
  marginTop: "30px",
  marginBottom: "10px",
  textAlign: "center"
}

const buttonIconStyle = {
  fontSize: "50px"
}

const textStyle = {
  fontSize: "20px",
  fontWeight: "bold"
}

const NotFound = () => {
  return (
    <div style={containerStyle}>
      <h1>이 페이지는 없는 페이지 입니다!</h1>
      <Button variant="outline-dark" style={buttonStyle}>
        <Link style={{color: "inherit", textDecoration: "inherit"}} to="/"><AiFillHome style={buttonIconStyle} /></Link>
        {/* <AiFillHome style={{fontSize: "50px"}} /> */}
      </Button>
      <p style={textStyle}>홈으로 돌아가기</p>
    </div>
  );
}

export default NotFound;