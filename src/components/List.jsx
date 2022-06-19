import React from 'react';
import { AiOutlineLink } from 'react-icons/ai';

const List = ({ heading, value, content, isPost }) => {
  // console.log('in list', content);

  return (
    // place-items-center h-full
    <div className='w-full h-fit rounded shadow-lg bg-sky-800 grid'>
      <div className='px-2 py-2'>
        <h1 className='font-bold text-4xl mb-2 text-yellow-500 text-center'>
          {value}
        </h1>

        {content.length === 0 && (
          <>
            <h1 className='font-bold text-4xl mb-2 text-cyan-500 text-center py-20'>
              ⚠️ No posts found
            </h1>
          </>
        )}

        {content.map((item, idx) => (
          <a
            href={item.url}
            key={idx}
            target='_blank'
            rel='noreferrer'
            className='w-full h-fit lg:h-10 rounded shadow-lg bg-sky-500 hover:bg-sky-300 cursor-pointer place-items-center transition-all ease-in-out delay-100 my-2 flex flex-row justify-between group'
          >
            <span className='h-full text-white  text-base text-center pt-2 pl-2 group-hover:text-purple-900'>
              {idx + 1}.
            </span>
            <span className='h-full text-white  text-base text-center pt-2 pl-2 group-hover:text-purple-900'>
              {item.title}
            </span>
            <span className='h-full text-white  text-base text-center pt-2 pl-2 group-hover:text-purple-900'>
              <AiOutlineLink
                size='24'
                className='pl-2 mr-2 text-white group-hover:text-purple-900'
              />
            </span>

            {!isPost && (
              <span className='h-full text-black text-base pt-2 pl-2 ml-auto mr-2'>
                (used 4 times)
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default List;
