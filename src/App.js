import { useContext, useEffect } from 'react';
import './App.scss';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Leftbar from './components/Leftbar/Leftbar';
import Rightbar from './components/Rightbar/Rightbar';
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';

function App() {

  const { currentUser } = useContext(AuthContext)

  console.log(currentUser)

  const { darkMode } = useContext(DarkModeContext)

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Leftbar />
          <div style={{ flex: '6' }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if(!currentUser) return <Navigate to='/login' />

    return children
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/profile/:id',
          element: <Profile />
        },
      ]
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ])

  return (
    <div className={`app ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
