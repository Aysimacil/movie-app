import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const {currentuser}= useSelector((state) => state.auth);
  return currentuser ? <Outlet /> : <Navigate to="/login"/>
}

export default PrivateRouter
