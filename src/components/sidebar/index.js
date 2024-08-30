import Button from '@mui/material/Button';
//import {Button } from "bootstrap";
import { MdSpaceDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { FaCalendarTimes } from "react-icons/fa";
import { FaBookDead } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaTableCells } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";


const Sidebar = () => {
    return(
        <div className='flex'>
            <div className="sidebar w-1/2">
                <h6 className='a'>Main Pages</h6>
                <ul>
                    <li>
                        
                        <Button className='abc'><span className="icon"><FaUser /></span>My Profile<span className='arrow'><FaAngleRight/></span></Button>
                    </li>
                    <li>
                        
                        <Button className='abc'><span className="icon"><MdSpaceDashboard/></span>DashBoard<span className='arrow'><FaAngleRight/></span></Button>
                    </li>
                    <li>
                        
                        <Button className='abc'><span className="icon"><FaLock /></span>Authentication<span className='arrow'><FaAngleRight/></span></Button>
                    </li>
                    <li>
                        
                        <Button className='abc'><span className="icon"><FaCalendarTimes /></span>Calendar<span className='arrow'><FaAngleRight/></span></Button>
                    </li>
                    <li>
                        
                        <Button className='abc'><span className="icon"><FaBookDead /></span>Subjects<span className='arrow'><FaAngleRight/></span></Button>
                    </li>
                    <li>
                        
                        <Button className='abc'><span className="icon"><FaBookmark /></span>ComponentMarks<span className='arrow'><FaAngleRight/></span></Button>
                    </li>
                    <li>
                        
                        <Button className='abc'><span className="icon"><FaTableCells /></span>TimeTable<span className='arrow'><FaAngleRight/></span></Button>
                    </li>
                    <li>
                        
                        <Button className='abc'><span className="icon"><AiFillMessage /></span>Messages<span className='arrow'><FaAngleRight/></span></Button>
                    </li>
                    <li>
                        
                        <Button className='abc'><span className="icon"><IoIosNotifications /></span>Notifications<span className='arrow'><FaAngleRight/></span></Button>
                    </li>
                    <li>
                        
                        <Button className='abc'><span className="icon"><FaRegQuestionCircle /></span>Contact Us<span className='arrow'><FaAngleRight/></span></Button>
                    </li>
                    <li>
                        
                        <Button className='abc'><span className="icon"><IoMdSettings /></span>Settings<span className='arrow'><FaAngleRight/></span></Button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;