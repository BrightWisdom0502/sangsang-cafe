import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { TbCup } from 'react-icons/tb'

const buttonStyle = {
  width: "400px",
  height: "400px",
  backgroundColor: "white",
  border: "none",
  fontSize: "10rem",
  color: "inherit",
  textDecoration: "none"
}

const Takeout = () => {
  return (
    <div>
      <Link to ="/menu-choice">
        <Button variant="outline-primary" style={buttonStyle}>
          {<TbCup />}
          <h3>포장</h3>
        </Button>
      </Link>
    </div>
  );
}

export default Takeout;