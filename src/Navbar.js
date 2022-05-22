import React, {useState, useEffect} from 'react'
import './Navbar.css';

function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", ()=> {
             if(window.scrollY > 100) {
             handleShow(true);
        } else handleShow(false);
    });
    return () => {
        window.removeEventListener("scroll");
    };
       
    }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className='nav_logo'
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        alt='Netflix_Logo' />

        <img className='nav_avatar'
        src='https://imgs.search.brave.com/9xj7emsAVGy4-c6iLQ1uwSVxthrWMT96ttsTm7wJmPs/rs:fit:1080:1080:1/g:ce/aHR0cHM6Ly9hdmF0/YXJmaWxlcy5hbHBo/YWNvZGVycy5jb20v/MTg3L3RodW1iLTE5/MjAtMTg3MTY3LnBu/Zw'
        alt='Profile_image' />


    </div>
  )
}

export default Navbar