import './Footer.css'
import footer from "../../assets/logo-footer.png";
import image from "../../assets/bg-shadow.png";
const Footer = () => {
    return (

        <footer className=" bg-black pt-36  md:pt-40 pb-6 relative md:mt-60 mt-40">
            <div style={{ 
            backgroundImage: `url(${image})`
            
        }}className='absolute z-1 md:top-[-25%] top-[-10%] md:left-[7.5%] left-[4%] bg-base-100 mx-auto pl-4 pr-4 pt-8 pb-8  md:pl-96 md:pr-96 text-center bg-cover bg-no-repeat bg-center rounded-lg md:pt-20 md:pb-20 cart'>
                <form className='border-b-gray-700 '>
                    <h6 className="md:text-xl font-bold">Subscribe to our Newsletter</h6>
                    <fieldset className="form-control ">
                        <label className="label">
                            <span className="label-text text-gray-600 text-sm">Get the latest updates and news right in your inbox!</span>
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="input input-bordered join-item" />
                            <button className="btn  btn-shadow ">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div className='border-b-2 border-gray-900'>
                <img className=' mx-auto mb-10' src={footer} alt="" />

                <div className=' md:flex justify-between container mx-auto mb-10 pl-4 md:pl-0'>
                    <nav className='mb-4 md:mb-0'>
                        <h6 className=" text-white mb-2">About Us</h6>
                        <p className="text-gray-500 ">We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                    </nav>
                    <nav className='mb-4 md:mb-0'>
                        <h6 className="text-white mb-2">Quick Links</h6>
                        <ul className="list-disc ml-5 text-gray-600">
                            <li><a className="link link-hover">Home</a></li>
                            <li><a className="link link-hover">Services</a></li>
                            <li><a className="link link-hover">About</a></li>
                            <li><a className="link link-hover">Contact</a></li>
                        </ul>
                    </nav>
                    <form className='border-b-gray-700 '>
                        <h6 className="text-white">Subscribe</h6>
                        <fieldset className="form-control   md:w-80">
                            <label className="label">
                                <span className="label-text text-gray-600 ">Subscribe to our newsletter for the latest updates.</span>
                            </label>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="input input-bordered join-item" />
                                <button className="btn  join-item btn-shadow">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <p className='text-center mt-6'>@2024 Your Company All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;