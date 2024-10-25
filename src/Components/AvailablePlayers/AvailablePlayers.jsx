import PropTypes from 'prop-types';
import Player from "../Player/Player";
const AvailablePlayers = ({availablePlayers,handleSelectedPlayer}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto mt-4">
            {
            availablePlayers.map((player,idx)=><Player key={idx} player={player} handleSelectedPlayer={handleSelectedPlayer} ></Player>)
          } 
        </div>
    );
};

AvailablePlayers.propTypes = {
    
    availablePlayers: PropTypes.array.isRequired,
    handleSelectedPlayer: PropTypes.array.isRequired,

}
export default AvailablePlayers;