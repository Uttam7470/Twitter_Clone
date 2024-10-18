import React from "react";
import Avatar from "react-avatar";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { TfiCommentAlt } from "react-icons/tfi";
import { TfiComments } from "react-icons/tfi";
import { GoBookmark } from "react-icons/go";
import { TWEET_API_END_POINT } from "../utils/constant";
import { useSelector } from "react-redux";
import store from "../redux/store";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getRefresh } from "../redux/tweetSlice";
import axios from "axios";
function Tweet({tweet}) {
const {user} = useSelector(store => store.user)
const dispatch = useDispatch();
  // async function likeOrDislikeHandler(){
  //   try {
  //     const res = await axios.put(`${TWEET_API_END_POINT}/like/${id}` ,{id:user?._id},{
  //       withCredentials: true
  //     })
  //     dispatch(getRefresh())
  //     if(res.data.success){
  //       toast.success(res.data.message)
  //     }
  //   } catch (error) {
  //     toast.error(error.response.data.message)
  //     console.log(error);
      
  //   }
  // }
  async function likeOrDislikeHandler(id) {
  try {
    const res = await axios.put(`${TWEET_API_END_POINT}/like/${id}`, { id: user?._id}, {
      withCredentials: true
    });
    dispatch(getRefresh());  
      toast.success(res.data.message);
    
  } catch (error) {
    toast.error(error.response?.data?.message || "An error occurred");
    console.log(error);
  }
}

 async function deleteTweetHandler(id){

  try {
    axios.defaults.withCredentials = true;
    const res = await axios.delete(`${TWEET_API_END_POINT}/delete/${id}`)
    console.log(res);
    dispatch(getRefresh())
    toast.success(res.data.message)
    
  } catch (error) {
    toast.error(error.response.data.message)
    console.log(error);
    
  }

}
  return (
    <div className="border-b border-gray-200 ">
      <div>
        <div className="flex p-4">
          <Avatar
            src="https://img.freepik.com/premium-photo/3d-cartoon-software-developer-generative-ai_644690-101590.jpg?size=626&ext=jpg&ga=GA1.1.1290896349.1728882836&semt=ais_hybrid"
            size="45"
            round={true}
          />
          <div className="ml-2 w-full">
            <div className="flex items-center">
              <h1 className="font-bold">{tweet?.userDetails[0]?.name}</h1>
              <p className="text-gray-500 text-sm ml-1">{`@${tweet?.userDetails[0]?.username}`}.1m</p>
            </div>
            <div>
              <p>{tweet?.description}</p>
            </div>
            <div className="flex justify-between my-2">
              <div className="flex items-center">
                <div onClick={() => likeOrDislikeHandler(tweet?._id)} className="p-2 hover:bg-red-200 rounded-full cursor-pointer">
                <IoMdHeartEmpty size={"23px"} />
                </div>
                <p>{tweet?.like?.length}</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-green-200 rounded-full cursor-pointer">
                <TfiComments  size={"22px"} />
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-sky-200 rounded-full cursor-pointer">
                <GoBookmark size='23px'/>
                </div>
                <p>0</p>
              </div>
              {
                user?._id === tweet?.userId && (
                  <div  onClick={()=>deleteTweetHandler(tweet?._id)} className="flex items-center">
                  <div className="p-2 hover:bg-red-300 rounded-full cursor-pointer">
                  <MdDeleteOutline size='24px'/>
                  </div>
                  
                </div>
                )
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
