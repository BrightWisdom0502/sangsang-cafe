import React, { useState } from 'react'



function MenuForm ({ initalValues, onSubmit }) {

    
        const [values, setValues] = useState(initalValues)

        const handleChange = e => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            })
        }

        const handleSubmit = e => {
            e.preventDefault()
            
            onSubmit(values)
        }



    return {
        values,
        handleChange,
        handleSubmit,
    }
}

export default MenuForm;
