
import { MailtrapPage } from "../mailtrap/mailtrap";
import { Sandbox } from "../mailtrap/sandbox";
import { Billing } from "../mailtrap/billing";
import { Route, Routes } from "react-router-dom";
import { Mailhome } from "./home";

export const Allmailtraprout=()=>{
    return(
      <>
      <Routes>
      <Route path="/mailtrap" element={<Mailhome/>}></Route>
      <Route path="/billing" element={<Billing/>}></Route>
      <Route path="/sandbox" element={<Sandbox/>}></Route>
      </Routes>
      </>
    )
  }