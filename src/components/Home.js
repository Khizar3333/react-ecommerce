import React,{useEffect} from 'react'
import Products from './Products'
import Navbar from './Navbar'
import  "../css/home.css";
import {auth} from "../config/Config"
import{useNavigate} from "react-router-dom"

const Home = ({user}) => {
  const history=useNavigate()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history.push('/login')
      }
    })
  
   
    
  }, [])
  
  return (
  <>
  <div className='wrapper'>

        <Navbar user={user}/>
        <Products/>
  </div>
  </>
    )
}

export default Home