import React, { useRef } from 'react'

export const FormDemo2 = () => {
    var name = useRef()
    const submit = (e)=>{
        e.preventDefault()
        // e.targe.val
        console.log(name.current.value)

    }
    return (
        <div>
            <form onSubmit ={submit}>
                <table>
                    <tr>
                        <td>ENTER NAME</td>
                        <td><input type = "text" ref = {name}></input></td>
                    </tr>
                    <tr>
                        
                        <td><input type = "submit"></input></td>
                    </tr>
                </table>

            </form>

        </div>
    )
}
