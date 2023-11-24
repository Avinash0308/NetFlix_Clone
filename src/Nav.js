import React, { useEffect, useState } from 'react'
import {useHistory} from "react-router-dom"
import './Nav.css'

function Nav() {
    const [show,handleShow] = useState(false);
    const history = useHistory();
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>100){
                handleShow(true);
            }
            else{
                handleShow(false);
            }
        })
        return () =>{
            window.removeEventListener("scroll",null);
        }
    },[]) 

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                onClick = {() => history.push("/")}
                
                className='nav_logo'
                src='https://i.postimg.cc/TwPPbDCN/Screenshot-2023-11-24-224234-removebg-preview.png'
                alt = 'Netflix Logo'
            />
            <img
                onClick = {() => history.push("/profile")}
                className='nav_smiley'
                src='https://i.postimg.cc/CLDfS95v/Screenshot-2023-11-24-225712-removebg-preview.png'
            />
        </div>
    )
}

export default Nav