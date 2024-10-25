import './App.css';
import Banner from './Components/Banner/Banner';
import Category from './Components/Category/Category';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { useEffect, useState } from "react";
import Toggle from './Components/Toggle/Toggle';
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers';
import AllSelected from './Components/AllSelected/AllSelected';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [freeCredit, setFreeCredit] = useState(0);

  const handleFreeCredit = () => {
    setFreeCredit(freeCredit + 100000);
    toast.success("100000 coins added to your balance!");
  };

  const [isActive, setIsActive] = useState({
    available: true,
    status: 'available'
  });

  const handleIsActive = (status) => {
    if (status === "available") {
      setIsActive({
        available: true,
        status: 'available'
      });
    } else {
      setIsActive({
        available: false,
        status: 'select'
      });
    }
  };

  const [availablePlayers, setAvailablePlayers] = useState([]);
  useEffect(() => {
    fetch('players.json')
      .then((res) => res.json())
      .then((data) => setAvailablePlayers(data));
  }, []);

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleSelectedPlayer = (player) => {
    const isAlreadySelected = selectedPlayers.find(
      (selectedPlayer) => selectedPlayer.playerId === player.playerId
    );

    if (isAlreadySelected) {
      toast.info("Player already selected");
      return;
    }

    if (freeCredit >= player.biddingPrice) {
      const newPlayers = [...selectedPlayers, player];
      setSelectedPlayers(newPlayers);
      setFreeCredit(freeCredit - player.biddingPrice);
      toast.success(`${player.name} added to selected players!`);
    } else {
      toast.error("You don't have enough coins to select this player.");
    }
  };

  const handleDelete = (playerId) => {
    const remaining = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerId !== playerId
    );
    setSelectedPlayers(remaining);
    toast.warn("Player removed from selection.");
  };

  return (
    <>
      <Navbar freeCredit={freeCredit} />
      <Banner handleFreeCredit={handleFreeCredit} />
      <div className='flex justify-between container mx-auto pt-16'>
        <Category />
        <Toggle
          isActive={isActive}
          handleIsActive={handleIsActive}
          selectedPlayers={selectedPlayers}
        />
      </div>
      <div>
        {isActive.available ? (
          <AvailablePlayers
            handleSelectedPlayer={handleSelectedPlayer}
            availablePlayers={availablePlayers}
          />
        ) : (
          <AllSelected selectedPlayers={selectedPlayers} handleDelete={handleDelete} />
        )}
      </div>
      <Footer />
      <ToastContainer position="top-center"/>
    </>
  );
}

export default App;
