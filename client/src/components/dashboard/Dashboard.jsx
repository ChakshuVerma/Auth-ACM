import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import Navbar from '../common/navbar/Navbar'

const Dashboard = () => {

  const [username, setUsername] = useState();
  const navigate = useNavigate()
  const NavbarContents = ['disableHomeLink',{name: 'Logout', link:'/logout'}];

  useEffect(() => {
    async function callDashboard() {
      try {
        const res = await fetch('/api/dashboard', {
          method: "GET",
          headers: {
              Accept: "application/json",
             "Content-Type": "application/json",
          },
          credentials: "include",
        });

        const data = await res.json();
        
        if(data && res.status === 201){
          setUsername(data.username)
        }
        else{ 
            console.clear()
            navigate('/login');
        } 
      } catch (error) {
        console.log('Dashboard error: '+error);
        navigate('/login');
      }
    }

    callDashboard();
  }, [navigate])

  return (
    <div className='outer-container'>
      <Navbar contents={NavbarContents}/>
      <div className="dashboard-container">
          <div className="text-container">
              <span className='greeting'>Hello, <span className='username'>{username}</span></span>
              <span>Welcome To Dashboard</span>
          </div>
      </div>
    </div>
  )
}

export default Dashboard;
