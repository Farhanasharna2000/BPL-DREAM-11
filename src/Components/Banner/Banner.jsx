import banner  from "../../assets/banner-main.png";
import './Banner.css'

const Banner = () => {
    return (
        <div style={
            {backgroundImage:'url(/src/assets/bg-shadow.png)'}} className="flex flex-col items-center space-y-4 bg-cover bg-no-repeat bg-black p-10 container mx-auto rounded-xl mt-2 mb-2 ">
            <img className="w-44" src={banner} alt="" />
            <h1 className="md:text-3xl text-lg text-center text-white font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="text-gray-400">Beyond Boundaries Beyond Limits</p>
            <button className="btn bg-[#E7FE29] m-2 banner">Claim Free Credit</button>

        </div>
    );
};

export default Banner;