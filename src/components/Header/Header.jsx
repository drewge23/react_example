import s from './Header.module.css';
import { BiSearch, BiBell } from "react-icons/bi";
import { BsPlayFill, BsFillPauseFill } from "react-icons/bs";
import React from 'react';

import { useState } from 'react';

const Header = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    
    return (
            <div className={`${s.header} header`}>
            <div className={s.logo}>
                <img src="https://via.placeholder.com/40" alt="" />
            </div>

            <div className={s.searchBar}>
                <BiSearch />
                <input />
            </div>

            <div className="bell">
                <button style={{margin: 10}}>
                    <BiBell />
                </button>
            </div>
            <div className={s.audioPlayer}>
                <button onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying 
                        ? <BsPlayFill /> 
                        : <BsFillPauseFill />}
                </button>
                <p>Over the garden wall -- The main theme</p>
            </div>
        </div>
    )
}

export default Header;