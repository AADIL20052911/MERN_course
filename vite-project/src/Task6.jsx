import React from 'react'

function Task6({name,dept,skill}){
  return (
    <div>
      <h1>I am {name} from {dept}</h1>
      <ol>
        {skill.map((s)=><li>{s}</li>)} 

      </ol>
    </div>
  )
}

export default Task6
