import Image from 'next/image'
import SidebarLink from './SidebarLink'
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div div className="hidden sm:flex flex-col items-center 
    xl:items-start xl:w-[340px] p-2 fixed h-full">

        <div className='flex items-center justify-center w-14 
        h-14 hoverAnimation p-0 xl:ml-24'>
            <Image src='https://rb.gy/ogau5a' width={30} height={30} />
        
        </div>

        <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
          <SidebarLink text="Home" Icon={HomeIcon} active />
          <SidebarLink text="Explore" Icon={HashtagIcon} />
          <SidebarLink text="Notifications" Icon={BellIcon} />
          <SidebarLink text="Messages" Icon={InboxIcon} />
          <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
          <SidebarLink text="Lists" Icon={ClipboardListIcon} />
          <SidebarLink text="Profile" Icon={UserIcon} />
          <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
        </div>

        <button className='hidden xl:inline ml-auto bg-[#1d9bf0]
        rounded-full w-40 h-[52px] text-lg text-white font-bold mt-2 file:
        shadow-md hover:bg-white transition duration-200 ease-out hover:text-black
        '> Tweet </button>
        

      <div className='
        text-[#d9d9d9] flex items-center justify-center 
        mt-auto hoverAnimation xl:ml-auto xl:-mr-5
        max-w-[300px]'>
          <img src='https://rb.gy/ogau5a' alt='' 
          className='h-7 w-7 rounded-full xl:mr-2.5'/>
  
          <div className='hidden xl:inline leading-5'>
            <h4 className='font-bold'> Embershan </h4>
            <p className='text-[#6e767d]'> @embershan </p>
          </div>

          <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />

      </div>

    </div>
  )
}

export default Sidebar