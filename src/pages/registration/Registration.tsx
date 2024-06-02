
import { useState, useEffect } from 'react';
import { loadFromLocalStorage } from '../../db/utils';
import { saveToLocalStorage } from '../../db/utils';
import { Link } from 'react-router-dom';
import imageLogo from "../../assets/images/ebay.png"

import "./Registration.scss"

const Registration = () => {

  // const [isOpened, setIsOpened] = useState(false)
  const [userDatatoken, setUserDatatoken] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSignUp = () => {
    const user = loadFromLocalStorage('user') || [];
    if (user) {
      saveToLocalStorage('user', { username, password, userDatatoken })
    } else {
      alert('User already exists')
    }
  }
  useEffect(() => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
        expiresInMins: 90,
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to login');
        }
      })
      .then(data => {
        setUserDatatoken(data.token);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);


  return (
    <>
      <form>
        <div className='registration_logo'>
          <img src={imageLogo} style={{ width: "177px" }} />
          <p>Already a member? <Link to={"/login"}><span>Sign in</span></Link></p>
        </div>
        <div className='registration_main'>
          <h1>Create an account</h1>
          <div className='registration_inputs'>
            <input type="email" placeholder='Email' onChange={(e)=> setUsername(e.target.value)} />
            <input type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)} />
          </div>
            <p>By Creating an account, you agree to our <a href=""> User Agreementa </a> and acknowledge reading our <a href="">User Privacy Noticea</a> .</p>
          <div className='registration_btn'><Link to={"/login"}><button onClick={handleSignUp}>Create account</button></Link></div>
        </div>
        <div className='registration_end'>
          <p>Copyright © 1995-2023 eBay Inc. All Rights Reserved.</p>
          <p>Accessibility</p>
          <p>User Agreement</p>
          <p>Privacy</p>
          <p>Payments Terms of Use</p>
          <p>Cookies</p>
          <p>Your Privacy Choices</p>
          <p>and AdChoice </p>
        </div>
      </form>
    </>
  )
}

export default Registration