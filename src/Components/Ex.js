import React from 'react'
import { useState } from 'react';
const Ex = () => {
    const [value1, setvalue1] = useState(true)
    return (
        <div>

            <button onClick={() => {
                setvalue1(!value1)
            }} >Switch</button>

          <h1> {value1 === true ? "hello rouja " : "hello bakaa"} </h1>
        </div>
    )
}

export default Ex

