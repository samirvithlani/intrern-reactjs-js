import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export const UpdateData = () => {

    var id = useParams().id;
    const [data, setdata] = useState('')
    const [firstname, setfirstname] = useState(data.first_name)
    const [lastname, setlastname] = useState(data.last_name)

   const updateData  = async ()=>{

        await axios.get(`https://reqres.in/api/users/${id}`).then(res => {

        console.log(res.data.data)
        setdata(res.data.data)
        
        
    })
    }
useEffect(() => {
  
  updateData()
  return () => {
    
  }
}, [])
    

  return (
    
        
    <div>
      {
        
            <form>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" defaultValue ={data.first_name} onChange = {(e)=>setfirstname(e.target.value)}></input> 
                    </div>
                    
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" defaultValue ={data.last_name} onChange = {(e)=>setlastname(e.target.value)}></input> 
                    </div>
            </form>    
    }
    </div>
    
  )
  
}
