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
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158'
                alt = 'Netflix Logo'
            />
            <img
                onClick = {() => history.push("/profile")}
                className='nav_smiley'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            />
        </div>
    )
}

export default Nav