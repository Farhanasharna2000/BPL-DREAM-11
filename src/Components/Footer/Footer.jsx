import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer bg-black text-base-content p-10">
        <nav>
          <h6 className=" text-white">About Us</h6>
          <p className="text-gray-500 w-2/3">We are a passionate team dedicated to providing the best services to our customers.</p>
        </nav>
        <nav >
          <h6 className="text-white">Quick Links</h6>
          <ul className="list-disc ml-5 text-gray-600">
            <li><a className="link link-hover">Home</a></li>
            <li><a className="link link-hover">Services</a></li>
            <li><a className="link link-hover">About</a></li>
            <li><a className="link link-hover">Contact</a></li>
          </ul>
        </nav>
        <form className='border-b-gray-700'>
    <h6 className="text-white">Subscribe</h6>
    <fieldset className="form-control w-80">
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
  <p></p>
      </footer>
    );
};

export default Footer;