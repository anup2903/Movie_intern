import React from 'react'
import { Link } from 'react-router-dom';
const Navvbar = () => {
  return (
    <div className="flex justify-between pt-8">
      <div className="pl-24">
      <Link to='/'>
        <h1 className='text-4xl text-blue-600 '>WatchMe</h1>
      </Link>
        
      </div>
      <div className="flex justify-between">
        <div className='px-10 text-2xl text-orange-500 font-bold'>
          <a style={{ textDecoration: "none" }} href="#watches">Watch now</a>
        </div>
        <div className="pr-24 text-2xl text-orange-500 font-bold">
        <a style={{ textDecoration: "none" }} href="#ticket">Tickets</a>
        </div>
      </div>
    </div>
  );
}

export default Navvbar