//dashboard.js

import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { logoutUser } from "./loginslice"
import { useSelector } from "react-redux"
import "./dashboard.css"

const Dashboard = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <div className="header">
      <div>
        <h1>Welcome to Dashboard</h1>
      </div>
      <div className="options">
        <ul>
          <Link to={"/"} className="options">Home</Link>
          <Link to = {'/category'} className="options">Categories</Link>
          <Link to={"/orders"} className="options">Orders</Link>
          <Link to={"/cart"} className="options">Cart</Link><br></br>
          {isAuthenticated && <button onClick={logoutHandler}>Logout</button>}
        </ul>
      </div>
    </div>
  );
};
export default Dashboard;