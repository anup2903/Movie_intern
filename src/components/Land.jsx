import React from 'react'
import Navvbar from './Navvbar'
import { Tilt } from "react-tilt";
import Watch from './Watch';
import Ticket from './Ticket';
const Land = () => {
  return (
    <div>
      <div className="land">
        <Navvbar />
        <div className="flex justify-around pt-40">
          <div className="w-[35rem] pl-10">
            <h1 className="text-7xl text-yellow-200 font-mono">
              Watch Your Favourite Movie Anywhere You Want
            </h1>
          </div>
          <div className="side">
            <div className="flex ">
              <Tilt>
                <div className="h-[10rem] w-[10rem] marvel"></div>
              </Tilt>
              <Tilt>
                <div className="h-[10rem] w-[10rem]  py-2 dc"></div>
              </Tilt>
            </div>
            <div className="flex">
              <Tilt>
                <div className="h-[10rem] w-[10rem] one"></div>
              </Tilt>
              <Tilt>
                <div className="h-[10rem] w-[10rem]  py-2 bigbang"></div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
      <Watch/>
      <Ticket/>
    </div>
  );
}

export default Land