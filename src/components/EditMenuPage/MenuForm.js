import React, { useState } from 'react'

const MenuForm = ({init}) => {

    
        const [values, setValues] = useState({
            menuName: "",
            menuPrice: "",
            menuText: "",
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
        
              <div className="col-input-text-group">
                <label for="FormText" className="form-label">상품설명</label>
                <input 
                  type="text" 
                  id="FormText" 
                  value={values.menuText}
                  onChange={ handleChange }
                  />
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary" style={ButtonStyle}>수정</button>
              </div>
            

            </>

        );

}

export default MenuForm;
