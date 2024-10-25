import PropTypes from 'prop-types';
import { TbCoinFilled } from "react-icons/tb";
import logo from "../../assets/logo.png";
const Navbar = ({freeCredit}) => {
    return (
        <div className="container mx-auto flex justify-between items-center sticky top-0 z-10 backdrop-blur-md">
          <div>
            <img className="w-14 h-14" src={logo} alt="" />
          </div>
          <div>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0">
                   <li><a>Home</a></li>
                <li><a>Fixture</a></li>
                <li><a>Teams </a></li>
                <li><a>Schedules </a></li>
              </ul>
            </div>
            
            <div className=" hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-base text-gray-500">
                <li><a>Home</a></li>
                <li><a>Fixture</a></li>
                <li><a>Teams </a></li>
                <li><a>Schedules </a></li>
                <li ><a className="border font-bold" href="">{freeCredit} Coin<TbCoinFilled className="text-yellow-500 text-2xl" /></a></li>
              </ul>
            </div>
          </div>
          
        </div>
  
    );
};

Navbar.propTypes = {
    
  freeCredit: PropTypes.number.isRequired,
}
export default Navbar;