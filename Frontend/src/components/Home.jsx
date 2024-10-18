import React from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import '../index.css'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useOtherUsers from './hooks/useOtherUsers'
import useGetMyTweet from './hooks/useGetMyTweet'


function Home() {

  // Custom Hooks

  const {user,otherUsers} = useSelector(store=>  store.user)
 
  useOtherUsers(user?._id);
  useGetMyTweet(user?._id);

  return (
    <div className='flex justify-between w-[80%] mx-auto'>
        <LeftSidebar />
       <Outlet /> 
       <RightSidebar otherUsers={otherUsers} /> 
    </div>
  )
}

export default Home