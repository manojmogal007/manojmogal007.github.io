import React, { useState } from 'react'
import { createContext } from 'react'

export const Navcontext=createContext()

export const Navcontextprovider = ({children}) => {
  const [color,setcolor]=useState(false)
// console.log(color)

  const allvalue={color,setcolor}
  return (
    <Navcontext.Provider value={allvalue}>
        {children}
    </Navcontext.Provider>
  )
}

