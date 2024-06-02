
import { useState, useEffect } from 'react'
import { loadFromLocalStorage } from '../../db/utils'
import imageLogo from "../../assets/images/ebay.png"
import { Link } from 'react-router-dom'
import "./Login.scss"


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [userDatatoken, setUserDatatoken] = useState(null);
  const user = loadFromLocalStorage('user')
  const handleLogin = () => {
    if (user.username === username && user.password === password) {
      window.location.href = "/"
    } else {
      alert("Wrong username or password")
    }
  }
  useEffect(() => {
    fetch('https://dummyjson.com/auth/refresh', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${user.userDatatoken}`, },
      body: JSON.stringify({
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
      // .then(data => {
      //   setUserDatatoken(data.token);
      // })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
      <form>
        <div className='login_logo'>
          <img src={imageLogo} style={{ width: "177px" }} />
          <p><a href="">Tell us what you think</a></p>
        </div>
        <div className='login_main'>
          <h1>Hello</h1>
          <h2>Sign in to eBay or <Link to={"/registration"} >create an account</Link></h2>
          <div className='login_inputs'>
            <input type="email" placeholder='Email' onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='login_btn'>
            <button onClick={handleLogin}>Continue</button>
          </div>
          <div className='login_main_end'>
            <p>Stay signed in</p>
            <p>Using a public or shared device?</p>
            <p>Uncheck to protect your account.</p>
            <p><a href="">Learn more</a></p>
          </div>
        </div>
        <div className='login_end'>
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

export default Login