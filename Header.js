import React from 'react'
import { FaMobileAlt,FaTablet,FaLaptop } from "react-icons/fa";
const Header = ({width}) => {
  return (
    <div>
        {
            width<750 ? <FaMobileAlt /> :width<900 ? <FaTablet />:<FaLaptop />
        }
    </div>
  )
}

export default Header