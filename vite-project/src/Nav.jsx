import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div>
      <h1>Nav Component</h1>
        <Link to="/">Home</Link> |
        <Link to="/task6">Task6</Link> |
        <Link to="/About">About</Link>
    </div>
  )
}

export default Nav
