import React from 'react'

export const FileUpload = () => {

    const filechangeHandler = (e) => {
        console.log("file cha ge handler function called....")
        console.log(e.target.files[0])
    }
    const mulFileChangeHandler = (e) => {
        console.log(e.target.files)
        }
  return (
    <div>

        <form>
            <input type="file" onChange ={(e=>{filechangeHandler(e)})}/>
            <input type ="file" onChange ={(e=>{mulFileChangeHandler(e)})} multipleyy></input>
            
        </form>
    </div>
  )
}
