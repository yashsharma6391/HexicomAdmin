import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import ListFood from './pages/ListService/ListService'
import Orders from './pages/Orders/Orders'
import Sidebar from './components/Sidebar/Sidebar'
import Menubar from './components/Menubar/Menubar'
  import { ToastContainer, toast } from 'react-toastify';
import AddService from './pages/AddService/AddService'
import Update from './pages/ServiceUpdate/Update'

function App() {
 const [sidebarVisible, setSidebarVisible] = useState(true)
 const toggleSidebar = () =>{
   setSidebarVisible(!sidebarVisible);
 }
  return (
    <>
      
        <div className="d-flex" id="wrapper">
            
           <Sidebar sidebarVisible={sidebarVisible}/>
           
            <div id="page-content-wrapper">
                
               <Menubar toggleSidebar={toggleSidebar}/>
               <ToastContainer/>
                <div className="container-fluid">
                   <Routes>
                    <Route path='/add' element={<AddService/>}/>
                    <Route path='/list' element={<ListFood/>}/>
                    <Route path='/orders' element={<Orders/>}/>
                    <Route path='/' element={<ListFood/>}/>
                    <Route path="/edit/:id" element={<Update />} />
                   </Routes>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
