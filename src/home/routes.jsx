

import { Route, Routes } from "react-router-dom";
// import PrivateRoute from "../Components/PrivateRoute";
// import Dashboard from "./Dashboard";
import {Home} from "./home";
import Login from "./login";

function AllRoutes() {
  // console.log(Dashboard)
  return <div>{/* Add Home, Login and dashboard  */}
  
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    {/* <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}></Route> */}
  </Routes>
  </div>;
}

export default AllRoutes;
