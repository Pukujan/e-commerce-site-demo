import { Rating } from '@mui/material';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Detail = () => {
  const { state } = useLocation();




  return (
    <div>
      <div className='flex xl:flex-row flex-col p-20 justify-center gap-20 items-center'>
        <div>
          <img
            className='xl:max-w-sm lg:max-w-xs max-w-sm'
            src={state.image} alt="" />
        </div>

        <div className='text-xl max-w-md md:max-w-lg 2xl:max-w-2xl p-4'>

          <h1 className='text-4xl py-5 font-bold'>{state.title}</h1>
          <p >{state.overview}</p>

          <div className='hidden md:grid grid-cols-2 w-3/4'>
            <div className='py-3'>
              <p className='font-bold text-xl pb-7'>Product Type : </p>
              <p className='font-bold text-xl'>Description: </p>
            </div>
            <div className='py-3'>
              <p className='capitalize pb-7'>{state.category}</p>
              <p className='overflow-y-scroll line-clamp-5'>{state.description}</p>

            </div>
          </div>
          <div className='md:hidden'>
            <div className=''>
              <p className='font-bold text-xl'>Product Type : </p>
              <p className='capitalize pb-7'>{state.category}</p>

            </div>
            <div className='py-3'>
              <p className='font-bold text-xl'>Description: </p>
              <p className=''> {state.description} </p>
            </div>
          </div>

          <div className='grid grid-cols-2 pt-10 w-3/4'>
            <p className='font-bold text-xl '>Price: </p>
            <p className='text-2xl font-bold'>{state.price}</p>
          </div>
          <div className='flex gap-40 items-center'>
            <span className='font-bold text-xl py-6'>Ratings: </span>            <Rating name="read-only" value={state.rating.rate} readOnly />
          </div>
          <div className='grid grid-cols-2 w-3/4'>
            <span className='font-bold text-xl '>Rated by:</span> <span>{state.rating.count} users</span>

          </div>


          {/* <div className='sm:flex gap-10 items-center'>
            <div className={`sm:inline-block my-4 p-3 text-white text-center ${ratingClass}`}>
              <p className='text-3xl font-bold'>{state.vote_average.toFixed(2)}</p>
              <p className='font-light'>{state.vote_count} votes</p>
            </div>
            <p className='flex items-center gap-2'>
              Grade: <span className='font-bold text-3xl'>{grade}</span>
            </p>
          </div> */}
        </div>

      </div>
    </div>

  );
};

export default Detail;

