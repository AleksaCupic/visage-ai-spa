import React, { useState } from 'react'

export const MyContext=React.createContext()

const MyProvider=(props)=>{
    const[image, setImage]=useState(null)
    const[canvas, setCanvas]=useState(null)


    return(
        <MyContext.Provider value={{
            name: 'Aleksa',
            setCanvas: setCanvas,
            getCanvas: canvas,
            setImage: setImage,
            getImage: image
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyProvider