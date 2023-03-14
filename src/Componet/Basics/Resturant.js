import React, { useState } from "react";
import './Style.css';
import Menu from "../../menuApi";
import MenuCard from "../MenuCard";
import NavBar from "./NavBar";

const uniqueList= [
    ...new Set(
    Menu.map((curElem)=>{
        return curElem.category;
    })
    
),
"All",
];

const Resurant =()=>{
   const[menuData,setMenuData] =useState(Menu);
   const[menuList,setmenuList] = useState(uniqueList)
   console.log(menuData);

   const filterItem =(category)=>{
    if(category === "All"){
        setMenuData(Menu);
        return;
    } 
       const updatedList = Menu.filter((curElem)=>{
          return curElem.category ===  category;
       });
       setMenuData(updatedList)
   };
    
    return( 
        <>  
           <NavBar filterItem={filterItem} menuList={menuList}/>
           <MenuCard menuData={menuData}/>
        </>
    ) 
}
export default Resurant;