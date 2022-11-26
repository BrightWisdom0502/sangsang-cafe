import { useLocation, Link, NavLink } from "react-router-dom";
import { useState, useSelector } from "react";

import Card from 'react-bootstrap/Card';

import desserts from './desserts';



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
          <Card className="card h-100" style={CardStyle}>
            <div className="col-md-4">
              <img src={'images/' + [props.i + 1] + '.jpg'} width="100%" />
              <h3> {props.desserts['title']} </h3>
              <p> {props.desserts['content']} & {props.desserts['price']}</p>
              <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
            </div>
          </Card>

        </div>
    </div>
    




      
    
  )
}

export default Edit003;