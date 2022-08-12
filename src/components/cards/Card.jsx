import React from 'react'
import { useNavigate } from 'react-router-dom'


const Card = ({ value }) => {
  const navigate = useNavigate();

  const getProperty = (e) => {
    const id = value.id;
    navigate(`/property/${id}`)
  }
  return (
    <button onClick={ getProperty}>
         <div className=' max-w-sm rounded-xl overflow-hidden shadow-xl hover:scale-125 '>
          <img className= ' w-64 h-64' src={value.image} />
          <p className='h-16'>{value.title}</p>
      </div>
    </button>
   

  )
}

export default Card