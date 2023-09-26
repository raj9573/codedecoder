import React, { useState } from 'react'
import googlelog from './images/googlelogo.webp'
import fblogo from './images/fblogo.avif'
import './App.css'
const App = () => {
  const [user, setUser] = useState("");

  const handler = e => {
    setUser(e.target.value)
  }
  return (

    <div className="container">
      <section>
      <div className="text-column">
      <center>
        <h1 className="title">copy <span>.</span>ai</h1>
        <h3>Log in <br />Or Create Account</h3>
        <p>Quickly get started by signing in <br/> using your existing accounts.</p>
        </center>
      </div>      
      </section>

      <div className="social-column">
        <p>By proceeding, you are agreeing to Copy.ai's Terms of Service and Privacy Notice</p>

        <a className="social-link" href='https://www.gmail.com'>
          <img src={googlelog} alt='Google Logo' /> Continue with Google
        </a>

        <a className="social-link-fb" href=''>
          <img src={fblogo} alt='Facebook Logo' /> Continue with Facebook
        </a>
        <h5>Or</h5>
        <input type='Email'   placeholder='name@gmail.com' value={user} name='user' className="email-input"
          onChange={handler}
          
        />
         <p>We will email you a magic code for a password-free registration.</p>

        <button className="continue-button">Continue</button>
        
      </div>
  
      
    </div>

  )
}

export default App
