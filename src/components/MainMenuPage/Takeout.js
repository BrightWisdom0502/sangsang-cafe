import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import {TbCup} from 'react-icons/tb'

const Takeout = () => {
  return (
    <div>
      <Link to ="/menu-choice">
        <Button variant="outline-primary">
          {<TbCup />}
          <h3>포장</h3>
        </Button>
      </Link>
    </div>
  );
}

export default Takeout;