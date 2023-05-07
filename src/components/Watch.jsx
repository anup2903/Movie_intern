import React from 'react'
import { Link } from 'react-router-dom';
import { Tilt } from 'react-tilt';

const Watch = () => {
  return (
    <div className="py-3 watch" id='watches'>
      <div>
        <h1 className="text-center text-3xl font-serif pt-5">Now Showing</h1>
      </div>
      <div className="flex flex-col pt-10">
        <div className="flex justify-around">
          <Tilt>
            <Link to="sum/?no=2">
              <div className="img1"></div>
            </Link>
          </Tilt>

          <Tilt>
            <Link to="sum/?no=0">
              <div className="img2"></div>
            </Link>
          </Tilt>
          <Tilt>
            <Link to="sum/?no=1">
              <div className="img3"></div>
            </Link>
          </Tilt>
          <Tilt>
            <Link to="sum/?no=3">
              <div className="img4"></div>
            </Link>
          </Tilt>
        </div>
        <div className="flex justify-around pt-3">
          <Tilt>
            <Link to="sum/?no=5">
              <div className="img5"></div>
            </Link>
          </Tilt>
          <Tilt>
            <Link to="sum/?no=6">
              <div className="img6"></div>
            </Link>
          </Tilt>
          <Tilt>
          <Link to="sum/?no=7">
            <div className="img7"></div>
          </Link>
          </Tilt>
          <Tilt>
          <Link to="sum/?no=9">
            <div className="img8"></div>
          </Link>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Watch