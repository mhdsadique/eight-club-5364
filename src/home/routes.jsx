

import { Route, Routes } from "react-router-dom";
// import PrivateRoute from "../Components/PrivateRoute";
// import Dashboard from "./Dashboard";
import {Home} from "./home";
import Login from "./login";
import { MailtrapPage } from "../mailtrap/mailtrap";
import { Sandbox } from "../mailtrap/sandbox";
import { Billing } from "../mailtrap/billing";
import { Mailhome } from "../mailtrap/home";
import { Payment } from "../mailtrap/payment";

function AllRoutes() {
  // console.log(Dashboard)
  return <div>{/* Add Home, Login and dashboard  */}
  
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/mailtrap" element={<Mailhome/>}></Route>
    {/* <Route path="/billing" element={<Billing/>}></Route>
    <Route path="/sandbox" element={<Sandbox/>}></Route> */}
        {/* <Route path="/mailtrap" element={<Mailhome/>}></Route> */}
      <Route path="/billing" element={<Billing/>}></Route>
      <Route path="/sandbox" element={<Sandbox/>}></Route>
      <Route path="/payment" element={<Payment/>}></Route>
  </Routes>
  </div>;
}

export default AllRoutes;


