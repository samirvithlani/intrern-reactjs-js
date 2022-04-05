import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

export const Dashboard = () => {

  var auth = localStorage.getItem("firstName")
  console.log("auth-->",auth)
  var navigate = useNavigate()

  
  useEffect(() => {
    if(auth === null){
      navigate("/login")
    }
  
    return () => {
      
    }
  }, [])
  
  return (
    
    <div>
      
        Dashboard 
      
      </div>
  )
}
