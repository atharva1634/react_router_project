import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
    return (
      
        <div className='text-center p-4 m-4 rounded-2xl font-bold bg-gray-600 text-white text-2xl'>
      User: {userid}
      </div>
  )
}

export default User