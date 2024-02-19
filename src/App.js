import logo from './logo.svg';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Herosection from './Components/Herosection';
import Aipowereded from './Components/Aipowereded';
import Uniquesection from './Components/Uniquesection';
import Whatsection from './Components/Whatsection';
import Nexaisection from './Components/Nexaisection';
import Blockchainslider from './Components/Blockchainslider';
import { useEffect } from 'react';
import Backtotop from './Components/Backtotop';
import Loadersection from './Components/Loadersection';
function App() {
  useEffect(() => {
    AOS.init(
      {once: true,
      duration:2500,}
    );
  }, [])
  return (
   <div className='  bg-[#040606]'>
    <Loadersection/>
    <Backtotop/>
    <Herosection/>
    <Uniquesection/>
    <Blockchainslider/>
    <Whatsection/>
    <Nexaisection/>
   </div>
  );
}

export default App;
