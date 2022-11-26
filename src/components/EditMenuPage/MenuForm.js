import React, { useState } from 'react'

import beverage from './beverage';
import coffee from './coffee';
import desserts from './desserts';
import tea from './tea';

const MenuForm = ({init}) => {

        let [menuName, setMenuName] = useState([ {beverage} ]);
        let [menuPrice, setMenuPrice] = useState([ {beverage} ]);

        const ChangeMenuName = () => {
          var newMenuName = [...menuName];
          newMenuName(newMenuName);
          setMenuName([beverage]);
        }

        const ChangeMenuPrice = () => {
          var newMenuPrice = [...menuPrice];
          newMenuPrice[0] = ' ';
          setMenuPrice([beverage]);
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
                <input 
                    type="text"  
                    id="menuName" 
                    value={values.menuName}
                    onChange={ handleChange }
                    />
            </div>

            <div className="input-group">
                <label for="FormPrice" className="form-label">가격
                <input 
                  type="number" 
                  id="menuPrice" 
                  value={values.menuPrice}
                  onChange={ handleChange }
                  />
                </label>
                
              </div>
        
              

              <div className="col-12">
                <button type="submit" className="btn btn-primary" style={ButtonStyle}>수정</button>
              </div>
            

            </>

        );

}

export default MenuForm;
