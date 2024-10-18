// import React from 'react'
// import { MdHomeFilled } from "react-icons/md";
// import { FaSearch } from "react-icons/fa";
// import { IoMdNotifications } from "react-icons/io";
// import { FaUser } from "react-icons/fa";
// import { IoBookmark } from "react-icons/io5";
// import { IoMdLogOut } from "react-icons/io";
// import '../index.css'
// function LeftSidebar() {
//   return (
//     <div className='w-[25%]'>
//         <div >
//             <div>
//                 <img className='ml-5' width={"30px"} src="https://img.icons8.com/?size=48&id=alAhL58o7uLn&format=png" alt="twitter-logo" />
//             </div>
//             <div className='my-4'>
//                 <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
//                     <div><MdHomeFilled size={'24px'}/></div>
//                    <h1 className='font-bold text-lg ml-2 '>Home</h1>
//                 </div>
//                 <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
//                     <div><FaSearch  size={'24px'}/></div>
//                    <h1 className='font-bold text-lg ml-2 '>Explore</h1>
//                 </div>
//                 <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
//                     <div><IoMdNotifications size={'24px'}/></div>
//                    <h1 className='font-bold text-lg ml-2 '>Notification</h1>
//                 </div>
//                 <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
//                     <div><FaUser size={'24px'}/></div>
//                    <h1 className='font-bold text-lg ml-2 '>Profile</h1>
//                 </div>
//                 <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
//                     <div><IoBookmark size={'24px'}/></div>
//                    <h1 className='font-bold text-lg ml-2 '>BookMark</h1>
//                 </div>
//                 <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
//                     <div><IoMdLogOut size={'24px'}/></div>
//                    <h1 className='font-bold text-lg ml-2 '>Logout</h1>
//                 </div>

//                 <button className='px-4 py-2 border-none text-md bg-[#1e90ff] w-full rounded-full text-white font-bold hover:bg-[#1873cc]'>Post</button>
                
//             </div>
//         </div>
//     </div>
//   )
// }

// export default LeftSidebar


// import React from 'react'
// import { MdHomeFilled } from "react-icons/md";
// import { FaSearch } from "react-icons/fa";
// import { IoMdNotifications } from "react-icons/io";
// import { FaUser } from "react-icons/fa";
// import { IoBookmark } from "react-icons/io5";
// import { IoMdLogOut } from "react-icons/io";
// import '../index.css';

// function LeftSidebar() {
//   return (
//     <div className='w-[25%]'>
//       <div>
//         <div>
//           <img className='ml-5' width={"30px"} src="https://img.icons8.com/?size=48&id=alAhL58o7uLn&format=png" alt="twitter-logo" />
//         </div>
//         <div className='my-4'>
//           {/* Sidebar options */}
//           <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
//             <div className='flex items-center justify-center w-[40px] h-[40px]'><MdHomeFilled size={'24px'} /></div>
//             <h1 className='font-bold text-lg ml-4'>Home</h1>
//           </div>
//           <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
//             <div className='flex items-center justify-center w-[40px] h-[40px]'><FaSearch size={'24px'} /></div>
//             <h1 className='font-bold text-lg ml-4'>Explore</h1>
//           </div>
//           <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
//             <div className='flex items-center justify-center w-[40px] h-[40px]'><IoMdNotifications size={'24px'} /></div>
//             <h1 className='font-bold text-lg ml-4'>Notification</h1>
//           </div>
//           <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
//             <div className='flex items-center justify-center w-[40px] h-[40px]'><FaUser size={'24px'} /></div>
//             <h1 className='font-bold text-lg ml-4'>Profile</h1>
//           </div>
//           <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
//             <div className='flex items-center justify-center w-[40px] h-[40px]'><IoBookmark size={'24px'} /></div>
//             <h1 className='font-bold text-lg ml-4'>BookMark</h1>
//           </div>
//           <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
//             <div className='flex items-center justify-center w-[40px] h-[40px]'><IoMdLogOut size={'24px'} /></div>
//             <h1 className='font-bold text-lg ml-4'>Logout</h1>
//           </div>

//           {/* Post Button */}
//           <button className='px-4 py-2 border-none text-md bg-[#1e90ff] w-full rounded-full text-white font-bold hover:bg-[#1873cc]'>
//             Post
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LeftSidebar;



import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import '../index.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function LeftSidebar() {
  const {user} = useSelector(store=>store.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className='w-[20%]'>
      <div>
        <div>
          <img className='ml-4' width={"30px"} src="https://img.icons8.com/?size=48&id=alAhL58o7uLn&format=png" alt="twitter-logo" />
        </div>
        <div className='my-4'>
          {/* Sidebar options */}
          <Link to="/" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div className='flex items-center justify-center w-[30px] h-[40px]'><MdHomeFilled size={'24px'} /></div>
            <h1 className='font-bold text-lg ml-4'>Home</h1>
          </Link>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div className='flex items-center justify-center w-[30px] h-[40px]'><FaSearch size={'24px'} /></div>
            <h1 className='font-bold text-lg ml-4'>Explore</h1>
          </div>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div className='flex items-center justify-center w-[30px] h-[40px]'><IoMdNotifications size={'24px'} /></div>
            <h1 className='font-bold text-lg ml-4'>Notification</h1>
          </div>
          <Link to={`/profile/${user?._id}`} className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div className='flex items-center justify-center w-[30px] h-[40px]'><FaUser size={'24px'} /></div>
            <h1 className='font-bold text-lg ml-4'>Profile</h1>
          </Link>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div className='flex items-center justify-center w-[30px] h-[40px]'><IoBookmark size={'24px'} /></div>
            <h1 className='font-bold text-lg ml-4'>BookMark</h1>
          </div>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div className='flex items-center justify-center w-[30px] h-[40px]'><IoMdLogOut size={'24px'} /></div>
            <h1 className='font-bold text-lg ml-4'>Logout</h1>
          </div>

          {/* Post Button */}
          <button className='px-4 py-2 border-none text-md bg-[#1e90ff] w-full rounded-full text-white font-bold hover:bg-[#1873cc]'>
            Post
          </button>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar;


