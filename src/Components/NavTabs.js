// import React from "react";

// import { Link, useLocation } from "react-router-dom";

// function NavTabs() {
//     const location = useLocation();
//     //using code from react-router docs to check the route anytime the user uses a link to navigate

//     return (
//         <ul className="nav nav-tabs">
//             <li className="nav-item">
//                 <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
//                     Home
//                 </Link>

//             </li>
//             <li className="nav-item">
//                 <Link to="/About" className={location.pathname === "/About" ? "nav-link active" : "nav-link"}>
//                     About
//                 </Link>
//             </li>
//             <li className="nav-item">
//                 <Link to="/Resume" className={location.pathname === "/Resume" ? "nav-link active" : "nav-link"}>
//                     Resume
//                 </Link>
//             </li>  
//             <li>
//                 <Link to="/Contact" className={location.pathname === "/Contact" ? "nav-link active" : "nav-link"}>
//                     Contact
//                 </Link>
//             </li>
//             <li>
//                 <Link to="/Portfolio" className={location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}>
//                     Portfolio
//                 </Link>
//             </li>
//         </ul>  
//     );
// }

// export default NavTabs;