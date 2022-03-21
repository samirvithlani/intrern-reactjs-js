import React from 'react'
import { Props3 } from './Props3'

export const Props2 = (props) => {

    var employee =[
     {
        ename:"jay",
        eage:20,
        isActive:true
    },
    {
        ename:"raj",
        eage:22,
        isActive:false
    },
]

  return (
    <div>Props2

    name= 
        {
            props.name
        }
        props.x()
            <Props3 employee = {employee}/>
    </div>
  )
}
