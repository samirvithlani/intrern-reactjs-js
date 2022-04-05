import axios from 'axios'
import React, { useState } from 'react'

export const FileUploader = () => {

    const [singlefile, setsinglefile] = useState('')
    const [name, setname] = useState('')

    const singleFileHandler = (e) => {
            console.log(e.target.files[0])
            setsinglefile(e.target.files[0])
    }


    const submit = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('file', singlefile)
        formData.append('name', name)


        await axios.post('http://localhost:8080/upload', formData).then(res=>{

            console.log(res)
        })

        // var data = {
        //     name: name,
        //     singlefile: singlefile
        // }
        //api


    }
    return (
        <div>

            <form onSubmit = {submit}>
                <div class="form-group">
                    <label for="exampleInputPassword1">UserName</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password" 
                    
                    onChange = {(e)=>setname(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>SELECT FILE</label>
                    <input type="file" className="form-control"
                    onChange = {(e)=>{singleFileHandler(e)}}
                    />
                </div>


                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
