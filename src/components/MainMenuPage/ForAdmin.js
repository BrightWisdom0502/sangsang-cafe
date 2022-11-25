import Button from 'react-bootstrap/Button';
import {FaTools} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const ForAdmin = () => {
  return (
    <div>
      <Link to = "/admin-choice">
        <Button variant="outline-primary">
          {<FaTools />}
          <h3>관리자</h3>
       </Button>
      </Link>

    </div>
  );
}

export default ForAdmin;