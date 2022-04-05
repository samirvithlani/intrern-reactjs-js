import axios from 'axios'
import React, { useState } from 'react'

export const Rohithform = () => {

    const [name, setname] = useState('')
    const [desc, setdesc] = useState('')
    const [time, settime] = useState('')
    

    const handleSubmit = (e) => {
        e.preventDefault()
        var obj = {
            bName: name,
            bDescription: desc,
            bTime: time
            
        }

        axios.post('http://localhost:8080/addbug', obj).then((res)=>{

        console.log(res.status)
        })

    }

  return (
    <div>


        <form onSubmit = {handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" 
                onChange = {(e)=>setname(e.target.value)}
                />
            </div>
            <div>
                <label>desc</label>
                <input type="text" name="desc" 
                onChange = {(e)=>setdesc(e.target.value)}
                />
            </div>
            <div>
                <label>time</label>
                <input type="text" name="desc"
                onChange = {(e)=>settime(e.target.value)}
                />
            </div>
            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
    </div>
  )
}
