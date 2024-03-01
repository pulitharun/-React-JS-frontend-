import Homescreen from "./Homescreen"
import "./Home.css"

import { useSelector } from "react-redux"
import Category from "./category"
import Dashboard from "./dashboard"
export default function HomePage() {
  const isLoggedIn = useSelector((state) => state.auth.user);
  return (
    <div>
      {isLoggedIn ? <Dashboard /> : <Homescreen />}
      <Category/>
    </div>
  );
}