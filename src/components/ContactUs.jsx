import React, { useEffect } from 'react'
import { IoCall } from "react-icons/io5";


const ContactUs = () => {
    useEffect(() => {
        const element = document.querySelector(".element");
    
        const handleMouseMove = (event) => {
          const rect = element.getBoundingClientRect();
          const centerX = rect.left + rect.width / 5;
          const centerY = rect.top + rect.height / 5;
          
          const distanceThreshold = 60;
    
          const distance = Math.sqrt(Math.pow(event.clientX - centerX, 2) + Math.pow(event.clientY - centerY, 2));
    
          if (distance < distanceThreshold) {
            const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);
            const distance = 50;
            const newX = centerX + distance * Math.cos(angle) - rect.width / 2;
            const newY = centerY + distance * Math.sin(angle) - rect.height / 2;
    
            element.style.left = newX + "px";
            element.style.top = newY + "px";
          }
        };
    
        document.addEventListener("mousemove", handleMouseMove);
    
        return () => {
          document.removeEventListener("mousemove", handleMouseMove);
        };
      }, []);
    
  return (
    <div className="container">
        <div className="element">
        <IoCall size={"25px"}/>
        </div>
    </div>
  )
}

export default ContactUs