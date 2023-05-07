import React, { useState,useEffect, useRef } from 'react'
import Navvbar from './Navvbar'
// import UseQuery from './UseQuery'
import { useLocation } from 'react-router-dom'
import { useQuery } from "react-query";
function UseQuery(){
    return new URLSearchParams(useLocation().search);
  }

  
  const Form = () => {
    const fetchMovies = async () => {
      const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
      return res.json();
    };
    const query = UseQuery();
  const { data, status } = useQuery("users", fetchMovies);

  const info = useRef();
  const age= useRef();
  const handleClick = () => {
    localStorage.setItem("name", info.current.value);
    localStorage.setItem("age" ,age.current.value);
  };


  
  return (
    <>
      <div className="form">
        {status === "error" && <p>Error fetching data</p>}
        {status === "loading" && <p>Fetching data...</p>}
        {status === "success" && (
          <>
            <Navvbar />
            <div className="flex  justify-center mt-16">
              <div className="w-[45vh] for flex flex-col justify-center h-[25rem] pt-5">
                <h1 className='text-4xl text-center'> {data[query.get("id")].show.name}</h1>
                <h1 className='text-center font-mono py-2'>Rating : {data[query.get("id")].show.rating.average}</h1>
                <h1 className='text-center font-mono '>Language : {data[query.get("id")].show.language}</h1>
                <h1 className='text-center font-mono py-2'>Genres : {data[query.get("id")].show.genres}</h1>
                <div className="justify-center flex flex-col">
                  <input
                    type="text"
                    placeholder="Enter you name"
                    className="my-5 w-[15rem] ml-16"
                    ref={info}
                  />
                  <input
                    type="text"
                    placeholder="Enter your age"
                    className="my-5 w-[15rem] ml-16"
                    ref={age}
                  />
                </div>

                <div className="w-[10rem]  my-5 flex justify-end ml-20">
                  <button
                    className="rounded-xl bg-green-400 p-1 w-[10rem] ml-10"
                    onClick={handleClick}
                  >
                    <h1 className='text-center'>Book your ticket</h1>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Form