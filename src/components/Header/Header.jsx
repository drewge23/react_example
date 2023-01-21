import s from './Header.module.css';
import {BiBell, BiSearch} from "react-icons/bi";
import {BsFillPauseFill, BsPlayFill} from "react-icons/bs";
import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {logout} from "../../redux/authSlice";

const Header = (props) => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.auth);
    const [isPlaying, setIsPlaying] = useState(false);

    const onClick = () => {
        dispatch(logout());
    }

    return (
        <div className={`${s.header} header`}>
            <div className={s.logo}>
                <img src="https://via.placeholder.com/50/FFFF00/000000" alt=""
                style={{width: '50px', borderRadius: '50%'}}/>
            </div>

            <div>
                {userData.isLogged
                    ? (<>
                        <h3> {userData.login} </h3>
                        <button onClick={onClick}>Logout</button>
                    </>)
                    : <NavLink to={'/login'}> Login </NavLink>}
            </div>

            <div className={s.searchBar}>
                <BiSearch/>
                <input/>
            </div>

            <div className="bell">
                <button style={{margin: 10}}>
                    <BiBell/>
                </button>
            </div>
            <div className={s.audioPlayer}>
                <button onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying
                        ? <BsPlayFill/>
                        : <BsFillPauseFill/>}
                </button>
                <p>Over the garden wall — The main theme</p>
            </div>
        </div>
    )
}

export default Header;