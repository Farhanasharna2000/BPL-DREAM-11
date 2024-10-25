import PropTypes from 'prop-types';

const Toggle = ({handleIsActive,isActive,selectedPlayers}) => {
    return (
        
            <div className="flex ">
            <button onClick={()=>handleIsActive("available")} className={`${isActive.available?"btn rounded-r-sm bg-[#E7FE29] text-black":"btn text-gray-600 rounded-r-sm bg-white"}`}>Available</button>
            <button onClick={()=>handleIsActive("select")}className={`${isActive.available?"btn text-gray-600 bg-white rounded-l-sm	":"btn  bg-[#E7FE29] text-black rounded-l-sm"}`}>Selected ({selectedPlayers.length})</button>
            
        </div>
    );
};
Toggle.propTypes = {
    
    handleIsActive: PropTypes.func.isRequired,
    isActive: PropTypes.func.isRequired,
    selectedPlayers: PropTypes.object.isRequired,

}
export default Toggle;