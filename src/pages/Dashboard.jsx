import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Card from '../components/Card';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Posts per month',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Posts',
      data: [3, 6, 8, 4, 12, 15, 9],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Authors',
      data: [1, 2, 3, 2, 4, 5, 4],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

// faker.datatype.number

const post = [
  'Different Product Deployment Strategies in DevOps',
  'All you need to know about Blue-Green Deployment Strategy',
  'What is Continuous Integration, Continuous Delivery, and Continuous Deployment?',
  'DevSecOps Beginners Guide: How to Secure your DevOps Pipelines?',
  'The Ultimate Guide to Measure DevOps Success Metrics',
];

const TopPosts = () => {
  return (
    <div className='w-full h-fit rounded shadow-lg bg-sky-800 grid mt-10'>
      <div className='px-2 py-2'>
        <h1 className='font-bold text-4xl mb-2 text-yellow-500 text-center'>
          Top Posts
        </h1>
        {post.map((p, i) => (
          <a
            href=''
            target='_blank'
            rel='noreferrer'
            className='w-full h-fit lg:h-10 rounded shadow-lg bg-sky-500 hover:bg-sky-300 cursor-pointer place-items-center transition-all ease-in-out delay-100 my-2 flex flex-row justify-center group'
          >
            <span className='h-full text-white  text-base text-center pt-2 pl-2 group-hover:text-purple-900'>
              {i + 1}
            </span>
            <span className='h-full text-white  text-base text-center pt-2 pl-2 group-hover:text-purple-900'>
              {p}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

const Dashboard = () => {
  const { posts, loading } = useSelector((state) => state.posts);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className='grid grid-rows-7 h-screen mx-2 md:mx-20'>
          <div className='heading pt-4 place-items-center row-span-1'>
            <h1 className='font-medium leading-tight text-5xl md:text-5xl mb-2 text-green-500'>
              Dashboard
            </h1>
            <p className='text-md mb-2 break-normal text-green-200 block'>
              ▻ Click on any Item to see more details
            </p>
          </div>
          <div className='grid row-span-1 grid-cols-4 place-items-center mt-0 md:mt-5 gap-3'>
            <Card heading={'Total number of posts'} value={'56'} />
            <Card heading={'Total number of pages'} value={'1347'} />
            <Card heading={'Total number of authors'} value={'17'} />
            <Card heading={'Total number of tags'} value={'34'} />
          </div>
          <Line options={options} data={data} />
          <div className='grid row-span-4 grid-row md:grid-cols-1 object-fill mt-5 gap-3 pb-20'>
            {/* <List heading={'Check Frequency'} value={'Broken External Links'} /> */}
            <TopPosts />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Dashboard;
