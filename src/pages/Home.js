import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>HOME COMPONENRT
      <ul>
        <li><Link to ="/eletronics">Electronics</Link></li>
        <li><Link to ="/fashion">Fashion</Link></li>
        <li><Link to ="/g">Groc</Link></li>
      </ul>
    </div>
  )
}
