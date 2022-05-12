// IMPORT MODULES
import "./css/Navigation.css"
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import * as React from 'react'


// MAIN FUNC
const Navigation = (props) => {
  // VAR POUR RÉCUPERER LE PATH
  const location = useLocation()
  // PROPS POUR LE TITRE ET LE LIEN DE NAV
  const { title, link, icon, nasa } = props
  // TRUC POUR LE CONTROLE K
  // const handleKeyPress = React.useCallback((event) => {
  //   if (event.ctrlKey === true && event.key === ("k" || "K")) {
  //     event.preventDefault();
  //     alert(`CTRL K ACTIVATED: ${event.key}`);
  //   }
  // })
  // React.useEffect(() => {
  //   document.addEventListener("keydown", handleKeyPress)
  // },[])

  // PAGE HTML
  return (
    <div className="navigation">
      <NavLink className='b' to={"/"}>{location.pathname !== "/" ? "Weather" : title}  {location.pathname !== "/" ? icon : nasa} </NavLink>
      <ul className="row">
        {/* <input className="inpoute" type="text" placeholder="ctrl + k" /> */}
        {
          link.map(link => {
            return <NavLink key={link} exact="true" to={location.pathname !== "/" ? "/" : "Weather"} activeclassname="active">
              {location.pathname !== "/"
                ? <BsArrowLeft size="40" />
                : <BsArrowRight size="40" />
              }


            </NavLink>

          })
        }
      </ul>
    </div>
  );
};

// EXPORT MODULE
export default Navigation;