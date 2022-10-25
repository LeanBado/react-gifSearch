
import React from 'react'




export const GIfImage = ({url, title}) => {

  

  return (
    <div className='card'>
        <img src={url} alt={title}></img>
        <p>{title}</p>
    </div>
  )
}
