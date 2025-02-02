import PropTypes from 'prop-types';
import banner  from "../../assets/banner-main.png";
import image from "../../assets/bg-shadow.png";
import './Banner.css'

const Banner = ({handleFreeCredit}) => {   
    return (
        <div style={
           { backgroundImage: `url(${image})`}
            
        }
            className="flex flex-col items-center space-y-4 bg-cover bg-no-repeat bg-center bg-black p-10 container mx-auto rounded-xl mt-2 mb-2 ">
            <img className="w-44" src={banner} alt="" />
            <h1 className="md:text-3xl text-lg text-center text-white font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="text-gray-400">Beyond Boundaries Beyond Limits</p>
            <button onClick={()=>handleFreeCredit() }className="btn bg-[#E7FE29] m-2 banner">Claim Free Credit</button>

        </div>
    );
};

Banner.propTypes = {
    
    handleFreeCredit: PropTypes.func.isRequired,
}
export default Banner;