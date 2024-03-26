import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'
// import UseTheme from './component/Hooks/UseTheme'
import NavBar from './component/Navbar/NavBar'

function App() {
   const[Users,setUsers] = useState([])
  //  const {theme} = UseTheme()
   const fetchUsers  = async () =>{
    const myUrl = `https://jsonplaceholder.typicode.com/users`;
    const response = await axios.get(myUrl)
    console.log(response)
    const myRealUsers = await response.data
    console.log(myRealUsers)
    setUsers(myRealUsers)
   }
   useEffect(()=>{
    fetchUsers()
   },[])

  return (
    <div className='app' >
        <div>
        <NavBar></NavBar>
        </div>
      {
        Users.map(({name,email,username,city,phone,website,id})=>(
          <div key={id} className='info'>
          <h2>Name:{name}</h2>
          <h3>Username:{username}</h3>
          <h3>Email:{email}</h3>
          <h3>City:{city}</h3>
          <h3>Phone:{phone}</h3>
          <h3>Website:{website}</h3>
          </div>
        ))
      }
    </div>  
  )
}

export default App
