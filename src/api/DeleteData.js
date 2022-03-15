import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router'

export const DeleteData = () => {
    var id = useParams().id;
    console.log(id)
    
    const delete1 = ()=>{
        {
            axios.delete(`https://reqres.in/api/users/${id}`).then(res=>{
                alert("Data deleted...")
                //get ....
            })
        }

    }
    useEffect(() => {
      
        delete1()
      return () => {
        
      }
    }, )
    

  return (
    <div>

    

    </div>

  )
}
