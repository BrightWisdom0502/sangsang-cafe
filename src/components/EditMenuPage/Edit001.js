import { useLocation, Link, NavLink } from "react-router-dom";


const CardStyle = {
  width: "230px",
  height: "350px",
  overflow: "hidden",
}

const ButtonStyle = {
  textAlign: "center",
  height: "35px",
  borderColor: "#587558" , 
  marginBottom: "20px"

}

const Edit001 = () => {
  return (
      <div class="row row-cols-1 row-cols-md-3 g-3" style={{ marginTop: '40px', marginLeft: '10px' , maxWidth: '60vw'}}>
        <div class="col" style={CardStyle}>
          <div class="card h-100">
            <img src="images/녹차 라떼.jpg" class="card-img-top" alt="..." /> 
            <div class="card-body">
              <h5 class="card-title">녹차 라떼 5500\</h5>
              <p class="card-text">메뉴 설명</p>
              <a href="#" class="btn btn-outline" style={ButtonStyle}>편집</a>
            </div>
          </div>
        </div>

        <div class="col" style={CardStyle}>
          <div class="card h-100">
            <img src="images/핫 초콜릿.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">핫 초콜릿 5000</h5>
              <p class="card-text">메뉴 설명</p>
              <a href="#" class="btn btn-outline" style={ButtonStyle}>편집</a>
            </div>
          </div>
        </div>

        <div class="col" style={CardStyle}>
          <div class="card h-100">
            <img src="images/아이스 초콜릿.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">아이스 초콜릿 5300</h5>
              <p class="card-text">메뉴 설명</p>
              <a href="#" class="btn btn-outline" style={ButtonStyle}>편집</a>
            </div>
          </div>
        </div>
      </div>



      
    
  )
}

export default Edit001;
