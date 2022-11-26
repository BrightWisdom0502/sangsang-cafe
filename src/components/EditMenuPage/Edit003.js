import { useLocation, Link, NavLink } from "react-router-dom";
import { useState, useSelector } from "react";

import Card from 'react-bootstrap/Card';

import desserts from './desserts';
import EditData from './EditData';



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

function Edit003(props) {

  let [menuName, setMenuName] = useState(useSelector((state) => state.menuName));
  let [menuPrice, setMenuPrice] = useState(useSelector((state) => state.menuPrice));

  const updateData = async (e) => {
    e.preventDefault();
    var data = {menuName, menuPrice};
    props.props();
  }

  return (
    <div>
    

    <div className="row row-cols-1 row-cols-md-3 g-3" style={{ marginTop: '40px', marginLeft: '10px' , maxWidth: '60vw'}}>
        <div className="col" >

          <Card className="card h-100" style={CardStyle}>
            <img src={ 'images/' + [props.i +1] +'.jpg' } className="card-img-top" alt="..." /> 
              <div className="card-body">
                <h5 className="card-title" type="text"  id="menuName" value={menuName} onChange={(e) => setMenuName(e.target.value)}>
                  {props.desserts['name']}
                </h5> 
                <p className="card-text" type="number" id="menuPrice" value={menuPrice} onChange={(e) => setMenuPrice(e.target.value)} 원 >
                  {props.desserts['price']} 원
                </p>
              <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
            </div>
          </Card>

          <Card className="card h-100" style={CardStyle}>
            <img src={ 'images/' + [props.i +1] +'.jpg' } className="card-img-top" alt="..." /> 
              <div className="card-body">
                <h5 className="card-title" type="text"  id="menuName" value={menuName} onChange={(e) => setMenuName(e.target.value)}>
                  {props.desserts['name']}
                </h5> 
                <p className="card-text" type="number" id="menuPrice" value={menuPrice} onChange={(e) => setMenuPrice(e.target.value)} 원 >
                  {props.desserts['price']} 원
                </p>
              <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
            </div>
          </Card>

          <Card className="card h-100" style={CardStyle}>
            <img src={ 'images/' + [props.i +1] +'.jpg' } className="card-img-top" alt="..." /> 
              <div className="card-body">
                <h5 className="card-title" type="text"  id="menuName" value={menuName} onChange={(e) => setMenuName(e.target.value)}>
                  {props.desserts['name']}
                </h5> 
                <p className="card-text" type="number" id="menuPrice" value={menuPrice} onChange={(e) => setMenuPrice(e.target.value)} 원 >
                  {props.desserts['price']} 원
                </p>
              <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
            </div>
          </Card>

          <Card className="card h-100" style={CardStyle}>
            <img src={ 'images/' + [props.i +1] +'.jpg' } className="card-img-top" alt="..." /> 
              <div className="card-body">
                <h5 className="card-title" type="text"  id="menuName" value={menuName} onChange={(e) => setMenuName(e.target.value)}>
                  {props.desserts['name']}
                </h5> 
                <p className="card-text" type="number" id="menuPrice" value={menuPrice} onChange={(e) => setMenuPrice(e.target.value)} 원 >
                  {props.desserts['price']} 원
                </p>
              <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
            </div>
          </Card>

          <Card className="card h-100" style={CardStyle}>
            <img src={ 'images/' + [props.i +1] +'.jpg' } className="card-img-top" alt="..." /> 
              <div className="card-body">
                <h5 className="card-title" type="text"  id="menuName" value={menuName} onChange={(e) => setMenuName(e.target.value)}>
                  {props.desserts['name']}
                </h5> 
                <p className="card-text" type="number" id="menuPrice" value={menuPrice} onChange={(e) => setMenuPrice(e.target.value)} 원 >
                  {props.desserts['price']} 원
                </p>
              <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
            </div>
          </Card>

        </div>
    </div>
    </div>
    




      
    
  )
}

export default Edit003;
