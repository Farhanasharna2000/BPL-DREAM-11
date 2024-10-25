import './AllSelected.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import PropTypes from 'prop-types';

const AllSelected = ({ selectedPlayers,handleDelete, handleIsActive }) => {
    return (
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-8">
          Selected Players ( {selectedPlayers.length} / 6 )
        </h1>
        <div className="space-y-4 mb-6">
          {selectedPlayers.map((player, idx) => (
            <div key={idx} className="flex items-center p-4 border rounded-lg  space-x-4">
              <div className="w-16 h-16">
                <img
                  src={player.image}
                  alt={`${player.name}'s avatar`}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold">{player.name}</h2>
                <p className="text-gray-500 text-sm">BattingStyle : {player.battingStyle}</p>
                <p className="text-gray-500 text-sm">Role : {player.role}</p>
                <p className="text-gray-500 text-sm">BiddingPrice : $ {player.biddingPrice}</p>


              </div>
              <button onClick={()=>handleDelete(player.playerId)} className="text-red-400 "><RiDeleteBin6Line /></button>
            </div>
          ))}
        </div>
        <button onClick={()=>handleIsActive("available")} className="btn bg-[#E7FE29] m-2 more">Add More Player</button>
      </div>
    );
  };
  AllSelected.propTypes = {
    
    handleDelete: PropTypes.func.isRequired,
    selectedPlayers: PropTypes.object.isRequired,

}
  export default AllSelected;
  