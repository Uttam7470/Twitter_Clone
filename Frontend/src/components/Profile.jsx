// import React from 'react'
// import { MdArrowBack } from "react-icons/md";
// import { Link, useParams } from 'react-router-dom';
// import Avatar from 'react-avatar';
// import { useDispatch, useSelector } from 'react-redux'
// import useGetProfile from './hooks/useGetProfile'

// function Profile() {
//     const {user,profile} = useSelector( store => store.user)
//     const {id} = useParams(); 
//     console.log(id);
//     useGetProfile(id);
//     const dispatch = useDispatch(); 
    
//     // useGetProfile(user?._id);
  
//   return (
//     <div className='w-[50%] border-l border-r border-gray-300 px-4'>
//         <div>
//             <div className='flex items-center  py-2'>
//                 <Link to='/' className='p-2 rounded-full hover:bg-gray-100  hover:cursor-pointer '>
//                     <MdArrowBack  size={"24px"}/>
//                 </Link>
//                 <div className='ml-2 '>
//                     <h1 className='font-bold text-lg'>{profile?.name}</h1>
//                     <p className='text-gray-500 text-sm'>10 Posts</p>
//                 </div>
//             </div>
//             <img src="https://pbs.twimg.com/profile_banners/1581707412922200067/1693248932/1080x360" alt="Banner" />
//             <div className='absolute top-48 ml-4 border-4 border-white rounded-full'>
//             <Avatar src='https://t4.ftcdn.net/jpg/05/90/45/35/360_F_590453560_ugMuPncnGYB6XnJqmC8xiPQx4eg3jmMD.jpg' size="100" round={true} />
//             </div>
//             <div className='text-right m-4'>
//                 {
//                     profile._id === user?._id ? (
//                         <button className='px-4 py-1 rounded-full  border border-gray-400  hover:bg-gray-200 font-semibold'>Edit Profile</button>
//                     ) : (

//                         <button className='px-4 py-1  bg-black rounded-full  border   text-white font-semibold'>Follow</button>
//                     )
//                 }
               
//             </div>
//             <div className='m-4 pt-0'>
//                 <h1 className='font-bold text-xl'>{profile?.name}</h1>
//                 <p>{`@${profile?.username}`}</p>
//             </div>
//             <div className='m-4 text-sm'>
//                 <p>🌐 Exploring the web's endless possibilities with MERN Stack 🚀 | Problem solver by day, coder by night 🌙 | Coffee lover ☕ | Join me on this coding journey!</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Profile




import React from 'react';
import { MdArrowBack } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import useGetProfile from './hooks/useGetProfile';
import { USER_API_END_POINT } from '../utils/constant';
import toast from 'react-hot-toast'

function Profile() {
    const { user, profile } = useSelector(store => store.user);
    const { id } = useParams();
    console.log(id);
    
    useGetProfile(id);
    const dispatch = useDispatch();

   async function followAndunfollowHandler(){
        if(user.following.includes(id)){
            try {
                const res = await axios.post(`${USER_API_END_POINT}/unfollow/${id}` , {id:user?._id});
                console.log(res);
                toast.success(res.data.message);
            } catch (error) {
                toast.error(error.response.data.message)
                console.log(error);
                
            }
        }
        else{
            try {
                const res = await axios.post(`${USER_API_END_POINT}/follow/${id}` , {id:user?._id});
                console.log(res);
                toast.success(res.data.message);
            } catch (error) {
                toast.error(error.response.data.message)
                console.log(error);
                
            }

        }
    }
  
    // Add checks for `profile` and `user` before trying to access properties
    const isCurrentUser = profile && user && profile._id === user._id;
  
    return (
        <div className='w-[50%] border-l border-r border-gray-300 px-4'>
            <div>
                <div className='flex items-center py-2'>
                    <Link to='/' className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
                        <MdArrowBack size={"24px"} />
                    </Link>
                    <div className='ml-2'>
                        {/* Safely accessing profile data */}
                        <h1 className='font-bold text-lg'>{profile?.name || 'Loading...'}</h1>
                        <p className='text-gray-500 text-sm'>10 Posts</p>
                    </div>
                </div>
                <img src="https://pbs.twimg.com/profile_banners/1581707412922200067/1693248932/1080x360" alt="Banner" />
                <div className='absolute top-48 ml-4 border-4 border-white rounded-full'>
                    <Avatar src='https://t4.ftcdn.net/jpg/05/90/45/35/360_F_590453560_ugMuPncnGYB6XnJqmC8xiPQx4eg3jmMD.jpg' size="100" round={true} />
                </div>
                <div className='text-right m-4'>
                    {/* Conditional rendering based on the user and profile */}
                    {isCurrentUser ? (
                        <button className='px-4 py-1 rounded-full border border-gray-400 hover:bg-gray-200 font-semibold'>Edit Profile</button>
                    ) : (
                        <button onClick={followAndunfollowHandler} className='px-4 py-1 bg-black rounded-full border text-white font-semibold'>{user.following.includes(id) ? "Following" : "Follow"}</button>
                    )}
                </div>
                <div className='m-4 pt-0'>
                    <h1 className='font-bold text-xl'>{profile?.name || 'Loading...'}</h1>
                    <p>{profile?.username ? `@${profile.username}` : ''}</p>
                </div>
                <div className='m-4 text-sm'>
                    <p>🌐 Exploring the web's endless possibilities with MERN Stack 🚀 | Problem solver by day, coder by night 🌙 | Coffee lover ☕ | Join me on this coding journey!</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
