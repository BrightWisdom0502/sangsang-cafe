import { useLocation, Link, NavLink } from "react-router-dom";
import { useState, useSelector } from "react";

import Card from 'react-bootstrap/Card';

import tea from './tea';


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

function Edit004(props) {

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
              <h3> {props.tea['title']} </h3>
              <p> {props.tea['content']} & {props.tea['price']}</p>
            </div>
            <a href="#" className="btn btn-outline stretched-link" style={ButtonStyle}>편집</a>
          </Card>

        </div>
    </div>
    




      
    
  )
}

export default Edit004;
