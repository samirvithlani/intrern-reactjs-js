import React from 'react'
import axios from 'axios'

export const ApiDemo = () => {

    const getData = () => {

        // axios.get('https://reqres.in/api/users?page=2').then(res => {
        //     console.log(res);
        // }).catch(err => {
        //     console.log(err);
        // })
        axios.get('http://localhost:4000/api/player').then(res => {

            console.log(res.data);
        })

    }
    const postData = () => {
        var data = {
            name: 'sachin',
            job: 'cricketer'
        }

        axios.post('https://reqres.in/api/users', data).then(res => {
            console.log(res);
        })
    }

    const deleteData = () => {

        var id = 2;
        axios.delete(`https://reqres.in/api/users/` + id).then(res => {
            console.log(res.status);
            if(res.status == 204){
                alert("Deleted Successfully");
            }
            else{
                console.log("not deleted");
            }
        }
        )
    }

    const putData = () => {

        var id=2;
        var data = {
            name: 'sachin',
            job: 'Footballer'
        }
        axios.put(`https://reqres.in/api/users/` + id,data).then(res=>{
            
            if(res.status == 200){
                alert("Updated Successfully");
                console.log(res.data)
            }
            else{
                console.log("not updated");
            }

        })
    }

        return (
            <div>
                <button onClick={getData}>Get Data</button>
                <br />
                <button onClick={postData}>post Data</button>
                <br/>
                <button onClick={deleteData}>delete Data</button>
                <br/>
                <button onClick={putData}>put Data</button>
            </div>
        )
    }
