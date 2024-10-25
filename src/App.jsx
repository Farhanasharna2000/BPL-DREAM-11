
import './App.css'
import Banner from './Components/Banner/Banner'
import Category from './Components/Category/Category';
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import { useEffect, useState } from "react";
import Toggle from './Components/Toggle/Toggle';
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers';


function App() {
  const [freeCredit,setFreeCredit]=useState(0)
  const handleFreeCredit=()=>{
      setFreeCredit(freeCredit+100000)}
      const[availablePlayers,setAvailablePlayers]=useState([])
useEffect(()=>{
  fetch('players.json')
  .then(res=>res.json())
  .then(data=>setAvailablePlayers(data))
},[])
  return (
    <>
      <Navbar freeCredit={freeCredit}></Navbar>
      <Banner handleFreeCredit={handleFreeCredit}></Banner>
      <div className='flex justify-between container mx-auto pt-16'>
 <Category></Category>
<Toggle></Toggle>
     </div>
     <AvailablePlayers availablePlayers={availablePlayers}></AvailablePlayers>
     <Footer></Footer>
    </>
  )
}

export default App
