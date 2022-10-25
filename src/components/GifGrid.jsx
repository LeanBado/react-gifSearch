import React, { useEffect, useState} from 'react'
import { GIfImage, LoadingMessage } from "../components"
import { useGif } from '../hooks/useGif';


export const GifGrid = ({categoria}) => {

    const {images, isLoading} = useGif(categoria);
 
        console.log(isLoading)
  return (
    <>
    <h1>{categoria}</h1>
    
    {/* {isLoading == true ? (<h3>CARGANDO....</h3>) && console.log("cargando") : null} */}
    {<LoadingMessage isLoading={isLoading}/>}

    <div className='card-grid'>
        {images.map(imagen =>{
            return <GIfImage
                    {...imagen}
                    key={imagen.id}/>
            
        })}
    </div>

    
    </>
  )
}

export default GifGrid