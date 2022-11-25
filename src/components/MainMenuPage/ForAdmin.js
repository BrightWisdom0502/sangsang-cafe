import Button from 'react-bootstrap/Button';
import { FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const containerStyle = {
  display: "flex",
  justifyContent: "right"
}

const buttonStyle = {
  marginRight: "50px",
  width: "120px",
  height: "120px",
  border: "none",
  fontSize: "2.5rem",
  color: "black",
  backgroundColor: "white"
}

const ForAdmin = () => {
  return (
    <div style={containerStyle}>
      <Link to="/admin-choice" style={{color: "inherit", textDecoration: "inherit"}}>
        <Button variant="outline-primary" style={buttonStyle}>
          {<FaTools />}
          <h3>관리자</h3>
       </Button>
      </Link>
    </div>
  );
}

export default ForAdmin;