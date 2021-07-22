import React from 'react'

export default function Editpizza({match}) {
    return (
        <div>
            <h1>Edit pizza </h1>
            <h1>Pizza id=  {match.parms.pizzaid}</h1>
        </div>
    )
}
