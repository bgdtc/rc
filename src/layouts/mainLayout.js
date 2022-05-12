import Navigation from "../components/LayoutsComponents/Navigation";
import { BsFillCloudRainFill } from 'react-icons/bs'
import { FaSpaceShuttle } from 'react-icons/fa'
import React, { useState } from "react";
const MainLayout = ({ children }) => {
  const [title] = useState(["Nasa Image Of The Day"])
  const [navlink] = useState(["Weather"])
  const [icon] = useState( <BsFillCloudRainFill className="title"  size={25} />)
  const [nasa] = useState(<FaSpaceShuttle className="title" size={25}/>)
  return (
    <div className="App">
      <Navigation title={title} link={navlink} icon={icon} nasa={nasa} />
      {children}
    </div>
  );
};

export default MainLayout;



// { children }
// <Footer title={ title } />