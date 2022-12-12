import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import './Login.scss'

const Login = () => {
  const { login } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()
    login({ id: 1, name: 'John Doe', profilePic: 'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600'})
  }

  return (
    <div className='login'>
      <div className='card'>
        <div className='register-section'>
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <span>Don't you have an account?</span>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </div>
        <div className='login-section'>
          <h1>Login</h1>
          <form>
            <input type="text" placeholder='Username' />
            <input type="password" name="" placeholder='Password' id="" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login