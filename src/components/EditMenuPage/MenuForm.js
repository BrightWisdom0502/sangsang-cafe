import React, { useState } from 'react'

import beverage from './beverage';
import coffee from './coffee';
import desserts from './desserts';
import tea from './tea';

const MenuForm = ({init}) => {

        const [menuName, setMenuName] = useState("");
        const [savedName, setSavedName] = useState("");
        

        const [menuPrice, setMenuPrice] = useState("");
        const [savedPrice, setSavedPrice] = useState("");
        

        const saveChange = () => {
          setSavedName(menuName);
          setMenuName("");

          setSavedPrice(menuPrice);
          setMenuPrice("");
        }


        const [values, setValues] = useState({
            menuName: "",
            menuPrice: "",
        })

        const handleChange = e => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            })
        }

        const handleSubmit = e => {
            e.preventDefault()
            
        }

        const ButtonStyle = {
            textAlign: "center",
            height: "35px",
            backgroundColor: "#587558",
            borderColor: "#587558" , 
            marginBottom: "20px"
          
          }



        return (
            <>
            <div className="md-input-group">
                <label for="FormPrice" className="form-label">상품명</label>
                <div>
                <input 
                    type="text"  
                    id="menuName" 
                    value={menuName} placeholder={savedName}
                    onChange={e => setMenuName(e.target.value)}
                    />
                </div>
            </div>

            <div className="input-group">
                <label for="FormPrice" className="form-label">가격</label>
                <div>
                <input 
                  type="number" 
                  id="menuPrice" 
                  value={menuPrice} placeholder={savedPrice}
                  onChange={e => setMenuPrice(e.target.value)}
                  />
                </div>
                
              </div>
        
              

              <div className="col-12">
                <button type="submit" className="btn btn-primary" style={ButtonStyle} onClick={saveChange}>수정</button>
              </div>

              <hr />
              <h5>수정된 상품명: {savedName}</h5>
              <h5>수정된 가격: {savedPrice} 원</h5>
            

            </>

        );

}

export default MenuForm;
