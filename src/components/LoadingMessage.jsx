import React from 'react'


export const LoadingMessage = (isLoading) => {

  return (
    <>
       {isLoading == true ? (<h3>CARGANDO....</h3>) : null}
       {console.log("cargando")}
        
    </>
  )
}
