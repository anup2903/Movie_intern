import React  from 'react'
import { useLocation } from 'react-router-dom'
const UseQuery = () => {
  return new URLSearchParams(useLocation().search)
}

export default UseQuery