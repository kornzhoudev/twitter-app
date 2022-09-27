import React from 'react';
import Image from 'next/image';
import { HomeIcon } from '@heroicons/react/20/solid';
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardDocumentCheckIcon,
  UserIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline';
import SidebarLink from './SidebarLink';

const Sidebar = () => {
  return (
    <div className='hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full'>
      <div className='flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24'>
        <Image src='https://rb.gy/ogau5a' alt='' width={30} height={30} />
      </div>
      <div className='space-y-2.5 mt-4 mb-2.5 xl:ml-24'>
        <SidebarLink text='Home' Icon={HomeIcon} active />
        <SidebarLink text='Explore' Icon={HashtagIcon} />
        <SidebarLink text='Notifications' Icon={BellIcon} />
        <SidebarLink text='Messages' Icon={InboxIcon} />
        <SidebarLink text='Bookmarks' Icon={BookmarkIcon} />
        <SidebarLink text='Lists' Icon={ClipboardDocumentCheckIcon} />
        <SidebarLink text='Profile' Icon={UserIcon} />
        <SidebarLink text='More' Icon={ChatBubbleOvalLeftEllipsisIcon} />
      </div>
      <button
        className='hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg 
      font-bold shadow-md hover:bg-[#1a8cd8]'
      >
        Tweet
      </button>
      <div
        className='text-[#d9d9d9] flex items-center justify-center
      hoverAnimation xl:ml-auto xl:-mr-5 mt-auto'
      >
        <img
          src='https://www.mp3pc.com/uploads/6eeccec7133bbda371af7c12c2342986.jpg'
          alt=''
          className='h-10 w-10 rounded-full xl:mr-2.5'
        />
        <div class='hidden xl:inline leading-5'>
          <h4 className='font-bold text-white'>firebase 1885</h4>
          <p className='text-[#6e767d]'>@firebase1885</p>
        </div>
        <EllipsisHorizontalIcon className='h-5 hidden xl:inline ml-10' />
      </div>
    </div>
  );
};

export default Sidebar;
