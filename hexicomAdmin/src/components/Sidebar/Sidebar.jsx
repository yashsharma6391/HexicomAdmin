import React from 'react'
import { Link } from 'react-router-dom'
import { asserts } from '../../assets/asserts'
const Sidebar = ({sidebarVisible}) => {
  return (
     <div className={`border-end bg-white ${sidebarVisible ? '': 'd-none'}`} id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom bg-light">
                    <img src={asserts.logo} alt="" height={50} width={50} />
                    <span className='align-item-center'>Admin</span>
                </div>
                
                <div className="list-group list-group-flush">
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to={"/add"}>
                        <i className='bi bi-plus-circle m-2'></i>AddService</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to={"/list"}>
                      <i className='bi bi-list-ul m-2'></i>List of Service</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to={"/orders"}>
                    <i className='bi bi-file-earmark-text m-2'></i>Job Application</Link>

                </div>
            </div>
  )
}

export default Sidebar