import React from 'react'

export const Props3 = (props) => {
  return (
    <div>
        <h1>Props3 called...</h1>
        {

            props.employee.map((emp)=>{

                return<div>
                    {
                        emp.ename
                    }
                    </div>
            })
        }
        </div>
  )
}
