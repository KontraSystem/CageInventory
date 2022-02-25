import React, {useState} from "react";
import "./Navigation.css";
import "../App.css";

export default function NavigationBar() {

  const [navBarOpen, isNavBarOpen] = useState(false)
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-200`;

return (
  <div>
    <div className="flex bg-orange border-b-2 border-gray-300">
      <div className={`flex flex-col h-20 w-12 rounded justify-center items-center group hover:cursor-pointer ${navBarOpen ? "ml-96" : "ml-2"}`} onClick={() => isNavBarOpen(!navBarOpen)}>
          <div className={`${genericHamburgerLine} ${navBarOpen ? "rotate-45 translate-y-3 " :  ""}`}/>
          <div className={`${genericHamburgerLine} ${navBarOpen ? "opacity-0" : ""}`} />
          <div className={`${genericHamburgerLine} ${navBarOpen ? "-rotate-45 -translate-y-3" : ""}`}/>
      </div>
      <h1 className={`pt-6 text-white text-xl font-bold ml-2`}>RIT Cage Inventory</h1>
    </div>

    <div className={`flex flex-col group h-screen absolute top-0 shadow bg-white w-96 ${navBarOpen ? "visible" : "hidden"}`}>
      <div className="border-b-2 border-gray-600">
          <div className="flex ml-12 p-4 ">
            <img class=" object-cover w-16 h-16 rounded-full" src="http://cdn.onlinewebfonts.com/svg/img_568657.png" alt="Profile image"/>
            <div className="ml-5">
              <p className="font-bold text-xl mt-2">Username</p>
              <p className="ml-8">role</p>
            </div>
          </div>
        </div>
        <div className="flex bg-gray-200 py-4 pl-16">
          <img class=" object-cover w-16 h-16 rounded-full" src="http://cdn.onlinewebfonts.com/svg/img_568657.png" alt="Profile image"/>
          <p className="font-bold text-xl mt-3 ml-5">Cage Inventory</p>
        </div>
      </div>
  </div>
 
  
);
}




