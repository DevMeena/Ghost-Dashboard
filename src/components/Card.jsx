import React from 'react';

const Card = ({ heading, value }) => {
  return (
    <div className='w-full h-full rounded shadow-lg bg-violet-900 grid place-items-center'>
      <div className='px-2 py-2'>
        <h1 className='font-bold text-xl md:text-4xl mb-2 text-sky-500 text-center'>
          {value}
        </h1>
        <p className='text-purple-200 text-base text-center'>{heading}</p>
      </div>
    </div>
  );
};

export default Card;
