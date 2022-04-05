import axios from 'axios'
import React, { useEffect, useState } from 'react'


export const DepedentDropdown = () => {

    const [caegories, setcaegories] = useState([])
    const [subcar, setsubcar] = useState([])
    const getCategories = async () => {

        await axios.get("http://192.168.1.162:4001/categories").then((res)=>{

            setcaegories(res.data.data)
            console.log(res.data.data)

        })
    }
    useEffect(() => {
      
        getCategories()
      return () => {
        
      }
    }, [])

    const categorycahnageHandler = (e) =>{

        console.log(e.target.value);
        axios.get("http://192.168.1.162:4001/subcategories/id").then((res)=>{

                setsubcar(res.data.data)
        })
    }
    const subcathandler = (e) =>{
        console.log(e.target.value);
    }
    
    return (
        <div>
            <form>
                <div>
                    <label>select CATEGORY</label>
                    <select onChange = {categorycahnageHandler}>
                        {
                                caegories.map((cat)=>{

                                    return (
                                        <option value ={cat._id}>{cat.categoryName}</option>
                                    )
                                })

                        }
                        
                    </select>
                </div>
                <div>
                    <label>select SUBCATEGORy</label>
                    <select onChange = {subcathandler}>
                        {
                                caegories.map((cat)=>{

                                    return (
                                        <option value ={cat._id}>{cat.categoryName}</option>
                                    )
                                })

                        }
                        
                    </select>
                </div>
            </form>

        </div>
    )
}
