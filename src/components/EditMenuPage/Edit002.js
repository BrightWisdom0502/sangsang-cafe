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

const Edit002 = () => {
  return (
      <div class="row row-cols-1 row-cols-md-3 g-3" style={{ marginTop: '40px', marginLeft: '10px' , maxWidth: '60vw'}}>
        <div class="col" style={CardStyle}>
          <div class="card h-100">
            <img src="images/아메리카노.jpg" class="card-img-top" alt="..." /> 
            <div class="card-body">
              <h5 class="card-title">아메리카노 4000\</h5>
              <p class="card-text">메뉴 설명</p>
              <a href="#" class="btn btn-outline" style={ButtonStyle}>편집</a>
            </div>
          </div>
        </div>

        <div class="col" style={CardStyle}>
          <div class="card h-100">
            <img src="images/카페 라떼.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">카페 라떼 4500</h5>
              <p class="card-text">메뉴 설명</p>
              <a href="#" class="btn btn-outline" style={ButtonStyle}>편집</a>
            </div>
          </div>
        </div>

        <div class="col" style={CardStyle}>
          <div class="card h-100">
            <img src="images/카푸치노.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">카푸치노 5300</h5>
              <p class="card-text">메뉴 설명</p>
              <a href="#" class="btn btn-outline" style={ButtonStyle}>편집</a>
            </div>
          </div>
        </div>

        <div class="col" style={CardStyle}>
          <div class="card h-100">
            <img src="images카라멜 마키아또.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">카라멜 마키아또 5400</h5>
              <p class="card-text">메뉴 설명</p>
              <a href="#" class="btn btn-outline" style={ButtonStyle}>편집</a>
            </div>
          </div>
        </div>

        <div class="col" style={CardStyle}>
          <div class="card h-100">
            <img src="images/에스프레소.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">에스프레소 4000</h5>
              <p class="card-text">메뉴 설명</p>
              <a href="#" class="btn btn-outline" style={ButtonStyle}>편집</a>
            </div>
          </div>
        </div>

        <div class="col" style={CardStyle}>
          <div class="card h-100">
            <img src="images/아포카토.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">아포카토 6000</h5>
              <p class="card-text">메뉴 설명</p>
              <a href="#" class="btn btn-outline" style={ButtonStyle}>편집</a>
            </div>
          </div>
        </div>



      </div>

      
    
  )
}

export default Edit002;
