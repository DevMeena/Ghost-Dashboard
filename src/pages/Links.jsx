import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Card from '../components/Card';
import List from '../components/List';
import { getAllPosts } from '../redux/actions/posts';
import { filterLinks, isBrokenLink } from '../utils/linkFilters';
import { fetchBrokenLinks } from '../redux/actions/links';

const externalLinks = [
  'https://www.redhat.com/en/blog/faq-updates',
  'https://www.redhat.com/en/blog/faq-centos-stream-updates',
  'https://en.wikipedia.org/wiki/Waterfall_model',
  'https://en.wikipedia.org/wiki/Code_coverage',
  'https://nvie.com/posts/a-successful-git-branching-model/',
  'https://vegastack.com/?utm_source=vegastack-blog&utm_medium=blog-website',
  'https://www.anse.com/',
  'https://jenkins.io/',
  'https://prometheus.io/',
  'http://kanboard.net/',
  'https://www.bugzilla.org/',
  'https://github.com/ansible',
  'https://jenkins.io/',
  'https://kubernetes.io/',
  'https://www.sonarqube.org/',
  'https://pwslab.com/?utm_source=vegastack-blog&utm_medium=blog-website',
];

const internalLinks = [
  'https://ghost-bog.ipxp.in/all-you-need-to-know-about-blue-green-deployments/',
  'https://ghost-blog.ipxp.in/content/images/2020/08/continuous-integration-continuous-deployment-summary-pwslab.png',
  'https://ghost-blog.ipxp.in/content/images/2020/07/cloud-768x512-1.jpg',
  'https://ghost-blog.ipxp.in/content/images/2020/07/env-768x264-2.png',
  'https://ghost-blog.ipxp.in/content/images/2020/07/serverless-architecture.png',
  'https://ghost-blog.ipxp.in/content/images/2021/07/Fedora.jpg',
  'https://ghost-blog.ipxp.in/content/images/2021/07/Stream.jpg',
  'https://ghost-blog.ipxp.in/content/images/size/w600/2021/07/Fedora.jpg',
  'https://ghost-blog.ipxp.in/content/images/size/w1000/2021/07/Fedora.jpg',
  'https://ghost-blog.ipxp.in/content/images/2021/07/Fedora.jpg',
  'https://ghost-blog.ipxp.in/content/images/size/w600/2021/07/Stream.jpg',
  'https://ghost-blog.ipxp.in/content/images/size/w1000/2021/07/Stream.jpg',
  'https://ghost-blog.ipxp.in/content/images/2021/07/Stream.jpg',
  'https://public.vegastack.com/dist/p/Blue-Green-Deployment-Benefits.pdf',
  'https://ghost-blog.ipxp.in/content/images/2021/07/folder-2.png',
  'https://ghost-blog.ipxp.in/content/images/2021/07/Blue-Green-Deployment-Architecture-1.png',
  'https://ghost-blog.ipxp.in/content/images/2021/07/Benefits-of-Blue-Green-Deployments.png',
  'https://ghost-blog.ipxp.in/content/images/size/w600/2021/07/folder-2.png',
  'https://ghost-blog.ipxp.in/content/images/size/w1000/2021/07/folder-2.png',
  'https://ghost-blog.ipxp.in/content/images/size/w1600/2021/07/folder-2.png',
  'https://ghost-blog.ipxp.in/content/images/size/w2400/2021/07/folder-2.png',
  'https://ghost-blog.ipxp.in/content/images/size/w600/2021/07/Blue-Green-Deployment-Architecture-1.png',
  'https://ghost-blog.ipxp.in/content/images/size/w1000/2021/07/Blue-Green-Deployment-Architecture-1.png',
  'https://ghost-blog.ipxp.in/content/images/size/w1600/2021/07/Blue-Green-Deployment-Architecture-1.png',
  'https://ghost-blog.ipxp.in/content/images/2021/07/Blue-Green-Deployment-Architecture-1.png',
  'https://ghost-blog.ipxp.in/content/images/size/w600/2021/07/Benefits-of-Blue-Green-Deployments.png',
  'https://ghost-blog.ipxp.in/content/images/size/w1000/2021/07/Benefits-of-Blue-Green-Deployments.png',
  'https://ghost-blog.ipxp.in/content/images/size/w1600/2021/07/Benefits-of-Blue-Green-Deployments.png',
  'https://ghost-blog.ipxp.in/content/images/2021/07/Benefits-of-Blue-Green-Deployments.png',
];

const InternalLiks = () => {
  return (
    <div className='w-full h-fit rounded shadow-lg bg-sky-800 grid mt-10'>
      <div className='px-2 py-2'>
        <h1 className='font-bold text-4xl mb-2 text-yellow-500 text-center'>
          Broken Internal Links
        </h1>
        {internalLinks.map((p, i) => (
          <a
            href=''
            target='_blank'
            rel='noreferrer'
            className='w-full h-fit rounded shadow-lg bg-sky-500 hover:bg-sky-300 cursor-pointer place-items-center transition-all ease-in-out delay-100 my-2 flex flex-row justify-start group'
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

const ExternalLinks = () => {
  return (
    <div className='w-full h-fit rounded shadow-lg bg-sky-800 grid mt-10'>
      <div className='px-2 py-2'>
        <h1 className='font-bold text-4xl mb-2 text-yellow-500 text-center'>
          Broken External Links
        </h1>
        {externalLinks.map((p, i) => (
          <a
            href=''
            target='_blank'
            rel='noreferrer'
            className='w-full h-fit rounded shadow-lg bg-sky-500 hover:bg-sky-300 cursor-pointer place-items-center transition-all ease-in-out delay-100 my-2 flex flex-row justify-start group'
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

const Links = () => {
  const [selectedValue, setSelectedValue] = useState(0);
  const { posts, loading } = useSelector((state) => state.posts);
  // const { links, fetching } = useSelector((state) => state.links);
  const [content, setContent] = useState(null);
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [internalLinks, setInternalLinks] = useState(null); // broken
  const [externalLinks, setExternalLinks] = useState(null); // broken
  const [brokenLinks, setBrokenLinks] = useState(null); // broken

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  useEffect(() => {
    setContent(posts);
  }, [posts]);

  useEffect(() => {
    setData(filterLinks(content));
  }, [content]);

  useEffect(() => {
    if (data !== null) {
      setBrokenLinks(isBrokenLink(data.urls));
      // dispatch(fetchBrokenLinks(data.urls));
      console.log('inside if');
    }
  }, [dispatch, data]);

  console.log(data);
  console.log(content);
  // console.log(links);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className='grid grid-rows-7 h-screen mx-2 md:mx-20'>
          <div className='heading pt-4 place-items-center row-span-1'>
            <h1 className='font-medium leading-tight text-5xl md:text-5xl mb-2 text-green-500'>
              Links
            </h1>
            <p className='text-md mb-2 break-normal text-green-200 block'>
              ▻ Click on any Item to see more details
            </p>
          </div>
          <div className='grid row-span-1 grid-cols-3 place-items-center mt-0 md:mt-5 gap-3'>
            <Card heading={'Total Links with any issues'} value={'69'} />
            <Card heading={'Last check completed at'} value={'14/01/22'} />
            <Card heading={'Check Frequency'} value={'Daily'} />
          </div>
          <div className='grid row-span-4 grid-row md:grid-cols-2 object-fill mt-5 gap-3 pb-20'>
            {/* <List heading={'Check'} value={'Broken Internal Links'} /> */}
            <InternalLiks />
            <ExternalLinks />
            {/* <List heading={'Check Frequency'} value={'Broken External Links'} /> */}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Links;
