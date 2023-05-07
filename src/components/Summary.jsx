import React from 'react'
import { useLocation } from 'react-router-dom'
import { useQuery } from "react-query";
import Navvbar from './Navvbar';
function UseQuery(){
    return new URLSearchParams(useLocation().search);
  }

const Summary = () => {
    const fetchMovies = async () => {
        const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
        return res.json();
      };
      const query = UseQuery();
    const { data, status } = useQuery("users", fetchMovies);
  return (
    <>
      <div>
        {status === "error" && <p>Error fetching data</p>}
        {status === "loading" && <p>Fetching data...</p>}
        {status === "success" && (
          <>
            <div className='sum'>
              <Navvbar />
              <div className="flex  justify-center">
                <div>
                  <h1 className="text-3xl my-10">
                    {data[query.get("no")].show.name}
                  </h1>
                  {/* <h1>{</h1> */}
                  <h1 className="text-3xl my-10">
                    Language : {data[query.get("no")].show.language}
                  </h1>
                  <h1 className="text-3xl my-10">
                    Rating : {data[query.get("no")].show.rating.average}
                  </h1>
                  <h1 className="text-3xl my-10">
                    Genre : {data[query.get("no")].show.genres}
                  </h1>
                  <h1 className="text-3xl my-10">
                    average run time :{" "}
                    {data[query.get("no")].show.averageRuntime}
                  </h1>
                  <h1 className="text-3xl my-10">
                    premiered : {data[query.get("no")].show.premiered}
                  </h1>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Summary