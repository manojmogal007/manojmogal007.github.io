
import './App.css';
import { Box,Image } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { Navcontext } from './Context/Navcontext';
import Nav from './Components/Nav';
import Typewriter from 'typewriter-effect'
import 'aos/dist/aos.css'
import Aos from 'aos';
import jefit from './picture/jefit.png'
import cronometer from './picture/cronometer.png'
import kfc from './picture/kfc.png'
import profile from './picture/profile.jpg'
import Component  from './Components/Crousel';
import resume from './Resume/manoj_resume.pdf'
function App() {

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  
  const {setcolor}=useContext(Navcontext)
  return (
    <div className="App" >
       {/* <Component/> */}
      <div >
        <Nav/>
      </div> 
     
      <div className='home'>
          <div className='developer'>
               <div className='sub_dev'>
                  <h3 >Hello! I'm Manoj Mogal,I'm a</h3>
                  <h1>Full Stack Web Developer</h1>
                  <a href={resume} download='resume'>
                    <button className='resume_btn' >Resume</button>
                  </a>
               </div>
          </div>
      </div>
      
      <div className='about_me'>
        <h1>About me</h1>
     <div className='home_next' >
          <div className='profile_pic' >
            <img src={profile} alt='profile'/>
          </div>
          <div className='description'>
                <div className='typewriter'>
                 <p>I'm Manoj Mogal I'm a </p><br/>
                 <p className='type'><Typewriter 
                  options={{
                    strings: ['Problem Solver', 'Full Stack Web Developer'],
                    autoStart: true,
                    loop: true,
                    delay:80,
                    deleteSpeed:40,
                    pauseFor:1500,
                  }}
                  />
                  </p>
                </div>
          </div>
     </div>
     </div>
      <div  className='crousel' >
            <Component/> 
      </div>
      <div  className='project' >
        <h1>My projects</h1>
        <div className='sub_pro'>
        <div  data-aos="zoom-in-up">
          <div className='pro_1'>
          <img src={jefit} alt='jefit'/>
          <div className='project_details'>
             <h4>Jefit.com</h4>
             <p>Jefit is the ultimate fitness, bodybuilding and workout application for all individuals looking for that extra step and motivation to get back into the gym</p>
             <p>Tech stack : JS | HTML | React | Chackra-UI</p>  
             <div className='btn'>
              <button><a href='https://github.com/manojmogal007/fallacious-company-8720'>Github</a></button>
              <button><a href='https://preeminent-piroshki-a94ec2.netlify.app/'>Go live</a></button>
              </div>  
          </div>
        </div>
        </div>
        {/* -------------------------------------------------------- */}
        <div  data-aos="zoom-in-up">
          <div className='pro_1'>
          <img src={cronometer} alt='jefit'/>
          <div className='project_details'>
             <h4>Cronometer.com</h4>
             <p>Cronometer encourages you to not just count your calories but to focus on your nutrition as a whole. Develop healthy habits Count your calories.</p>
             <p>Tech stack : JS | HTML | CSS</p>  
             <div className='btn'>
              <button><a href='https://github.com/mazidul36i/Cronometer_clone'>Github</a></button>
              <button><a href='https://cronometerclone.netlify.app/'>Go live</a></button>
              </div>   
          </div>
        </div>
        </div>
        {/* --------------------------------------------------------- */}
        <div  data-aos="zoom-in-up">
          <div className='pro_1'>
          <img src={kfc} alt='jefit'/>
          <div className='project_details'>
             <h4>KFC.com</h4>
             <p>Ordering world famous fried chicken has never been easier.Access exclusive deals with the new KFC app.One-Click Reordering All your favorites right at your fingertips</p>
             <p>Tech stack : JS | HTML | React | Chackra-UI</p>  
             <div className='btn'>
              <button><a href='https://github.com/manojmogal007/dusty-record-6347'>Github</a></button>
              <button><a href='https://my-app-gilt-beta.vercel.app/'>Go live</a></button>
              </div>  
          </div>
        </div>
        </div>
        {/* --------------------------------------------------------- */}
        </div>
      </div>
      <Box className='box' id='box' h={600} border='1px solid red'></Box>
    </div>
  );
}

export default App;
