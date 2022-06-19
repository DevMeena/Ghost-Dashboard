import React from 'react';
import { Link } from 'react-router-dom';

const SidebarIcon = ({ icon, text = 'tooltip 💡', routeTo }) => {
  return (
    <Link
      className='sidebar-icon group'
      to={routeTo}
      onClick={() => window.scroll(0, 0)}
    >
      {icon}
      <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
    </Link>
  );
};

export default SidebarIcon;
