// rafce use this to create react component
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from "../utils/userSlice";
import BASE_URL from "../utils/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NavTab = () => {
const userData = useSelector((store) => store.userInfo);
const dispatch = useDispatch();
const navigate=useNavigate();
  

     const handleLogout=async()=>{
    try{
    const logoutRes= await axios.post(BASE_URL+"/logout",{},{
    withCredentials:true,
    });
    
    if(logoutRes.data.status===200){
        dispatch(removeUser());
    return navigate("/login");
    }
    }catch(err){
    console.log("Logout error:",err);
    }
    }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">🧑🏻‍💻DevTinder👩🏻‍💻</a>
      </div>

      <div className="flex items-center gap-2">
        {/* 👇 Added welcome message */}
        {userData && userData.firstName && (
          <span className="text-md font-semibold hidden sm:block">
            👋 Welcome, {userData.firstName}
          </span>
        )}

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mx-5">
            {userData && userData.photo && (
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={userData.photo}
                />
              </div>
            )}
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li><a>Settings</a></li>
            <li><Link onClick={handleLogout}>Logout</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavTab;
