import Player from "../Player/Player";
const AvailablePlayers = ({availablePlayers}) => {
    console.log(availablePlayers);
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto mt-4">
            {
            availablePlayers.map((player,idx)=><Player key={idx} player={player}></Player>)
          } 
        </div>
    );
};

export default AvailablePlayers;