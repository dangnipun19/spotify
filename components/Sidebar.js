import Image from "next/image";
import {AiFillHome} from 'react-icons/ai'
import {RiCompassFill} from 'react-icons/ri'
import {FaPodcast} from 'react-icons/fa'
import {BiLibrary} from 'react-icons/bi'
import {AiFillClockCircle} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'
 
function Sidebar() {
  return (
    <section className="fixed top-0 z-40 flex flex-col p-4 items-center bg-black w-[90px] h-screen space-y-8">
      <Image src='https://rb.gy/xkacau' width={56} height={56} objectFit='contain'/>
      <div className="flex flex-col space-y-8" > 
        <AiFillHome size={50} className="sidebarIcon text-white opacity-[0.85]"></AiFillHome>
        <RiCompassFill size={50} className="sidebarIcon text-white-100"></RiCompassFill>
        <FaPodcast size={50} className="sidebarIcon"></FaPodcast>
        <BiLibrary size={50} className="sidebarIcon"></BiLibrary>
        <AiFillClockCircle size={50} className="sidebarIcon"></AiFillClockCircle>
        <BsThreeDots size={50} className="sidebarIcon"></BsThreeDots>
          
      </div>
    </section>
    
  )
}

export default Sidebar;