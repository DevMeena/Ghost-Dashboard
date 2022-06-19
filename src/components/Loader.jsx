import React from 'react';

const Loader = () => {
  return (
    <div className='flex items-center justify-center space-x-2 h-screen w-screen'>
      <div
        className='spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full'
        role='status'
      ></div>
    </div>
  );
};

export default Loader;
