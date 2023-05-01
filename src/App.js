
import './App.css';
import { useContext, useEffect, useState } from 'react';
import { Navcontext } from './Context/Navcontext';
import { Typewriter } from 'react-simple-typewriter'
import 'aos/dist/aos.css'
import Aos from 'aos';
import jefit from './picture/jefit.png'
import cronometer from './picture/cronometer.png'
import kfc from './picture/kfc.png'
import awake from './picture/awake.png'
import meesho from './picture/meesho.png'
import profile from './picture/profile1.jpg'
import resume from './Resume/Manoj_Mogal_resume.pdf'
import {SiJavascript,SiHtml5,SiReact,SiNextdotjs,SiReplit,SiTypescript,SiExpress,SiChakraui,SiMongodb,SiNetlify,SiVisualstudio} from 'react-icons/si'
import {FaNodeJs,FaLinkedin} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {MdOutlineEmail,MdCopyright} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import Email from './Components/Email';
import Calender from './Components/Calender';
import { ImNpm } from "react-icons/im";
import first from './picture/first.webp'
import second from './picture/second.jpg'
import { FaRegLightbulb,FaLightbulb } from "react-icons/fa";
import {MdOutlineDarkMode,MdOutlineLightMode } from "react-icons/md";
import './Nav.css'
function App() {
const [background,setbackground]=useState(second)
// let a=2;
//   const recursion=()=>{
//     setInterval(()=>{
      
//       if(a===2){
//         setbackground(second)
//         a=1
//     



  
  const {theme,aboutref,homeref,skillref,projectref,contactref,settheme,gotoabout,gotohome,gotoskill,gotoproject,gotocontact}=useContext(Navcontext)
  const [fix,setfix]=useState(false)

const html={
  hcommit:'https://github-readme-stats.vercel.app/api?username=manojmogal007&theme=html&hide_border=false&include_all_commits=true&count_private=true',
  hcont:"https://github-readme-streak-stats.herokuapp.com/?user=manojmogal007&theme=html&hide_border=false",
  hlang:"https://github-readme-stats.vercel.app/api/top-langs/?username=manojmogal007&theme=html&hide_border=false&include_all_commits=true&count_private=false&layout=compact"
}
const react={
  rcommit:'https://github-readme-stats.vercel.app/api?username=manojmogal007&theme=react&hide_border=false&include_all_commits=true&count_private=true',
  rcont:"https://github-readme-streak-stats.herokuapp.com/?user=manojmogal007&theme=react&hide_border=false",
  rlang:"https://github-readme-stats.vercel.app/api/top-langs/?username=manojmogal007&theme=react&hide_border=false&include_all_commits=true&count_private=false&layout=compact"
}

useEffect(()=>{
  Aos.init({duration:1000})
  // recursion()
},[])

const setsticky=()=>{
  if(window.scrollY>=30){
      setfix(true)
  }else{
      setfix(false)
  }
}
window.addEventListener('scroll',setsticky)

  return (
    <div className="App" >
      <div id="nav-menu" >
      <nav className={fix?"_navbar":"navbar"} >
        <div className="logo">Manoj Mogal</div>
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
          <div className={fix?"_menu":"menu"}>
            <li><button onClick={gotohome}>Home</button></li>
            <li><button onClick={gotoabout} >About</button></li>
            <li><button onClick={gotoskill} >Skills</button></li>
            <li><button onClick={gotoproject} >Project</button></li>
            <li><button onClick={gotocontact} >Contact</button></li>
            <a href={resume} download='Manoj_Mogal_resume'><li ><button  class="nav-link resume" onClick={()=>window.open('https://drive.google.com/file/d/1lc9TtM077mUGi0uSnV7u60tNXNxYhqM9/view?usp=share_link','_blank')} >Resume</button></li></a>
            <li><button onClick={()=>settheme(!theme)}>{theme? <MdOutlineLightMode className='light'/>:<MdOutlineDarkMode className='dark' />}</button></li>
          </div>
        </ul>
      </nav>
      </div> 
     
      <div className='home'  id="home" ref={homeref} style={{backgroundImage:`url(${background})`}} >
          <div className='developer'>
               <div className='sub_dev'>
                  <h3 >Hi,</h3>
                  <h3 >I'm Manoj Mogal</h3>
                  <h1>Full Stack Web Developer</h1>
                  <a id="resume-link-1"  href={resume} download='Manoj_Mogal_resume'>
                    <button onClick={()=>window.open('https://drive.google.com/file/d/1lc9TtM077mUGi0uSnV7u60tNXNxYhqM9/view?usp=share_link','_blank')} className='resume_btn'  id="resume-button-1" >Resume</button>
                  </a>
               </div>
          </div>
      </div>
      
      <div ref={aboutref} className={theme?'_about_me':'about section'} id="about">
        <h1>About me</h1>
     <div className='home_next'    >
          <div className='profile_pic' >
            <img className="home-img" src={profile} alt='profile'/>
          </div>
          <div className='description'>
                <div className='typewriter'>
                 {/* <p>I'm Manoj Mogal I'm a </p><br/> */}
                 <p className='type' id='user-detail-name'>I'm Manoj Mogal I'm a <span><Typewriter
                      words={['Coder', 'MERN developer', 'Self believer','Problem Solver']}
                      loop={false}
                      cursor
                      cursorStyle='_'
                      typeSpeed={100}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                  </p>
                  </div>
                  <div className='summary'>
                    <p id='user-detail-intro'>MERN stack web developer able to build web application from the ground up-from concept, layout and programming to UI and SEO. Skilled in front end technologies such as HTML, CSS, Javascript, React.JS and backend technologies such as Node.JS, Express.JS, MongoDB. I'm looking for a challenging opportunity that will enable me to use my skills and my abilities to achieve a challenging goal.</p>
                  </div>
          </div>
     </div>
     </div>
     {/* <div className='crousel_background'>
      <div  className='crousel' >
            <Component/> 
      </div>
      </div> */}
      {/* ----------------------------------------------------------------- */}
      <div ref={skillref} className={theme?'_skills':'skills'}  id="skills">
        <h1>Technical Skills</h1>
        <div className={theme?'_techstack':'techstack'}>
        <div data-aos="zoom-in-up">
          <div className={theme?'_icon_div':'icon_div'}>
              <SiJavascript className={theme?'_js':'skills-card-img'} id={theme?'':'js'} />
              <h4 class="skills-card-name">Javascript</h4>
          </div>
          </div>
          <div data-aos="zoom-in-up">
          <div className={theme?'_icon_div':'icon_div'}>
              <SiHtml5 className={theme?'_html':'skills-card-img'} id={theme?'':'html'} />
              <h4 class="skills-card-name">HTML</h4>
          </div>
          </div>
          <div data-aos="zoom-in-up">
          <div className={theme?'_icon_div':'icon_div'}>
              <DiCss3 className={theme?'_css':'skills-card-img'} id={theme?'':'css'} />
              <h4 class="skills-card-name">CSS</h4>
          </div>
          </div>
          <div data-aos="zoom-in-up">
          <div className={theme?'_icon_div':'icon_div'}>
              <SiReact className={theme?'_react':'skills-card-img'} id={theme?'':'react'}/>
              <h4 class="skills-card-name">ReactJS</h4>
          </div>
          </div>
          <div data-aos="zoom-in-up">
          <div className={theme?'_icon_div':'icon_div'}>
              <SiNextdotjs className={theme?'_next':'skills-card-img'} id={theme?'':'next'} />
              <h4 class="skills-card-name">NextJS</h4>
          </div>
          </div>
          <div data-aos="zoom-in-up">
          <div className={theme?'_icon_div':'icon_div'}>
              <SiTypescript className={theme?'_typescript':'skills-card-img'} id={theme?'':'typescript'}/>
              <h4 class="skills-card-name">Typescript</h4>
          </div>
          </div>
          <div data-aos="zoom-in-up">
          <div className={theme?'_icon_div':'icon_div'}>
              <FaNodeJs className={theme?'_node':'skills-card-img'} id={theme?'':'node'} />
              <h4 class="skills-card-name">NodeJS</h4>
          </div>
          </div>
          <div data-aos="zoom-in-up">
          <div className={theme?'_icon_div':'icon_div'}>
              <SiExpress className={theme?'_express':'skills-card-img'} id={theme?'':'express'} />
              <h4 class="skills-card-name">ExpressJS</h4>
          </div>
          </div>
          <div data-aos="zoom-in-up">
          <div className={theme?'_icon_div':'icon_div'}>
              <SiMongodb className={theme?'_mongo' :'skills-card-img' } id={theme?'':'mongo'}/>
              <h4 class="skills-card-name">MongoDB</h4>
          </div>
          </div>
         
          
          
        </div>
      </div>
      <div className={theme?'_tools':'tools'}>
      <h1>Tools</h1>
        <div className={theme?'_cartdiv':'cartdiv'}>
              <div data-aos="zoom-in-up">
                <div className={theme?'_icon_div':'icon_div'}>
                    <AiFillGithub className={theme?'_github':'github'} />
                    <h4>Github</h4>
                </div>
              </div>
              <div data-aos="zoom-in-up">
                <div className={theme?'_icon_div':'icon_div'}>
                    <SiVisualstudio className={theme?'_vscode':'vscode'} />
                    <h4>VS code</h4>
                </div>
              </div>
              <div data-aos="zoom-in-up">
                <div className={theme?'_icon_div':'icon_div'}>
                    <SiReplit className={theme?'_replit':'replit'} />
                    <h4>Replit</h4>
                </div>
              </div>
              <div data-aos="zoom-in-up">
                <div className={theme?'_icon_div':'icon_div'}>
                    <ImNpm className={theme?'_npm':'npm'} />
                    <h4>NPM</h4>
                </div>
              </div>
              <div data-aos="zoom-in-up">
                <div className={theme?'_icon_div':'icon_div'}>
                    <SiNetlify className={theme?'_netlify':'netlify'} />
                    <h4>Netlify</h4>
                </div>
              </div>
              <div data-aos="zoom-in-up">
                <div className={theme?'_icon_div':'icon_div'}>
                    <SiChakraui className={theme?'_chakra':'chakra'} />
                    <h4>Chakra-UI</h4>
                </div>
              </div>
        </div>

      </div>
        {/* -------------------------------------------------------------------------- */}
        <div className={theme?'_calendar':'calendar'}>
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
        <div className={theme?'_calendar':'calendar'}>
          <h1>My Coding Journey</h1>
          <Calender/>
      </div>
      </div>
      </div>
      <div className={theme?'_stats':'stats'}>
        <div className='state1'>
            <img id="github-top-langs" src={theme?react.rcommit:html.hcommit}/>
            <img id="github-streak-stats" src={theme?react.rcont:html.hcont}/>
        </div>
        <div className='state2'>
            <img id="github-stats-card" src={theme?react.rlang:html.hlang}/>
        </div>
      </div>
      {/* ------------------------------------------------------------------------ */}
      <div ref={projectref} className={theme?'_project':'project'}  id="projects" >
        <h1>My projects</h1>
        <div className={theme?'_sub_pro':'sub_pro'}>
           {/* -------------------------------------------------------- */}
        <div  data-aos="zoom-in-up" >
          <div className={theme?'_pro_1':'project-card'}>
          <img src={meesho} alt='meesho'/>
          <div className={theme?'_project_details':'project_details'}>
             <h4 className="project-title">Meesho.com</h4>
             <p className="project-description">Meesho is the best place to find fashionable and affordable western wear for women. With a constantly updating inventory of casual, formal, and partywear dresses, etc.</p>
             <p className="project-tech-stack">Tech stack : JS | HTML | React | Chackra-UI | Node js | Express js | MongoDB</p>  
             <div className={theme?'_btn':'btn'}>
              <button  className="project-github-link"><a href='https://github.com/crusher8010/damaged-muscle-4612' target='_blank'>Github</a></button>
              <button className="project-deployed-link"><a href='https://magenta-eclair-cf1ece.netlify.app/' target='_blank'>Go live</a></button>
              </div>   
          </div>
        </div>
        </div>
          {/* ------------------------------------------------------------------------ */}
          <div  data-aos="zoom-in-up">
          <div className={theme?'_pro_1':'project-card'}>
          <img src={awake} alt='awake'/>
          <div className='project_details'>
             <h4 className="project-title">Lifestylestore.com</h4>
             <p className="project-description">A lifestyle store is a retail store selling a wide variety of product categories under a single brand. It is designed to associate a brand with one or another aspirational lifestyle.</p>
             <p className="project-tech-stack">Tech stack : JS | HTML | React | Chackra-UI | Node js | Express js | MongoDB</p>  
             <div className={theme?'_btn':'btn'}>
              <button  className="project-github-link"><a href='https://github.com/Sagar1079/awake_fashion_project' target='_blank'>Github</a></button>
              <button className="project-deployed-link"><a href='https://awake-fashion.netlify.app/' target='_blank'>Go live</a></button>
              </div>  
          </div>
        </div>
        </div>
         {/* -------------------------------------------------------- */}
         <div  data-aos="zoom-in-up">
          <div className={theme?'_pro_1':'project-card'}>
          <img src={cronometer} alt='cronometer'/>
          <div className={theme?'_project_details':'project_details'}>
             <h4 className="project-title">Cronometer.com</h4>
             <p className="project-description">Cronometer encourages you to not just count your calories but to focus on your nutrition as a whole. Develop healthy habits Count your calories.</p>
             <p className="project-tech-stack">Tech stack : JS | HTML | CSS</p>  
             <div className={theme?'_btn':'btn'}>
              <button  className="project-github-link"><a href='https://github.com/mazidul36i/Cronometer_clone' target='_blank'>Github</a></button>
              <button className="project-deployed-link"><a href='https://cronometerclone.netlify.app/' target='_blank'>Go live</a></button>
              </div>   
          </div>
        </div>
        </div>
        {/* --------------------------------------------------------- */}
          {/* ----------------------------------------------------------------- */}
        <div  data-aos="zoom-in-up">
          <div className={theme?'_pro_1':'project-card'}>
          <img src={jefit} alt='jefit'/>
          <div className={theme?'_project_details':'project_details'}>
             <h4 className="project-title">Jefit.com</h4>
             <p className="project-description">Jefit is the ultimate fitness, bodybuilding and workout application for all individuals looking for that extra step and motivation to get back into the gym</p>
             <p className="project-tech-stack">Tech stack : JS | HTML | React | Chackra-UI</p>  
             <div className={theme?'_btn':'btn'}>
              <button  className="project-github-link"><a href='https://github.com/manojmogal007/Jefit_clone' target='_blank'>Github</a></button>
              <button className="project-deployed-link"><a href='https://preeminent-piroshki-a94ec2.netlify.app/' target='_blank'>Go live</a></button>
              </div>  
          </div>
        </div>
        </div>
       
        {/* --------------------------------------------------------- */}
        <div  data-aos="zoom-in-up">
          <div className={theme?'_pro_1':'project-card'}>
          <img src={kfc} alt='kfc'/>
          <div className='project_details'>
             <h4 className="project-title">KFC.com</h4>
             <p className="project-description">KFC is an American fast food restaurant chain that specializes in fried chicken.It is the world's second-largest restaurant chain after McDonald's.</p>
             <p className="project-tech-stack">Tech stack : JS | HTML | React | Chackra-UI</p>  
             <div className={theme?'_btn':'btn'}>
              <button  className="project-github-link"><a href='https://github.com/manojmogal007/KFC_clone' target='_blank'>Github</a></button>
              <button className="project-deployed-link"><a href='https://my-app-gilt-beta.vercel.app/' target='_blank'>Go live</a></button>
              </div>  
          </div>
        </div>
        </div>
        {/* --------------------------------------------------------- */}
        {/* --------------------------------------------------------- */}
        
        </div>
      </div>
      {/* <Box className='box' id='box' h={600} border='1px solid red'>
        <SiJavascript style={{color:'#fada5e',height:'100px',width:'100px'}}/>
        <a href='mailto:manojpatil7076@gmail.com'><button>Go too gmail</button></a>
        <a href='tel:+917219547076'><button>Call</button></a>
      </Box> */}
      {/* <div className='stats'>
      <img src='https://github-readme-stats.vercel.app/api?username=manojmogal007'></img>
      </div> */}
      
      <div className={theme?'_contact':'contact'} ref={contactref}  id="contact">
          <h1>Contact Me</h1>
        <div className={theme?'_subcontact':'subcontact'}>
        <div data-aos="fade-right">
          <div className={theme?'_details':'details'}>
                {/* <textarea/> */}
                <h3>Get in Touch</h3>
                <div className={theme?'_touch_div':'touch_div'}>
                  <div className='touch' id="contact-email">
                      <a href='mailto:manojpatil7076@gmail.com' target='_blank'><MdOutlineEmail className='temail'/></a>
                      <a href='mailto:manojpatil7076@gmail.com' target='_blank'><p>manojpatil7076@gmail.com</p></a>
                  </div>
                  <div className='touch' id="contact-linkedin">
                  <a href='https://www.linkedin.com/in/manoj-mogal-8830341b2/' target='_blank'><FaLinkedin className='tlinkedin'/></a>
                  <a href='https://www.linkedin.com/in/manoj-mogal-8830341b2/' target='_blank'><p>Manoj Mogal</p></a>
                  </div>
                  <div className='touch' id="contact-github">
                  <a href='https://github.com/manojmogal007' target='_blank'><AiFillGithub className='tgithub'/></a>
                  <a href='https://github.com/manojmogal007' target='_blank'><p>manojmogal007</p></a>
                  </div>
                  <div className='touch' id="contact-phone">
                  <a href='tel:+917219547076' target='_blank'><BsFillTelephoneFill className='tphone'/></a>
                  <a href='tel:+917219547076' target='_blank'><p>7219547076</p></a>
                  </div>
                  {/* <div>
                  <a id="resume-link-1"  href={resume} download='Manoj_Mogal_resume'>
                    <button onClick={()=>window.open('https://drive.google.com/file/d/1lc9TtM077mUGi0uSnV7u60tNXNxYhqM9/view?usp=share_link','_blank')} className='resume_btn'  id="resume-button-1" >Resume</button>
                  </a>
                  </div> */}
                </div>
          </div>
          </div>
          <div data-aos="fade-left">
          <div className={theme?'_inputs':'inputs'}>
                {/* <EmailDrawer/> */}
               <Email/>
          </div>
          </div>
        </div>
      </div>
      <div className={theme?"_made":"made"}>
        <h4>Made by Manoj 😎</h4>
      </div>
    </div>
  );
}

export default App;
