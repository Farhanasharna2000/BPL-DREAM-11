import PropTypes from 'prop-types';

const Toggle = ({handleIsActive,isActive,selectedPlayers}) => {
    return (
        
            <div className="flex ">
            <button onClick={()=>handleIsActive("available")} className={`${isActive.available?"btn  bg-[#E7FE29] text-black":"btn text-gray-600 bg-white"}`}>Available</button>
            <button onClick={()=>handleIsActive("select")}className={`${isActive.available?"btn text-gray-600 bg-white":"btn  bg-[#E7FE29] text-black"}`}>Selected ({selectedPlayers.length})</button>
            
        </div>
    );
};
Toggle.propTypes = {
    
    handleIsActive: PropTypes.func.isRequired,
    isActive: PropTypes.func.isRequired,
    selectedPlayers: PropTypes.object.isRequired,

}
export default Toggle;