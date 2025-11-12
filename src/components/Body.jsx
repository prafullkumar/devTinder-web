import { Outlet, useNavigate } from "react-router-dom";
import NavTab from "./NavTab";
import Footer from "./Footer";
import axios from "axios";
import BASE_URL from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser } from "../utils/userSlice";

 const Body = () => {

  const userInfo= useSelector((store)=>store.userInfo);

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const fetchUser=async ()=>{
        if(userInfo){
     
          return;
        }
        try{    
          const response= await axios.get(BASE_URL+"/profile",
          { 
            withCredentials: true, 
          });

          console.log("Fetched user data:", response.data);
          dispatch(addUser(response.data));
          
         }catch(err){
          console.log("Error fetching user data:",err);
          if(err.response && err.response.status===401){  
            return navigate("/login");
          }
          }
     
  }
  useEffect(()=>{
    fetchUser();
  },[]);

  return (
    <div> 
      <NavTab />
      <Outlet />
      <Footer/>
    </div>
  )
}
export default Body;    