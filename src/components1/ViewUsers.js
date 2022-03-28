import React from 'react'
import { useNavigate } from 'react-router';

export const ViewUsers = () => {
    var a = true;
    var navigate = useNavigate()
  return (
    <div>ViewUsers

        {
            a?<button onClick = {()=>navigate('/adduser')}>CLICK ME</button>:""
        }        
    </div>
  )
}
