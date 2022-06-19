import React from 'react';
import SidebarIcon from './SidebarIcon';
import { FaGripHorizontal } from 'react-icons/fa';
import { BsFilePost } from 'react-icons/bs';
import { AiOutlineLink } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div className='fixed bottom-0 left-0 w-screen h-16 m-0 flex flex-row bg-gray-900 text-white shadow'>
      <SidebarIcon
        icon={<BsFilePost size='32' />}
        text='Posts'
        routeTo='/posts'
      />
      <SidebarIcon
        icon={<FaGripHorizontal size='32' />}
        text='Dashboard'
        routeTo='/'
      />
      <SidebarIcon
        icon={<AiOutlineLink size='32' />}
        text='Links'
        routeTo='/links'
      />
    </div>
  );
};

export default Sidebar;
