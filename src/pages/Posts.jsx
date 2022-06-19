import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '../components/List';
import Loader from '../components/Loader';
import { getAllPosts } from '../redux/actions/posts';
import {
  longMetaDesc,
  noFeatImg,
  noMetaDesc,
  tooLongPost,
  tooLongUrl,
  tooShortPost,
} from '../utils/postFilters';

const options = [
  'All',
  'No Meta Descriptions',
  'Too long Meta Description',
  'Too long URL',
  'No Featured Image',
  'Too Short Posts',
  'Too Long Posts',
];

const buttonClass = `my-2 py-2 px-4 text-sm font-medium text-violet-900 bg-white border-t border-b border-violet-200 hover:bg-violet-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-violet-700 dark:border-violet-600 dark:text-white dark:hover:text-white dark:hover:bg-violet-600 dark:focus:ring-blue-500 dark:focus:text-white`;

const Posts = () => {
  const [selectedValue, setSelectedValue] = useState(0);
  const { posts, loading } = useSelector((state) => state.posts);
  const [content, setContent] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  useEffect(() => {
    setContent(posts);
    // handleSubmit(selectedValue);
  }, [posts]);

  // useEffect(() => {
  //   console.log('content is', content);
  // }, [content]);

  const handleSubmit = (key) => {
    setSelectedValue(key);
    console.log(noMetaDesc(posts));
    console.log(key);

    switch (key) {
      case '0':
        console.log('case 0');
        setContent(posts);
        console.log(content);
        break;

      case '1':
        console.log('these are posts');
        console.log(noMetaDesc(posts));
        setContent(noMetaDesc(posts));
        console.log(content);

        console.log('content', content);
        break;

      case '2':
        console.log('Case 2');
        console.log(longMetaDesc(posts));
        setContent(longMetaDesc(posts));
        break;

      case '3':
        console.log('Case 3');
        setContent(tooLongUrl(posts));
        break;

      case '4':
        console.log('Case 4');
        setContent(noFeatImg(posts));
        break;

      case '5':
        console.log('Case 5');
        setContent(tooShortPost(posts));
        break;
      case '6':
        console.log('Case 6');
        setContent(tooLongPost(posts));
        break;

      default:
        break;
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className='grid grid-rows-7 h-screen mx-2 md:mx-20'>
          <div className='heading pt-4 place-items-center row-span-1'>
            <h1 className='font-medium leading-tight text-5xl md:text-5xl mb-2 text-green-500'>
              Posts
            </h1>
            <p className='text-md my-4 break-normal text-green-200 block'>
              ▻ Select an option below to view respective posts
            </p>

            <div
              className='flex flex-col md:flex-row rounded-md shadow-sm w-full justify-center'
              role='group'
            >
              {options.map((option, i) => (
                <button
                  type='button'
                  key={i}
                  value={i}
                  className={
                    i === 0
                      ? buttonClass + ' rounded-l-lg'
                      : i === 6
                      ? buttonClass + ' rounded-r-md'
                      : buttonClass
                  }
                  onClick={(e) => {
                    handleSubmit(e.target.value);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className='grid row-span-6 grid-row object-fill mt-5 gap-3 pb-20'>
            {content && (
              <List
                heading={'Check'}
                value={options[selectedValue]}
                content={content}
                isPost='true'
              />
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Posts;
