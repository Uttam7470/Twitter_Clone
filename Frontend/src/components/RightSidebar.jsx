import React from "react";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

function RightSidebar({otherUsers}) {
  return (
    <div className="w-[25%]">
      <div className="flex items-center p-2 bg-gray-200 rounded-full outline-none">
        <div>
          <CiSearch size="24px" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent px-2"
        />
      </div>
      <div className="p-3 bg-gray-100 rounded-2xl my-4">
        <h1 className="font-bold text-lg">Who to follow</h1>
        {
          otherUsers?.map((user)=>{
            return (
               
              <div key={user?._id} className="flex items-center justify-between my-3 border-b border-gray-300">
              <div className="flex py-4">
                <div>
                  <Avatar
                    src="https://t4.ftcdn.net/jpg/05/90/45/35/360_F_590453560_ugMuPncnGYB6XnJqmC8xiPQx4eg3jmMD.jpg"
                    size="45"
                    round={true}
                  />
                </div>
                <div className="ml-3  items-center">
                  <h1 className="font-bold">{user?.name}</h1>
                  <p className="text-sm">{`@${user?.username}`}</p>
                </div>
              </div>
              <div>
                <Link to={`/profile/${user?._id}`}>
                <button className="px-3 py-1 bg-black text-white rounded-full font-semibold text-sm ml-3 ">
                  Profile
                </button>
                </Link>
              </div>
            </div> 
            
            )
          })
        }
       

      </div>
    </div>
  );
}

export default RightSidebar;


