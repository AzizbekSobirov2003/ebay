
import "./Footer.scss"

import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className='footer_items'>
        <div className='footer'>
          <div className='footer_first'>
            <ul>
              <li><b>Buy</b></li>
              <li>Registration</li>
              <li>eBay Money Back Guarantee</li>
              <li>Bidding & buying help</li>
              <li>Stores</li>
            </ul>
          </div>
          <div className='footer_second'>
            <div className='footer_second_A'>
              <ul>
                <li><b>Sell</b></li>
                <li>Start selling</li>
                <li>Learn to sell</li>
                <li>Affiliates</li>
              </ul>
            </div>
            <br />
            <br />
            <div className='footer_second_B'>
              <ul>
                <li><b>Tools & apps</b></li>
                <li>Developers</li>
                <li>Security center</li>
                <li>Site map</li>
              </ul>
            </div>
          </div>
          <div className='footer_third'>
            <ul>
              <li><b>Stay connected</b></li>
              <li>eBay's Blogs</li>
              <li><span><RiFacebookBoxFill /></span> Facebook</li>
              <li><span><FaTwitterSquare /></span> Twitter</li>
            </ul>
          </div>
          <div className='footer_fourth'>
            <ul>
              <li><b>About eBay</b></li>
              <li>Company info</li>
              <li>News</li>
              <li>Investors</li>
              <li>Careers</li>
              <li>Government relations</li>
              <li>Advertise with us</li>
              <li>Policies</li>
              <li>Verified Rights Owner (VeRO) Program</li>
            </ul>
          </div>
          <div className='footer_fiveth'>
            <div className='footer_fiveth_A'>
              <ul>
                <li><b>Help & Contact</b></li>
                <li>Seller Information Center</li>
                <li>Contact us</li>
              </ul>
            </div>
            <br />
            <br />
            <div className='footer_fiveth_B'>
              <ul>
                <li><b>Community</b></li>
                <li>Announcements</li>
                <li>Discussion boards</li>
                <li>eBay Giving Works</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer