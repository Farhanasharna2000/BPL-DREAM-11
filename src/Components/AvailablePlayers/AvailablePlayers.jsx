import PropTypes from 'prop-types';
import Player from "../Player/Player";
const AvailablePlayers = ({availablePlayers,handleSelectedPlayer}) => {
    
    return (
    <div className='container mx-auto'>
                <h1 className="text-3xl font-semibold">Available Players</h1>  

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-4">
            {
            availablePlayers.map((player,idx)=><Player key={idx} player={player} handleSelectedPlayer={handleSelectedPlayer} ></Player>)
          } 
        </div>
    </div>
    );
};

AvailablePlayers.propTypes = {
    
    availablePlayers: PropTypes.array.isRequired,
    handleSelectedPlayer: PropTypes.array.isRequired,

}
export default AvailablePlayers;