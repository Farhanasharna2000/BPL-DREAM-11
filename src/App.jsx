import './App.css'
import Banner from './Components/Banner/Banner'
import Category from './Components/Category/Category';
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import { useEffect, useState } from "react";
import Toggle from './Components/Toggle/Toggle';
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers';
import AllSelected from './Components/AllSelected/AllSelected';

function App() {
 
  const [freeCredit,setFreeCredit]=useState(0)
  const handleFreeCredit=()=>{
    const newCoin=freeCredit+100000
      setFreeCredit(newCoin)}

  const [isActive,setIsActive]=useState({
    available:true,
    status:'available'
  })   
const handleIsActive=(status)=>{
  if(status=="available"){
setIsActive({
  available:true,
  status:'available'
})
  }
  else{
    setIsActive({
      available:false,
      status:'select'
    })
  }
  // console.log(isActive);
  
}

 const[availablePlayers,setAvailablePlayers]=useState([])
useEffect(()=>{
  fetch('players.json')
  .then(res=>res.json())
  .then(data=>setAvailablePlayers(data))
},[])

const[selectedPlayers,setSelectedPlayers]=useState([])
const handleSelectedPlayer = (player) => {
  const isAvailable=selectedPlayers.find((selectedPlayer) => selectedPlayer.playerId === player.playerId)
  if (isAvailable) {
    console.log("Player already selected");
  } else {
    const newplayers = [...selectedPlayers, player];
    setSelectedPlayers(newplayers);
    
  }
};

const handleDelete=(playerId)=>{
// console.log(playerId);
const remaining=selectedPlayers.filter((selectedPlayer) => selectedPlayer.playerId !== playerId)
setSelectedPlayers(remaining);

}
  return (
    <>
      <Navbar freeCredit={freeCredit}></Navbar>
      <Banner handleFreeCredit={handleFreeCredit} ></Banner>
      <div className='flex justify-between container mx-auto pt-16'>
 <Category></Category>
<Toggle isActive={isActive} handleIsActive={handleIsActive} selectedPlayers={selectedPlayers}></Toggle>
     </div>
     <div>
      { 
      isActive.available?
      <AvailablePlayers handleSelectedPlayer={handleSelectedPlayer} availablePlayers={availablePlayers} ></AvailablePlayers>:
      <AllSelected selectedPlayers={selectedPlayers} handleDelete={handleDelete}></AllSelected>
    
      }
    </div>
     <Footer></Footer>
    </>
  )
}

export default App
