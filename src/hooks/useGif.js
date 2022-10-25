
import React, { useState, useEffect } from 'react'
import { getGif } from '../helpers/getGif'

export const useGif = (categoria) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages =async ()=>{
        const newImage = await getGif(categoria)
          setImages(newImage)
          setIsLoading(false)
    }
 

    useEffect(()=>{
        getImages()
    },[])




  return {
    images,
    isLoading,
  }
}
