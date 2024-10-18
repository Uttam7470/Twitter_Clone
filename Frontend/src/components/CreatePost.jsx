import axios from 'axios';
import React, { useState } from 'react'
import Avatar from 'react-avatar'
import { CiImageOn } from "react-icons/ci";
import { TWEET_API_END_POINT } from '../utils/constant';
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux';
import { getAllTweet, getIsActive, getRefresh } from '../redux/tweetSlice';

function CreatePost() {

    const[description, setDescription] = useState('')
    const {user} = useSelector(store => store.user)
    const{isActive} = useSelector(store => store.tweet)
    const dispatch = useDispatch();

   async function handleSubmit(){
        try {
            const res = await axios.post(`${TWEET_API_END_POINT}/create`, {description, id : user?._id},{
                withCredentials: true
            });
            dispatch(getRefresh())
            if(res.data.success){
                toast.success(res.data.message)
            }
            
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error);
            
        }
        setDescription('');
    }

    function forYouHandler(){
        // alert('forYou')
        dispatch(getIsActive(true))
    }
   
    function followingHandler(){
        // alert('following')
        dispatch(getIsActive(false))
    }
   

  return (
    <div className='w-[100%]'>
        <div>
        <div className='flex item-center justify-evenly border-b border-gray-200'>
            <div onClick={forYouHandler} className={`${isActive ? "border-b-4 border-blue-600" : "border-4 border-transparent" } cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3`} >
                <h1 className='font-semibold text-gray-600 text-lg '>For You</h1>
            </div>
            <div onClick={followingHandler} className={`${!isActive ? "border-b-4 border-blue-600" : "border-4 border-transparent" } cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3`} >
                <h1 className='font-semibold text-gray-600 text-lg '>Following</h1>
            </div>
        </div>
        <div>
            <div className='flex item-center p-4'>
                <div>
                <Avatar src='https://t4.ftcdn.net/jpg/05/90/45/35/360_F_590453560_ugMuPncnGYB6XnJqmC8xiPQx4eg3jmMD.jpg' size="45" round={true} />
                </div>
                <input value={description} onChange={(e)=>setDescription(e.currentTarget.value)} className='w-full outline-none border-none text-lg ml-3' type='text' placeholder='What is happening?!'/>
            </div>
            <div className='flex items-center justify-between p-4 border-b border-gray-300'>
                <div>
                    <CiImageOn size={'24px'}/>
                </div>
                <button onClick={handleSubmit} className='bg-[#1e90ff] px-4 py-1 border-none rounded-full text-white text-lg'>Post</button>
            </div>
        </div>
        </div> 
    </div>
  )
}

export default CreatePost