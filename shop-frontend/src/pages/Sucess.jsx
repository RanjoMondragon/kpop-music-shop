import React from 'react'
import { useLocation } from 'react-router'

const Sucess = () => {
    const location = useLocation();
    console.log(location);
  return (
    <div>
        Sucess
    </div>
  )
}

export default Sucess