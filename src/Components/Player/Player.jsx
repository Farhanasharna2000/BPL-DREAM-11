import PropTypes from 'prop-types';
import { FaUser } from "react-icons/fa";
import { IoFlagSharp } from "react-icons/io5";
const Player = ({player,handleSelectedPlayer}) => {
    // console.log(handleSelectedPlayer);
    
    const{playerId,name,country,image,role,battingStyle,bowlingStyle,biddingPrice}=player
    return (
        <div >
           <div className="card bg-base-100 w-full  border">
  <figure className="px-10 pt-10">
    <img 
      src={image}
      alt="Player image"
      className="rounded-xl w-full  h-[250px]" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl"><FaUser />{name}</h2>
    <div className="flex justify-between items-center border-b-2 pb-5">
            <p className="card-title text-lg text-gray-500 font-medium"><IoFlagSharp />{country}</p>
        <button className="btn ">{role}</button>
    </div>
    <h2 className="card-title text-lg font-semibold mt-2 ">Rating</h2>
    <div className="flex justify-between items-center">
    <p className=" text-sm  font-medium">{battingStyle}</p>
    <p className=" text-sm text-gray-500 font-medium text-end">{bowlingStyle}</p>
    </div>
    <div className="flex justify-between items-center">
            <p className="card-title  text-lg  font-medium ">Price: ${biddingPrice}</p>
        <button onClick={()=>handleSelectedPlayer(player)} className="btn  bg-transparent shadow-sm hover:bg-[#E7FE29]">Choose Player</button>
    </div>
  </div>
</div>   
        </div>
    );
};

Player.propTypes = {
    
    player: PropTypes.object.isRequired,
}
export default Player;