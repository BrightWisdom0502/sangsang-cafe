import React, { useState } from 'react'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const AdminMenuStyle = {
    position : "absolute",
    marginTop : "10px",
    marginLeft : "65%",
    width : "30vw",
    height : "80vh"
  };
  
  const ButtonStyle = {
    backgroundColor: "#587558",
    borderColor: "#587558"
  }
  

const MenuForm = () => {
    
        const [values, setValues] = useState({
            menuName1: "",
            menuPrice1: "",
            menuText1: "",
        })

        const handleChange = e => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            })
        }

        const handleSubmit = e => {
            e.preventDefault()
            alert(JSON.stringify(values,null,2))
        }



    return (
        <div id="EditMenu" >
            <div className="card text-left" style={AdminMenuStyle}>
                <div className="card-body">
                    <h5 className="card-title">상품 편집</h5>
                    <p className="card-text">상품 편집 페이지입니다.</p>

                    <form onSubmit={ handleSubmit }>

                        <div className="md-input-group">
                            <label for="FormName" className="form-label">상품명</label>
                            <input 
                            type="text"
                            name="menuName1"
                            value={ values.menuName1 }
                            onChange={ handleChange }
                            />
                        </div>

                        <div className="input-group">
                            <label for="FormPrice" className="form-label">가격
                                <input 
                                type="number"
                                name="menuPrice1"
                                value={ values.menuPrice1 }
                                onChange={ handleChange }
                                />
                            </label>
                        </div>

                        <div className="col-input-text-group">
                            <label for="FormText" className="form-label">상품설명</label>
                            <input 
                            type="text"
                            name="menuText1"
                            value={ values.menuText1 }
                            onChange={ handleChange } 
                            />
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary" style={ButtonStyle}>변경</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default MenuForm;