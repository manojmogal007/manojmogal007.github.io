import React, { useState } from 'react'
import { useContext } from 'react'
import { Navcontext } from '../Context/Navcontext'
import resume from '../Resume/Manoj_Mogal_resume.pdf'
import { FaRegLightbulb,FaLightbulb } from "react-icons/fa";
import {MdOutlineDarkMode,MdOutlineLightMode } from "react-icons/md";
// import { Navcontext } from '../Context/Navcontext'
// import './Nav.css'

const Nav = () => {
    const [fix,setfix]=useState(false)
    const {theme,settheme,gotoabout,gotohome,gotoskill,gotoproject,gotocontact}=useContext(Navcontext)
    

    const setsticky=()=>{
        if(window.scrollY>=30){
            setfix(true)
        }else{
            setfix(false)
        }
    }
    window.addEventListener('scroll',setsticky)

   
  return (
    <nav className={fix?"_navbar":"navbar"} id="nav-menu">
<div className="logo">Manoj Mogal</div>
<ul className="nav-links">
<input type="checkbox" id="checkbox_toggle" />
<label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
<div className={fix?"_menu":"menu"}>
<li id="home" onClick={gotohome}><button >Home</button></li>
<li  id="about" class="about section" onClick={gotoabout}><button >About</button></li>
<li  id="skills" onClick={gotoskill} ><button >Skills</button></li>
<li id="projects" onClick={gotoproject}><button >Project</button></li>
<li id="contact" onClick={gotocontact}><button >Contact</button></li>
<a href={resume} download='Manoj_Mogal_resume'><li ><button onClick={()=>window.open('https://drive.google.com/file/d/1lc9TtM077mUGi0uSnV7u60tNXNxYhqM9/view?usp=share_link','_blank')} >Resume</button></li></a>
<li><button onClick={()=>settheme(!theme)}>{theme? <MdOutlineLightMode className='light'/>:<MdOutlineDarkMode className='dark' />}</button></li>
</div>
</ul>
</nav>
  )
}

export default Nav