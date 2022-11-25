import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import {MdStore} from 'react-icons/md'


const ForHere = () => {
  return (
    <div>
      <Link to ="/menu-choice">
        <Button variant="outline-primary">
          {<MdStore />}
          <h3>매장</h3>
        </Button>
      </Link>
    </div>
  );
}

export default ForHere;