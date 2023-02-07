import React from "react";

import {IoIosArrowUp} from 'react-icons/io';
import './BackToTopBtn.css';

const BackToTopBtn = () => {
    const [visible, setVisible] = React.useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
    }

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        })
    }

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className="top__button" onClick={scrollToTop} style={{display: visible ? 'flex' : 'none'}}>
            <IoIosArrowUp className="top__button-arrow"/>
            <h1 className="top__button-text">TOP</h1>
        </div>
    )
}

export default BackToTopBtn;