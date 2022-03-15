import React, { useState } from 'react'

export const SelectDemo = () => {
    const [value, setvalue] = useState([])

    var options = [
        {
            lable: "VOLVO",
            value: "volovo"
        },
        {
            lable: "BMW",
            value: "bmw"
        },
        {
            lable: "AUDI",
            value: "audi"
        },
        {
            lable: "MERCEDES",
            value: "mercedes"
        }

    ]

    var selectedOption;
    const selectCahnageHandler = (e) => {

        selectedOption = e.target.value;
        alert(selectedOption)


    }
    const genderChangeHandler = (e) => {

        alert(e.target.value)
    }

    return (
        <div>

            <form>
                <label>SELECT</label>
                <select onChange={(e) => { selectCahnageHandler(e) }} value={value}>
                    {
                        options.map((option) => {
                            return (<option value={option.value}>{option.lable}</option>
                            )
                        })
                    }
                </select>
                <br/>
                <label>MALE</label>
                    <input type="radio" name = "gender" value="male" onChange ={(e)=>{genderChangeHandler(e)}}/>
                    <label>FEMALE</label>
                    <input type="radio" name = "gender" value="female" onChange ={(e)=>{genderChangeHandler(e)}}/>
            </form>


        </div>
    )
}
