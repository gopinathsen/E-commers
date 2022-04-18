import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Login from '../Authentication/Login/Login'
import Reg from '../Authentication/Registration/Reg'
import Details from '../Component/Details/Details'
import Home from '../Component/Home/Home'
import Header from '../Layout/Header'
import PNF from '../Component/PageNotFound/PNF'
import ProtectedRoutes from './ProtectedRoutes'

export default function Rootroutes() {
  return (
    
    <Router>
      <Header />
       <Routes>
          <Route path="" element={<Home />} />
           
             <Route element={<ProtectedRoutes/>}>
             <Route path="DetailsPage" element={<Details/>} />           
            </Route>
            <Route path="RegPage" element={<Reg />} />
            <Route path="LoginPage" element={<Login />} />
            <Route path="*" element={<PNF />} />
                
        </Routes>
     
    </Router>
  )
}
