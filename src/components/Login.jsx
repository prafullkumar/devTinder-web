import React, { use } from "react";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../utils/constants";

function Login() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [error, setError] = useState("");
   const [email, setEmail] = React.useState("piyaa@gmail.com");
    const [password, setPassword] = React.useState("Tupe@123");

    const loginSubmit=async()=>{    
    try{const Data=   await axios.post(BASE_URL+"/login",
    {
    email,
    password,
    },
    { withCredentials: true }
    )
        dispatch(addUser(Data.data) );
        return navigate("/feed");
    }catch(err){
    setError(err.response?.data?.error || "Login failed!");
    console.log("Login error:",err);
  }

  }
//     const loginSubmit = async () => {
//   const response = await fetch("http://localhost:3000/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email, password }),
//     credentials: "include",
//   });
//   const data = await response.json();
//   console.log(data);
// };



   
  return (

      
    <div className="flex items-center justify-center p-5 w-full bg-gray-100">
      <div className="bg-white rounded-xl shadow-md p-8 w-96">
        <h2 className="text-center text-lg font-semibold mb-6">Login</h2>
        <label className="label">
          <span className="label-text font-medium">Email</span>
        </label>
        <input
          type="email"
          className="input input-bordered w-full mb-3"
          placeholder="Enter your email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <label className="label">
          <span className="label-text font-medium">Password</span>
        </label>
        <input
          type="password"
          className="input input-bordered w-full mb-5"
          placeholder="Enter your password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <div className="text-red-500">{error}</div>
        <button className="btn bg-black text-white w-full hover:bg-gray-800" onClick={loginSubmit}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
