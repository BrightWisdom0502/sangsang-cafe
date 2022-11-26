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

const Edit003 = () => {
  return (
      <div class="row row-cols-1 row-cols-md-3 g-3" style={{ marginTop: '40px', marginLeft: '10px' , maxWidth: '60vw'}}>
        <div class="col" style={CardStyle}>
          <div class="card h-100">
            <img src="images/베이글.jpg" class="card-img-top" alt="..." /> 
            <div class="card-body">
              <h5 class="card-title">베이글 3000\</h5>
              <p class="card-text">메뉴 설명</p>
              <a href="#" class="btn btn-outline" style={ButtonStyle}>편집</a>
            </div>
          </div>
        </div>

        <div class="col" style={CardStyle}>
          <div class="card h-100">
            <img src="images/스콘.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">스콘 3500</h5>
              <p class="card-text">메뉴 설명</p>
              <a href="#" class="btn btn-outline" style={ButtonStyle}>편집</a>
            </div>
          </div>
        </div>

        <div class="col" style={CardStyle}>
          <div class="card h-100">
            <img src="images/크루아상.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">크루아상 4000</h5>
              <p class="card-text">메뉴 설명</p>
              <a href="#" class="btn btn-outline" style={ButtonStyle}>편집</a>
            </div>
          </div>
        </div>

        <div class="col" style={CardStyle}>
          <div class="card h-100">
            <img src="images/초콜릿 칩 쿠키.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">초콜릿 칩 쿠키 2800</h5>
              <p class="card-text">메뉴 설명</p>
              <a href="#" class="btn btn-outline" style={ButtonStyle}>편집</a>
            </div>
          </div>
        </div>

        <div class="col" style={CardStyle}>
          <div class="card h-100">
            <img src="images/초콜릿 케이크.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">초콜릿 케이크 6000</h5>
              <p class="card-text">메뉴 설명</p>
              <a href="#" class="btn btn-outline" style={ButtonStyle}>편집</a>
            </div>
          </div>
        </div>

        <div class="col" style={CardStyle}>
          <div class="card h-100">
            <img src="images/치즈 케이크.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">치즈 케이크 5500</h5>
              <p class="card-text">메뉴 설명</p>
              <a href="#" class="btn btn-outline" style={ButtonStyle}>편집</a>
            </div>
          </div>
        </div>



      </div>

      
    
  )
}

export default Edit003;
