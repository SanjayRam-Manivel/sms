import React,{useState} from "react";

import { Link } from "react-router-dom";
//import logo from '../../assests/images/logo.png';
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import Search from "./Search";
import Avatar from '@mui/material/Avatar';




const Header = () =>{

    return(
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        {/*Logo Wraooer*/}
                        <div className="col-sm-1 part-1">
                             <Link to={'./'} className="d-flex align-items-center logo">
                                {/* <img src={logo}*/}
                                <span className="ml-2">SKCT</span>
                             </Link>                        
                        </div>
                        <div className="col-sm-3 d-flex align-items-center part-2 pl-4">
                             <Button className="rounded-circle mr-3"> 
                                <MdMenuOpen/>
                             </Button>
                             <Search/>
                        </div>
                        
                        <div className="col-sm-8 d-flex align-items-center justify-content-end part3">
                            <Button className="rounded-circle mr-3"><MdLightMode/></Button>
                            <Button className="rounded-circle mr-3"><AiFillMessage/></Button>
                            <Button className="rounded-circle mr-3"><IoIosNotifications/></Button>
                            <div className="myAccWrapper">
                            <Button className="myacc d-flex align-items-center ">
                                <div className="userImg">
                                    <span className="rounded-circle">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"/>
                                    </span>
                                </div>
                                <div className="userInfo">
                                    <h4>UserName...</h4>
                                    <p className="mb-0">@Username123</p>
                                </div>
                                </Button>
                            </div>
                             </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;