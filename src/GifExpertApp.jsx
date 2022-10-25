import React, { useState } from 'react'
import AddCategorie from './components/AddCategorie'
import GifGrid from "./components/GifGrid"


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(
        ["dragon ball"]
    )

        const onAddCategory = (input)=>{
            if(categories.includes(input.toLowerCase())) return
            setCategories([...categories, input.toLowerCase()])
        }
    

  return (
    <>
    <h1>GifExpertApp</h1>

    <AddCategorie onNewCategory={value => onAddCategory(value)}
    ></AddCategorie>

    {categories.map(categoria =>
        (
            <GifGrid 
                     key={categoria}
                     categoria={categoria}
            ></GifGrid>
        ))
    }
        
    
    </>
  )
}
