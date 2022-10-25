import React, { useState } from 'react';

const AddCategorie = ({ onNewCategory}) => {


    const [value, setValue] = useState("");

    const asd = (event) => {
       
        setValue(event.target.value)
        
    }
   
    const enviar =(event)=>{
        event.preventDefault()
        console.log(value)
        if(value.length <=1) return
        onNewCategory(value)
        setValue("")
    }

    return (
        <form onSubmit={enviar}>
            <input
                type="text"
                placeholder='escriba su busqueda aqui'
                onChange={asd}
                value={value}
            />
        </form>
    );
}

export default AddCategorie;
