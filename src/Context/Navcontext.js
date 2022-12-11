import React, { useState } from 'react'
import { createContext } from 'react'
import { useRef } from 'react';
export const Navcontext=createContext()

export const Navcontextprovider = ({children}) => {
  const [color,setcolor]=useState(false)
  const [theme,settheme]=useState(false)
  const homeref=useRef(null)
  const aboutref=useRef(null)
  const skillref=useRef(null)
  const projectref=useRef(null)
  const contactref=useRef(null)
// console.log(color)

const gotoabout=()=>{
  window.scrollTo({top:aboutref.current.offsetTop, behavior:'smooth'})
}
const gotohome=()=>{
  window.scrollTo({top:homeref.current.offsetTop, behavior:'smooth'})
}
const gotoskill=()=>{
  window.scrollTo({top:skillref.current.offsetTop, behavior:'smooth'})
}
const gotoproject=()=>{
  window.scrollTo({top:projectref.current.offsetTop, behavior:'smooth'})
}
const gotocontact=()=>{
  window.scrollTo({top:contactref.current.offsetTop, behavior:'smooth'})
}

  const allvalue={color,setcolor,theme,settheme,aboutref,gotoabout,homeref,gotohome,skillref,projectref,gotoproject,gotoskill,gotocontact,contactref}
  return (
    <Navcontext.Provider value={allvalue}>
        {children}
    </Navcontext.Provider>
  )
}

