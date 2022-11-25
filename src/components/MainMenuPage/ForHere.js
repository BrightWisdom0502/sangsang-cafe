import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { MdStore } from 'react-icons/md'

const buttonStyle = {
  width: "400px",
  height: "400px",
  backgroundColor: "white",
  border: "none",
  fontSize: "10rem",
  color: "inherit",
  textDecoration: "none"
}

const ForHere = () => {
  return (
    <div>
      <Link to="/menu-choice">
        <Button variant="outline-primary" style={buttonStyle}>
          {<MdStore />}
          <h3>매장</h3>
        </Button>
      </Link>
    </div>
  );
}

export default ForHere;