import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const AdminMenuStyle = {
  position : "absolute",
  marginTop : "10px",
  marginLeft : "65%",
  width : "30vw",
  height : "80vh"
};

const ButtonStyle = {
  backgroundColor: "#587558",
  borderColor: "#587558"
}


const MenuControl = () => {
    return (
      <div id="EditMenu" >
        <div class="card text-left" style={AdminMenuStyle}>
         <div class="card-header">
           <ul class="nav nav-tabs card-header-tabs">

              <li class="nav-item">
                <a class="nav-link active" aria-current="true" href="#">상세</a>
             </li>

              <li class="nav-item">
               <a class="nav-link" href="#">상세</a>
              </li>

              <li class="nav-item">
               <a class="nav-link" href="#">상세</a>
              </li>

            </ul>
          </div>

          <div class="card-body">
            <h5 class="card-title">상품 편집</h5>
            <p class="card-text">.</p>

            <form class="row g-3">

              <div class="col-md-5">
                <label for="inputEmail4" class="form-label">상품명</label>
                <input type="text" class="form-control" id="menuName" />
              </div>

              <div class="col-md-5">
                <label for="inputPassword4" class="form-label">가격</label>
                <input type="number" class="form-control" id="menuPrice" />
              </div>

              <div class="col-12">
                <label for="inputAddress" class="form-label">상품설명</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="기본 문구" />
              </div>
      
              

              <div class="col-md-4">
                <label for="inputState" class="form-label">상품 공개 여부</label>
                <select id="inputState" class="form-select">
                  <option selected>공개</option>
                  <option>비공개</option>
                </select>
              </div>
              
              
              <div class="col-12">
                <button type="submit" class="btn btn-primary" style={ButtonStyle}>수정</button>
              </div>
            </form>
          </div>
        </div>


      </div>
    );
  }
  
  export default MenuControl;
