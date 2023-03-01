import React from 'react'
import { useLocation } from 'react-router'

const Success = () => {
    const location = useLocation();
    console.log(location);
  return (
    <div>
        Sucess
    </div>
  )
}

export default Success