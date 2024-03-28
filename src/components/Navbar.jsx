import { useState } from "react";
import Navlink from "./Navlink";
import './nav.css'

export default function NavBar() {
   const navBrand = "Anonime";

   const navMenu = [
      {
         title:"Home",
         url: "/",
      },
      {
         title: "List anime",
         url: "/ListAnime",
      },
   ];

   const [navbar, setNavbar] = useState(false);

   return (
      <nav>
         <div className="nav">
            <div>
               <div>
                  <Navlink to="/">
                     <h2 className="p-name">{navBrand}</h2>
                  </Navlink>
                  
               </div>
            </div>
            <div>
               <div className="">
                  <ul className="s-item">
                     {navMenu.map((menu) => (
                        <li key={menu.id} className="">
                           <Navlink to={menu.url}>{menu.title}</Navlink>
                        </li>
                     ))}
                  </ul>

               </div>
                  
            </div>
            <form className="form"><input className="search" type="text" name="" id="" placeholder="Search anime..."/></form>
         </div>
      </nav>
   );
}
