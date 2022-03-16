import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export const UpdateData = () => {
    var id = useParams().id;
    const [data, setdata] = useState('')
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')

    const updateData = () => {

        axios.get(`https://reqres.in/api/users/${id}`).then(res => {

            setdata(res.data.data)
            console.log(res.data.data)
        })
    }
    const firstNameChangeHandler =(e)=>{

        setfirstname(e.target.value)
    }

    useEffect(() => {
      
        updateData()
    },[])
    
    const update = (e)=>{
        //api calling...
        var updatedData = {
            first_name:firstname,
            last_name:lastname,
            email:email
        }
        e.preventDefault()

        axios.put(`https://reqres.in/api/users/${id}`,updatedData).then(res=>{
            alert("Data updated...")
        })

    }

    return (
        <div>

            <form onSubmit = {update}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1"  value ={data.email} 
                    onChange = {(e)=>setemail(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">First Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" value = {data.first_name}
                    onChange = {(e)=>firstNameChangeHandler(e)}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">lastname</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" value = {data.last_name}
                    onChange = {(e)=>setlastname(e.target.value)}/>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}
