
import React  from "react";
import { Route , BrowserRouter, Routes} from "react-router-dom";
import { LoginPage } from "../src/pages/login-page";
import { RegisterPage } from "./pages/register-page";
import { PagesPosts } from "./pages/pagesPosts";

import './index.css';

export const  AppRouter =() => {
  return (
    <BrowserRouter>
      <Routes>
            < Route  path='/' element={<LoginPage/>}/>
            < Route   path='/posts' element={< PagesPosts/>}/>
            < Route  path='/register' element={<RegisterPage/>}/>
        
      </Routes>
    </BrowserRouter>
  )
};
