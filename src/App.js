
import './App.css';
import { Box } from '@chakra-ui/react';
import { useContext } from 'react';
import { Navcontext } from './Context/Navcontext';
import Nav from './Components/Nav';
import Typewriter from 'typewriter-effect'

function App() {

  const DownloadButton = props => {
    const downloadFile = () => {
      window.location.href = "https://drive.google.com/file/d/1lc9TtM077mUGi0uSnV7u60tNXNxYhqM9/view?usp=share_link"
    }
    return (
              <button onClick={downloadFile} />
    )
  }
  
  const {setcolor}=useContext(Navcontext)
  return (
    <div className="App" >
      <div >
        <Nav/>
      </div> 
     
      <div className='home'>
          <div className='developer'>
               <div className='sub_dev'>
                  <h3 >Hello, I'm a</h3>
                  <h1>Full Stack Web Developer</h1>
                  <a href='https://media.geeksforgeeks.org/gfg-gg-logo.svg' download='resume' target='_blank'>
                    <button className='resume_btn' onClick={DownloadButton}>Resume</button>
                  </a>
               </div>
          </div>
      </div>
     <div className='home_next' >
          <div className='profile_pic'>
            <img src="https://avatars.githubusercontent.com/u/107462443?s=400&u=e2bb424d127a35eb01350e262e24730476d5f46b&v=4" alt='profile'/>
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
      <Box h={600} border='1px solid red'>
        
      </Box>
      <Box h={600} border='1px solid red' >
      </Box>
      <Box className='box' id='box' h={600} border='1px solid red'></Box>
    </div>
  );
}

export default App;
