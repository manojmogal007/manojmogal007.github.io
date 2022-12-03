import React, { useState } from 'react'
import resume from '../Resume/manoj_resume.pdf'
// import { Navcontext } from '../Context/Navcontext'
import './Nav.css'
const Nav = () => {
    const [fix,setfix]=useState(false)

    const setsticky=()=>{
        if(window.scrollY>=30){
            setfix(true)
        }else{
            setfix(false)
        }
    }
    window.addEventListener('scroll',setsticky)
  return (
    <nav className={fix?"_navbar":"navbar"}>
<div className="logo">Manoj Mogal</div>
<ul className="nav-links">
<input type="checkbox" id="checkbox_toggle" />
<label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
<div className={fix?"_menu":"menu"}>
<li onClick={()=>console.log("Home clicked")}><button >Home</button></li>
<li onClick={()=>console.log("About")}><button >About</button></li>
<li  ><button >Skills</button></li>
<li onClick={()=>console.log("skills")}><button >Project</button></li>
<li onClick={()=>console.log("contact")}><button >Contact</button></li>
<a href={resume} download='resume'><li ><button >Resume</button></li></a>
</div>
</ul>
</nav>
  )
}

export default Nav