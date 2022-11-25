import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

const AdminChoice = () => {
  return (
    <>
    <h1>관리자 모드</h1>
    <div>
      <Link to = "/view-order-list">
        <Button variant="outline-primary">
          <h2>주문 내역</h2>
        </Button>
      </Link>
      <Link to = "/edit-menu">
        <Button variant="outline-primary">
          <h2>메뉴 수정</h2>
        </Button>
      </Link>
    </div>
    </>
  );
}

export default AdminChoice;