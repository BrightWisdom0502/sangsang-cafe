import MenuCategory from "../MenuPage/MenuCategory";
import SearchBar from "../MenuPage/SearchBar";
import Menus from "../MenuPage/Menus";
import MenuControl from "./MenuControl.js";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ComponentStyle = {
  display: "flex",
  flexDirection: "row",
  height: "100vh",
  padding: "30px",
  backgroundColor: "#A4D3A0"
};

const ListStyle = {
  height: "100px",
  textAlign: "left"
}

const CardStyle = {
  width: "230px",
  height: "350px",
  overflow: "hidden",
}

const ButtonStyle = {
  width: "170px",
  height: "40px",
  marginLeft: "15px",
  backgroundColor: "#587558",
  borderColor: "#587558"
}


const EditMenu = () => {
  return (
    <div id="EditMenu" style={ComponentStyle}>

    

      <div class="d-grid gap-2 d-md-block position-absolute">
        <button class="btn btn-primary" type="button" style={ButtonStyle}>카테고리</button>
        <button class="btn btn-primary" type="button" style={ButtonStyle}>카테고리</button>
        <button class="btn btn-primary" type="button" style={ButtonStyle}>카테고리</button>
        <button class="btn btn-primary" type="button" style={ButtonStyle}>카테고리</button>
        <button class="btn btn-primary" type="button" style={ButtonStyle}>카테고리</button>
      </div>




      <div class="row row-cols-1 row-cols-md-3 g-3" style={{ marginTop: '40px', marginLeft: '10px' , maxWidth: '60vw'}}>
        <div class="col" style={CardStyle}>
          <div class="card h-100">
            <img src="images/그린 티.jpg" class="card-img-top" alt="..." /> 
            <div class="card-body">
              <h5 class="card-title">메뉴 이름</h5>
              <p class="card-text">메뉴 설명</p>
            </div>
          </div>
        </div>

        <div class="col" style={CardStyle}>
          <div class="card h-100">
            <img src="images/그린 티.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">메뉴 이름</h5>
              <p class="card-text">메뉴 설명</p>
            </div>
          </div>
        </div>

        <div class="col" style={CardStyle}>
          <div class="card h-100">
            <img src="images/그린 티.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">메뉴 이름</h5>
              <p class="card-text">메뉴 설명</p>
            </div>
          </div>
        </div>

        <div class="col" style={CardStyle}>
          <div class="card h-100">
            <img src="images/그린 티.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">메뉴 이름</h5>
              <p class="card-text">메뉴 설명</p>
            </div>
          </div>
        </div>

        <div class="col" style={CardStyle}>
          <div class="card h-100">
            <img src="images/그린 티.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">메뉴 이름</h5>
              <p class="card-text">메뉴 설명</p>
            </div>
          </div>
        </div>

        <div class="col" style={CardStyle}>
          <div class="card h-100">
            <img src="images/그린 티.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">메뉴 이름</h5>
              <p class="card-text">메뉴 설명</p>
            </div>
          </div>
        </div>

        <div class="col" style={CardStyle}>
          <div class="card h-100">
            <img src="images/그린 티.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">메뉴 이름</h5>
              <p class="card-text">메뉴 설명</p>
            </div>
          </div>
        </div>

        <div class="col" style={CardStyle}>
          <div class="card h-100">
            <img src="images/그린 티.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">메뉴 이름</h5>
              <p class="card-text">메뉴 설명</p>
            </div>
          </div>
        </div>

      </div>



      <div style={{ width: '30rem' , height: '40rem' , marginTop: '150px' ,marginLeft: '65%', position: 'absolute'}}>
          <div id="MenuList" class="list-group">

          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">메뉴1</h5>
              <small>설명</small>
            </div>
            <p class="mb-1">메뉴설명</p>
            <small>가격</small>
          </a>

          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">메뉴2</h5>
              <small>설명</small>
            </div>
            <p class="mb-1">메뉴설명</p>
            <small>가격</small>
          </a>

          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">메뉴3</h5>
              <small>설명</small>
            </div>
            <p class="mb-1">메뉴설명</p>
            <small>가격</small>
          </a>

          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">메뉴4</h5>
              <small>설명</small>
            </div>
            <p class="mb-1">메뉴설명</p>
            <small>가격</small>
          </a>

          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">메뉴5</h5>
              <small>설명</small>
            </div>
            <p class="mb-1">메뉴설명</p>
            <small>가격</small>
          </a>

          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">메뉴6</h5>
              <small>설명</small>
            </div>
            <p class="mb-1">메뉴설명</p>
            <small>가격</small>
          </a>

          <button type="button" class="list-group-item list-group-item-action" style={{  textAlign: 'center' }}>
            다음 페이지
          </button>

          
        </div>   
      </div>
    
      <MenuCategory />
      <SearchBar />
      <Menus />
    </>
    </div>

  );
}


export default EditMenu;
