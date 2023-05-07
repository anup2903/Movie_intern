import React from 'react'
import { Link } from 'react-router-dom';
const Ticket = () => {
  return (
    <div className="pt-16 third" id='ticket'>
      <div className="flex justify-between">
        <div>
          <div className="flex ml-16">
            <Link to="form/?id=2">
              <div className="img1 flex flex-col rounded-xl">
                <button className="rounded-xl p-2 flex justify-center mt-[39.7vh] bg-blue-300 but1 hover:bg-blue-300 text-slate-50 font-mono">
                  Book Now
                </button>
              </div>
            </Link>

            <Link to="form/?id=0">
              <div className="img2 ml-10 flex flex-col rounded-xl">
                <button className="rounded-xl p-2 flex justify-center mt-[39.7vh] bg-blue-300 but1 hover:bg-blue-300 text-slate-50 font-mono">
                  Book Now
                </button>
              </div>
            </Link>
          </div>

          <div className="flex pt-4 pl-16">
            <Link to="form/?id=6">
              <div className="img6 flex flex-col rounded-xl">
                <button className="rounded-xl p-2 flex justify-center mt-[39.7vh] bg-blue-300 but1 hover:bg-blue-300 text-slate-50 font-mono">
                  Book Now
                </button>
              </div>
            </Link>
            <Link to="form/?id=3">
              <div className="img4 ml-10 flex flex-col rounded-xl">
                <button className="rounded-xl p-2 flex justify-center mt-[39.7vh] bg-blue-300 but1 hover:bg-blue-300 text-slate-50 font-mono">
                  Book Now
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="pt-28 pr-14">
          <h1 className="text-center text-7xl w-[30rem] font-mono">
            Book your Tickets instantly with WatchMe
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Ticket