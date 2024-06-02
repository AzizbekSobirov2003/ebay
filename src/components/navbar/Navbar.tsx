import "./Navbar.scss"

import ebay from "../../assets/images/ebay.png"
import { Link } from 'react-router-dom';
import { FaRegBell } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
// import { FaRegHeart } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
// import { IoSearchOutline } from "react-icons/io5";
// <IoSearchOutline />

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <div className='navbar_first'>
          <div className='navbar_first_left'>
            <p>Hi! <Link to={"/registration"}>Sign in</Link> or <Link to={"/registration"}>register</Link></p>
            <p>Daily Deals</p>
            <p>Help & Contact</p>
          </div>
          <div className='navbar_first_right'>
            <p>Sell</p>
            <Link to={`/likePage`} ><h1>Watchlist</h1></Link>
            <select>
              <option value="/">My eBay</option>
              <option value="Summary">Summary</option>
              <option value="Recently Viewed">Recently Viewed</option>
              <option value="Bids/Offers">Bids/Offers</option>
              <option value="Watchlist">Watchlist</option>
              <option value="Purchase History">Purchase History</option>
              <option value="Buy Again">Buy Again</option>
              <option value="Selling">Selling</option>
              <option value="Saved Searches">Saved Searches</option>
              <option value="Saved Sellers">Saved Sellers</option>
              <option value="Messages">Messages</option>
            </select>
            <p className='navbar_icon'><FaRegBell /></p>
            <Link to={"/cartPage"}><p className='navbar_icon'><BsCart3 /></p></Link>
            {/* <Link to={"/likePage"}><p className='navbar_icon'><FaRegHeart /></p></Link> */}
          </div>
        </div>
        <div className='navbar_main'>
          <Link to={`/`}><img src={ebay} /></Link>
          <button className='btn_shopBy'>Shop by cotegory <span><FaChevronDown /></span></button>
          <div className='navbar_search'>
            {/* <input type="search" placeholder='Search for anything' /> */}
            {/* <select>
              <option value="/">All Categories</option>
            </select>
            <button className='btn_search'>Search</button> */}
          </div>
          <p>Advanced</p>
        </div>
      </div>
    </>
  )
}

export default Navbar 