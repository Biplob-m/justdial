import React from 'react'
import './Admin.css'

export default function AdminSidebar({option, setValue}) {

  let list=option.map((item,i)=>{
    return(
      <li onClick={()=>setValue(item.id)} className='ad-listItem btn btn-success' key={i}>{item.name}</li>
    )
  })

  return (
    <>
      
            <ul className='ad-list'>
                {list}
            </ul>
            
    </>
  )
}
