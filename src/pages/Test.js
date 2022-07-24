import React from 'react'
import { useState, useEffect } from "react"

const Test = () => {
    const [valeur, setvaleur] = useState(true)

    useEffect(() => {
        console.log("logged ")

    }, [valeur]
    )

  return (
    <div>
      { }


      <button onClick={ ()=>{
        setvaleur(!valeur)
      }
    }>switch </button> 
     <h1>{valeur == true ? "hello raed": "ahayt"}</h1>
    </div>
  )
}

export default Test


