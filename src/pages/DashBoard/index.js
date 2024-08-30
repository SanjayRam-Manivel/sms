import React from "react";
import Button from '@mui/material/Button';
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import Stack from '@mui/material/Stack';
 
             


const DashBoard = () =>{

    return(
    <section id="dash">
        <div>
        
        <div className="table-responsive mt-3">
        <table className="table table-bordered">
            <thead className="thead-dark">
                <tr>
                    <th>S.No</th>
                    <th>Reg No</th>
                    <th>Name</th>
                    <th>E-Mail</th>
                    <th>Attanance(%)</th>
                    <th>Mark</th>
                    <th>Rank</th>
                    <th>Phone No</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>  
                        <tr>  
                            <td className="border border-gray-300 p-2">1</td>  
                            <td className="border border-gray-300 p-2">REG123</td>  
                            <td className="border border-gray-300 p-2">Jane Smith</td>  
                            <td className="border border-gray-300 p-2">jane.smith@example.com</td>   
                            <td className="border border-gray-300 p-2">98%</td>  
                            <td className="border border-gray-300 p-2">494</td>
                            <td className="border border-gray-300 p-2">1</td>  
                            <td className="border border-gray-300 p-2">123-456-789 </td> 
                            <div className="action d-flex align-items-center ">
                                <Button><span><FaEye /></span></Button>
                                <Button><span><MdEdit /></span></Button>
                                <Button><span><MdDelete /></span></Button>
                            </div> 
                        </tr>  
                        <tr>  
                            <td className="border border-gray-300 p-2">2</td>  
                            <td className="border border-gray-300 p-2">REG124</td>  
                            <td className="border border-gray-300 p-2">Jane Smith</td>  
                            <td className="border border-gray-300 p-2">jane.smith@example.com</td>  
                            <td className="border border-gray-300 p-2">90%</td>
                            <td className="border border-gray-300 p-2">480</td>  
                            <td className="border border-gray-300 p-2">2</td>  
                            <td className="border border-gray-300 p-2">234-567-8901</td>  
                            <div className="action d-flex align-items-center ">
                                <Button><span><FaEye /></span></Button>
                                <Button><span><MdEdit /></span></Button>
                                <Button><span><MdDelete /></span></Button>
                            </div> 
                        </tr>  
                        <tr>  
                            <td className="border border-gray-300 p-2">3</td>  
                            <td className="border border-gray-300 p-2">REG125</td>  
                            <td className="border border-gray-300 p-2">Emily Johnson</td>  
                            <td className="border border-gray-300 p-2">emily.johnson@example.com</td>  
                            <td className="border border-gray-300 p-2">85%</td>
                            <td className="border border-gray-300 p-2">487</td>  
                            <td className="border border-gray-300 p-2">3</td>  
                            <td className="border border-gray-300 p-2">345-678-9012</td>  
                            <div className="action d-flex align-items-center ">
                                <Button><span><FaEye /></span></Button>
                                <Button><span><MdEdit /></span></Button>
                                <Button><span><MdDelete /></span></Button>
                            </div> 
                        </tr>  
                        <tr>  
                            <td className="border border-gray-300 p-2">4</td>  
                            <td className="border border-gray-300 p-2">REG126</td>  
                            <td className="border border-gray-300 p-2">Michael Brown</td>  
                            <td className="border border-gray-300 p-2">michael.brown@example.com</td>  
                            <td className="border border-gray-300 p-2">80</td>
                            <td className="border border-gray-300 p-2">487</td>  
                            <td className="border border-gray-300 p-2">4</td>  
                            <td className="border border-gray-300 p-2">456-789-0123</td>  
                            <div className="action d-flex align-items-center ">
                                <Button><span><FaEye /></span></Button>
                                <Button><span><MdEdit /></span></Button>
                                <Button><span><MdDelete /></span></Button>
                            </div> 
                        </tr>  
                        <tr>  
                            <td className="border border-gray-300 p-2">5</td>  
                            <td className="border border-gray-300 p-2">REG127</td>  
                            <td className="border border-gray-300 p-2">Sarah Davis</td>  
                            <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                            <td className="border border-gray-300 p-2">75</td>  
                            <td className="border border-gray-300 p-2">487</td>
                            <td className="border border-gray-300 p-2">5</td>  
                            <td className="border border-gray-300 p-2">567-890-1234</td>
                            <div className="action d-flex align-items-center ">
                                <Button><span><FaEye /></span></Button>
                                <Button><span><MdEdit /></span></Button>
                                <Button><span><MdDelete /></span></Button>
                            </div>   
                        </tr>  
                        <tr>  
                            <td className="border border-gray-300 p-2">6</td>  
                            <td className="border border-gray-300 p-2">REG127</td>  
                            <td className="border border-gray-300 p-2">Vijay</td>  
                            <td className="border border-gray-300 p-2">Vijay@example.com</td>  
                            <td className="border border-gray-300 p-2">75</td> 
                            <td className="border border-gray-300 p-2">480</td> 
                            <td className="border border-gray-300 p-2">6</td>  
                            <td className="border border-gray-300 p-2">567-890-1234</td> 
                            <div className="action d-flex align-items-center ">
                                <Button><span><FaEye /></span></Button>
                                <Button><span><MdEdit /></span></Button>
                                <Button><span><MdDelete /></span></Button>
                            </div>  
                        </tr>  
                        <tr>  
                            <td className="border border-gray-300 p-2">7</td>  
                            <td className="border border-gray-300 p-2">REG127</td>  
                            <td className="border border-gray-300 p-2">Kumar</td>  
                            <td className="border border-gray-300 p-2">kumar@example.com</td>  
                            <td className="border border-gray-300 p-2">75</td> 
                            <td className="border border-gray-300 p-2">487</td> 
                            <td className="border border-gray-300 p-2">5</td>  
                            <td className="border border-gray-300 p-2">567-890-1234</td>  
                            <div className="action d-flex align-items-center ">
                                <Button><span><FaEye /></span></Button>
                                <Button><span><MdEdit /></span></Button>
                                <Button><span><MdDelete /></span></Button>
                            </div> 
                        </tr>  
                        <tr>  
                            <td className="border border-gray-300 p-2">8</td>  
                            <td className="border border-gray-300 p-2">REG127</td>  
                            <td className="border border-gray-300 p-2">Sandy</td>  
                            <td className="border border-gray-300 p-2">sandy@example.com</td>  
                            <td className="border border-gray-300 p-2">75</td>
                            <td className="border border-gray-300 p-2">487</td>  
                            <td className="border border-gray-300 p-2">5</td>  
                            <td className="border border-gray-300 p-2">567-890-1234</td>  
                            <div className="action d-flex align-items-center ">
                                <Button><span><FaEye /></span></Button>
                                <Button><span><MdEdit /></span></Button>
                                <Button><span><MdDelete /></span></Button>
                            </div> 
                        </tr>  
                        <tr>  
                            <td className="border border-gray-300 p-2">9</td>  
                            <td className="border border-gray-300 p-2">REG127</td>  
                            <td className="border border-gray-300 p-2">Sanjay</td>  
                            <td className="border border-gray-300 p-2">sanjay@example.com</td>  
                            <td className="border border-gray-300 p-2">75</td>
                            <td className="border border-gray-300 p-2">487</td>  
                            <td className="border border-gray-300 p-2">5</td>  
                            <td className="border border-gray-300 p-2">567-890-1234</td> 
                            <div className="action d-flex align-items-center ">
                                <Button><span><FaEye /></span></Button>
                                <Button><span><MdEdit /></span></Button>
                                <Button><span><MdDelete /></span></Button>
                            </div>  
                        </tr>  
                        <tr>  
                            <td className="border border-gray-300 p-2">10</td>  
                            <td className="border border-gray-300 p-2">REG127</td>  
                            <td className="border border-gray-300 p-2">Sarah Davis</td>  
                            <td className="border border-gray-300 p-2">sa@example.com</td>  
                            <td className="border border-gray-300 p-2">75</td> 
                            <td className="border border-gray-300 p-2">487</td> 
                            <td className="border border-gray-300 p-2">5</td>  
                            <td className="border border-gray-300 p-2">567-890-1234</td>
                            <div className="action d-flex align-items-center ">
                                <Button><span><FaEye /></span></Button>
                                <Button><span><MdEdit /></span></Button>
                                <Button><span><MdDelete /></span></Button>
                            </div>   
                        </tr>  
                        <tr>  
                            <td className="border border-gray-300 p-2">11</td>  
                            <td className="border border-gray-300 p-2">REG127</td>  
                            <td className="border border-gray-300 p-2">Sarah Davis</td>  
                            <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                            <td className="border border-gray-300 p-2">75</td>
                            <td className="border border-gray-300 p-2">487</td>  
                            <td className="border border-gray-300 p-2">5</td>  
                            <td className="border border-gray-300 p-2">567-890-1234</td>  
                            <div className="action d-flex align-items-center ">
                                <Button><span><FaEye /></span></Button>
                                <Button><span><MdEdit /></span></Button>
                                <Button><span><MdDelete /></span></Button>
                            </div> 
                        </tr>  
                        <tr>  
                            <td className="border border-gray-300 p-2">12</td>  
                            <td className="border border-gray-300 p-2">REG127</td>  
                            <td className="border border-gray-300 p-2">Sarah Davis</td>  
                            <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                            <td className="border border-gray-300 p-2">75</td>
                            <td className="border border-gray-300 p-2">487</td>  
                            <td className="border border-gray-300 p-2">5</td>  
                            <td className="border border-gray-300 p-2">567-890-1234</td>
                            <div className="action d-flex align-items-center ">
                                <Button><span><FaEye /></span></Button>
                                <Button><span><MdEdit /></span></Button>
                                <Button><span><MdDelete /></span></Button>
                            </div>   
                        </tr>  
                        <tr>  
                            <td className="border border-gray-300 p-2">13</td>  
                            <td className="border border-gray-300 p-2">REG127</td>  
                            <td className="border border-gray-300 p-2">Sarah Davis</td>  
                            <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                            <td className="border border-gray-300 p-2">75</td>
                            <td className="border border-gray-300 p-2">487</td>  
                            <td className="border border-gray-300 p-2">5</td>  
                            <td className="border border-gray-300 p-2">567-890-1234</td>
                            <div className="action d-flex align-items-center ">
                                <Button><span><FaEye /></span></Button>
                                <Button><span><MdEdit /></span></Button>
                                <Button><span><MdDelete /></span></Button>
                            </div>   
                        </tr>  
                        <tr>  
                            <td className="border border-gray-300 p-2">14</td>  
                            <td className="border border-gray-300 p-2">REG127</td>  
                            <td className="border border-gray-300 p-2">Sarah Davis</td>  
                            <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                            <td className="border border-gray-300 p-2">75</td>
                            <td className="border border-gray-300 p-2">487</td>  
                            <td className="border border-gray-300 p-2">5</td>  
                            <td className="border border-gray-300 p-2">567-890-1234</td> 
                            <div className="action d-flex align-items-center ">
                                <Button><span><FaEye /></span></Button>
                                <Button><span><MdEdit /></span></Button>
                                <Button><span><MdDelete /></span></Button>
                            </div>  
                        </tr>  
                        <tr>  
                            <td className="border border-gray-300 p-2">15</td>  
                            <td className="border border-gray-300 p-2">REG127</td>  
                            <td className="border border-gray-300 p-2">Sarah Davis</td>  
                            <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                            <td className="border border-gray-300 p-2">75</td> 
                            <td className="border border-gray-300 p-2">487</td> 
                            <td className="border border-gray-300 p-2">5</td>  
                            <td className="border border-gray-300 p-2">567-890-1234</td>
                            <div className="action d-flex align-items-center ">
                                <Button><span><FaEye /></span></Button>
                                <Button><span><MdEdit /></span></Button>
                                <Button><span><MdDelete /></span></Button>
                            </div>   
                        </tr>  
                        <tr>  
                            <td className="border border-gray-300 p-2">16</td>  
                            <td className="border border-gray-300 p-2">REG127</td>  
                            <td className="border border-gray-300 p-2">Sarah Davis</td>  
                            <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                            <td className="border border-gray-300 p-2">75</td> 
                            <td className="border border-gray-300 p-2">487</td> 
                            <td className="border border-gray-300 p-2">5</td>  
                            <td className="border border-gray-300 p-2">567-890-1234</td> 
                            <div className="action d-flex align-items-center ">
                                <Button><span><FaEye /></span></Button>
                                <Button><span><MdEdit /></span></Button>
                                <Button><span><MdDelete /></span></Button>
                            </div>  
                        </tr>  
                        <tr>  
                            <td className="border border-gray-300 p-2">17</td>  
                            <td className="border border-gray-300 p-2">REG127</td>  
                            <td className="border border-gray-300 p-2">Sarah Davis</td>  
                            <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                            <td className="border border-gray-300 p-2">75</td>
                            <td className="border border-gray-300 p-2">487</td>  
                            <td className="border border-gray-300 p-2">5</td>  
                            <td className="border border-gray-300 p-2">567-890-1234</td>
                            <div className="action d-flex align-items-center ">
                                <Button><span><FaEye /></span></Button>
                                <Button><span><MdEdit /></span></Button>
                                <Button><span><MdDelete /></span></Button>
                            </div>   
                        </tr>  
                        <tr>  
                            <td className="border border-gray-300 p-2">18</td>  
                            <td className="border border-gray-300 p-2">REG127</td>  
                            <td className="border border-gray-300 p-2">Sarah Davis</td>  
                            <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                            <td className="border border-gray-300 p-2">75</td> 
                            <td className="border border-gray-300 p-2">487</td> 
                            <td className="border border-gray-300 p-2">5</td>  
                            <td className="border border-gray-300 p-2">567-890-1234</td>  
                            <div className="action d-flex align-items-center ">
                                <Button><span><FaEye /></span></Button>
                                <Button><span><MdEdit /></span></Button>
                                <Button><span><MdDelete /></span></Button>
                            </div> 
                        </tr>  
                        <tr>  
                            <td className="border border-gray-300 p-2">19</td>  
                            <td className="border border-gray-300 p-2">REG127</td>  
                            <td className="border border-gray-300 p-2">Sarah Davis</td>  
                            <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                            <td className="border border-gray-300 p-2">75</td>
                            <td className="border border-gray-300 p-2">487</td>  
                            <td className="border border-gray-300 p-2">5</td>  
                            <td className="border border-gray-300 p-2">567-890-1234</td> 
                            <div className="action d-flex align-items-center ">
                                <Button><span><FaEye /></span></Button>
                                <Button><span><MdEdit /></span></Button>
                                <Button><span><MdDelete /></span></Button>
                            </div>  
                        </tr>  
                        <tr>  
                            <td className="border border-gray-300 p-2">20</td>  
                            <td className="border border-gray-300 p-2">REG127</td>  
                            <td className="border border-gray-300 p-2">Sarah Davis</td>  
                            <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                            <td className="border border-gray-300 p-2">75</td>  
                            <td className="border border-gray-300 p-2">487</td>
                            <td className="border border-gray-300 p-2">5</td>  
                            <td className="border border-gray-300 p-2">567-890-1234</td>  
                            <div className="action d-flex align-items-center ">
                                <Button><span><FaEye /></span></Button>
                                <Button><span><MdEdit /></span></Button>
                                <Button><span><MdDelete /></span></Button>
                            </div> 
                        </tr>  
                        <tr>  
                            <td className="border border-gray-300 p-2">21</td>  
                            <td className="border border-gray-300 p-2">REG127</td>  
                            <td className="border border-gray-300 p-2">Sarah Davis</td>  
                            <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                            <td className="border border-gray-300 p-2">75</td> 
                            <td className="border border-gray-300 p-2">487</td> 
                            <td className="border border-gray-300 p-2">5</td>  
                            <td className="border border-gray-300 p-2">567-890-1234</td> 
                            <div className="action d-flex align-items-center ">
                                <Button><span><FaEye /></span></Button>
                                <Button><span><MdEdit /></span></Button>
                                <Button><span><MdDelete /></span></Button>
                            </div>  
                        </tr>  
                    </tbody>  
        </table>
    </div>
    </div>
    <div className="cd">
    <Stack spacing={2} direction="row">
    <Button variant="contained"><span className="X"><IoAddCircleOutline /></span>Add Student Info</Button></Stack>
    </div>
    </section>
    )
}

export default  DashBoard;

// import React from "react";  

// const DashBoard = () => {  
//     return (  
//         <div className="p-6">  
//             <h1 className="text-2xl font-bold mb-4">Student Information</h1>  
//             <div className="overflow-x-auto">  
//                 <table className="min-w-full border border-gray-300">  
//                     <thead className="bg-gray-200">  
//                         <tr>  
//                             <th className="border border-gray-300 p-2">S.No</th>  
//                             <th className="border border-gray-300 p-2">Reg No</th>  
//                             <th className="border border-gray-300 p-2">Name</th>  
//                             <th className="border border-gray-300 p-2">E-Mail</th>  
//                             <th className="border border-gray-300 p-2">Attendance (%)</th>  
//                             <th className="border border-gray-300 p-2">Rank</th>  
//                             <th className="border border-gray-300 p-2">Phone No</th>  
//                         </tr>  
//                     </thead>  
                    // <tbody>  
                    //     <tr>  
                    //         <td className="border border-gray-300 p-2">1</td>  
                    //         <td className="border border-gray-300 p-2">REG123</td>  
                    //         <td className="border border-gray-300 p-2">John Doe</td>  
                    //         <td className="border border-gray-300 p-2">john.doe@example.com</td>  
                    //         <td className="border border-gray-300 p-2">95</td>  
                    //         <td className="border border-gray-300 p-2">1</td>  
                    //         <td className="border border-gray-300 p-2">123-456-7890</td>  
                    //     </tr>  
                    //     <tr>  
                    //         <td className="border border-gray-300 p-2">2</td>  
                    //         <td className="border border-gray-300 p-2">REG124</td>  
                    //         <td className="border border-gray-300 p-2">Jane Smith</td>  
                    //         <td className="border border-gray-300 p-2">jane.smith@example.com</td>  
                    //         <td className="border border-gray-300 p-2">90</td>  
                    //         <td className="border border-gray-300 p-2">2</td>  
                    //         <td className="border border-gray-300 p-2">234-567-8901</td>  
                    //     </tr>  
                    //     <tr>  
                    //         <td className="border border-gray-300 p-2">3</td>  
                    //         <td className="border border-gray-300 p-2">REG125</td>  
                    //         <td className="border border-gray-300 p-2">Emily Johnson</td>  
                    //         <td className="border border-gray-300 p-2">emily.johnson@example.com</td>  
                    //         <td className="border border-gray-300 p-2">85</td>  
                    //         <td className="border border-gray-300 p-2">3</td>  
                    //         <td className="border border-gray-300 p-2">345-678-9012</td>  
                    //     </tr>  
                    //     <tr>  
                    //         <td className="border border-gray-300 p-2">4</td>  
                    //         <td className="border border-gray-300 p-2">REG126</td>  
                    //         <td className="border border-gray-300 p-2">Michael Brown</td>  
                    //         <td className="border border-gray-300 p-2">michael.brown@example.com</td>  
                    //         <td className="border border-gray-300 p-2">80</td>  
                    //         <td className="border border-gray-300 p-2">4</td>  
                    //         <td className="border border-gray-300 p-2">456-789-0123</td>  
                    //     </tr>  
                    //     <tr>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">REG127</td>  
                    //         <td className="border border-gray-300 p-2">Sarah Davis</td>  
                    //         <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                    //         <td className="border border-gray-300 p-2">75</td>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">567-890-1234</td>  
                    //     </tr>  
                    //     <tr>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">REG127</td>  
                    //         <td className="border border-gray-300 p-2">Sarah Davis</td>  
                    //         <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                    //         <td className="border border-gray-300 p-2">75</td>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">567-890-1234</td>  
                    //     </tr>  
                    //     <tr>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">REG127</td>  
                    //         <td className="border border-gray-300 p-2">Sarah Davis</td>  
                    //         <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                    //         <td className="border border-gray-300 p-2">75</td>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">567-890-1234</td>  
                    //     </tr>  
                    //     <tr>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">REG127</td>  
                    //         <td className="border border-gray-300 p-2">Sarah Davis</td>  
                    //         <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                    //         <td className="border border-gray-300 p-2">75</td>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">567-890-1234</td>  
                    //     </tr>  
                    //     <tr>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">REG127</td>  
                    //         <td className="border border-gray-300 p-2">Sarah Davis</td>  
                    //         <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                    //         <td className="border border-gray-300 p-2">75</td>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">567-890-1234</td>  
                    //     </tr>  
                    //     <tr>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">REG127</td>  
                    //         <td className="border border-gray-300 p-2">Sarah Davis</td>  
                    //         <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                    //         <td className="border border-gray-300 p-2">75</td>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">567-890-1234</td>  
                    //     </tr>  
                    //     <tr>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">REG127</td>  
                    //         <td className="border border-gray-300 p-2">Sarah Davis</td>  
                    //         <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                    //         <td className="border border-gray-300 p-2">75</td>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">567-890-1234</td>  
                    //     </tr>  
                    //     <tr>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">REG127</td>  
                    //         <td className="border border-gray-300 p-2">Sarah Davis</td>  
                    //         <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                    //         <td className="border border-gray-300 p-2">75</td>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">567-890-1234</td>  
                    //     </tr>  
                    //     <tr>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">REG127</td>  
                    //         <td className="border border-gray-300 p-2">Sarah Davis</td>  
                    //         <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                    //         <td className="border border-gray-300 p-2">75</td>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">567-890-1234</td>  
                    //     </tr>  
                    //     <tr>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">REG127</td>  
                    //         <td className="border border-gray-300 p-2">Sarah Davis</td>  
                    //         <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                    //         <td className="border border-gray-300 p-2">75</td>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">567-890-1234</td>  
                    //     </tr>  
                    //     <tr>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">REG127</td>  
                    //         <td className="border border-gray-300 p-2">Sarah Davis</td>  
                    //         <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                    //         <td className="border border-gray-300 p-2">75</td>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">567-890-1234</td>  
                    //     </tr>  
                    //     <tr>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">REG127</td>  
                    //         <td className="border border-gray-300 p-2">Sarah Davis</td>  
                    //         <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                    //         <td className="border border-gray-300 p-2">75</td>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">567-890-1234</td>  
                    //     </tr>  
                    //     <tr>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">REG127</td>  
                    //         <td className="border border-gray-300 p-2">Sarah Davis</td>  
                    //         <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                    //         <td className="border border-gray-300 p-2">75</td>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">567-890-1234</td>  
                    //     </tr>  
                    //     <tr>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">REG127</td>  
                    //         <td className="border border-gray-300 p-2">Sarah Davis</td>  
                    //         <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                    //         <td className="border border-gray-300 p-2">75</td>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">567-890-1234</td>  
                    //     </tr>  
                    //     <tr>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">REG127</td>  
                    //         <td className="border border-gray-300 p-2">Sarah Davis</td>  
                    //         <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                    //         <td className="border border-gray-300 p-2">75</td>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">567-890-1234</td>  
                    //     </tr>  
                    //     <tr>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">REG127</td>  
                    //         <td className="border border-gray-300 p-2">Sarah Davis</td>  
                    //         <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                    //         <td className="border border-gray-300 p-2">75</td>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">567-890-1234</td>  
                    //     </tr>  
                    //     <tr>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">REG127</td>  
                    //         <td className="border border-gray-300 p-2">Sarah Davis</td>  
                    //         <td className="border border-gray-300 p-2">sarah.davis@example.com</td>  
                    //         <td className="border border-gray-300 p-2">75</td>  
                    //         <td className="border border-gray-300 p-2">5</td>  
                    //         <td className="border border-gray-300 p-2">567-890-1234</td>  
                    //     </tr>  
                    // </tbody>  
//                 </table>  
//             </div>  
//         </div>  
//     );  
// };  

// export default DashBoard;  
