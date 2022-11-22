import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Box } from '@chakra-ui/react';
import { useContext } from 'react';
import { Navcontext } from './Context/Navcontext';

function App() {
  const {setcolor}=useContext(Navcontext)
  return (
    <div className="App" >
      <Box >
         <Navbar />
      </Box> 
    </div>
  );
}

export default App;
