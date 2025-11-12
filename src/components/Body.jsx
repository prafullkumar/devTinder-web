import { Outlet } from "react-router-dom";
import NavTab from "./NavTab";
import Footer from "./Footer";

 const Body = () => {
  return (
    <div> 
      <NavTab />
      <Outlet />
      <Footer/>
    </div>
  )
}
export default Body;    