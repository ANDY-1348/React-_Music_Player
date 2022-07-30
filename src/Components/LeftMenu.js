import React from 'react';
import '../styles/LeftMenu.css';
import Logo from '../img/ANDY.jpg';
import { BiSearchAlt } from 'react-icons/bi';
import { FaEllipsisH } from 'react-icons/fa';
import { Menu } from './Menu';
import { MenuList } from './MenuList';
import { MenuPlayList } from './MenuPlayList';
function LeftMenu() {
  return (
    <div className='leftMenu'>
      <div className='logoContainer'>
        <div className='logo'>
          <img src={Logo} alt='@' />
          <h2>Andy</h2>
        </div>
        <i>
          <FaEllipsisH />
        </i>
      </div>

      <div className='searchBox'>
        <input type='text' placeholder='Search...' />
        <i>
          <BiSearchAlt />
        </i>
      </div>

      <Menu title={'Menu'} listObject={MenuList} />

      <MenuPlayList />
    </div>
  );
}

export { LeftMenu };
