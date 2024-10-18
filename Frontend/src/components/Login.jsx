import React, { useState } from "react";
import { USER_API_END_POINT } from "../utils/constant";
import axios from 'axios'
import {toast} from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/userSlice";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const[name, setName] = useState('');
  const[username, setUserName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function loginSignupHandler() {
    setIsLogin(!isLogin);
  }

  async function handleSubmit(e){
    e.preventDefault();
    console.log(name,username,email,password);

    if(isLogin){
        //login
        try {
            const response = await axios.post(`${USER_API_END_POINT}/login` ,{email,password},{
                headers : {
                    'Content-Type' : 'Application/json'
                },
                withCredentials : true
            });
            dispatch(getUser(response?.data?.user));
            console.log(response);
            if(response.data.success){
                navigate('/')
                toast.success(response.data.message)      
            }
            
        } catch (error) {
            toast.success(error.response.data.message)   
            console.log(error);
            
        }

    }else{
        // signup
        try {
            const response = await axios.post(`${USER_API_END_POINT}/register` ,{name,username,email,password},{
                headers : {
                    "Content-Type" : "Application/json"
                },
                withCredentials : true
            });
            console.log(response);
            if(response.data.success){
                setIsLogin(true)
                toast.success(response.data.message)   
                
            }
            
        } catch (error) {
            toast.success(error.response.data.message)  
            console.log(error);
            
        }
    }
    
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      <div className="flex items-center justify-evenly w-[80%] ">
        <div>
          <img
            src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10809.jpg?size=626&ext=jpg&ga=GA1.1.1290896349.1728882836&semt=ais_hybrid"
            alt=""
            width={"350px"}
          />
        </div>
        <div>
          <div className="my-5 mt-0">
            <h1 className="font-bold text-6xl">Happening now.</h1>
          </div>
          <h1 className="mt-4 mb-2 text-2xl font-bold">
            {isLogin ? "Login" : "Signup"}
          </h1>
          <form  onSubmit={handleSubmit} className="flex flex-col w-[60%]">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e)=>setName(e.currentTarget.value)}
                  className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold "
                />
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e)=>setUserName(e.currentTarget.value)}
                  className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold "
                />
              </>
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.currentTarget.value)}
              className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold "
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.currentTarget.value)}
              className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold "
            />
            <button className="bg-[#1e90ff] border-none py-2 my-3 rounded-full text-white font-lg font-semibold">
              {isLogin ? "Login" : "Create Account"}
            </button>
            <h1>
              {isLogin ? "Do not have a account?" : "Already have an account?"}{" "}
              <span
                onClick={loginSignupHandler}
                className="cursor-pointer underline font-bold text-sky-500 "
              >
                {isLogin ? "Signup" : "Login"}
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
