import s from './Header.module.css';
import {BiBell, BiSearch} from "react-icons/bi";
import {BsFillPauseFill, BsPlayFill} from "react-icons/bs";
import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {logout} from "../../redux/authSlice";

import CAT from '../../assets/cat_mirrored.png'

const Header = (props) => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.auth);
    const [isPlaying, setIsPlaying] = useState(false);

    const onClick = () => {
        dispatch(logout());
    }
    return (
        <div className={`${s.header} header`} style={{
            display: 'flex',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%'
            }}>
                <div className={s.logo} style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexGrow: 1,
                    padding: '20px',
                    gap: '20px'
                }}>
                    <img src={CAT} alt=""
                         style={{width: '50px'}}/>
                    {userData.isLogged && <h3 style={{flexGrow: 1, width: '100%'}}> {userData.login} </h3>}
                </div>

                <div>
                    {userData.isLogged
                        ? <button onClick={onClick}
                                  style={{
                                      flexGrow: 0,
                                      margin: 'auto 20px',
                                  }}
                        >Logout</button>
                        : <NavLink to={'/login'}><button style={{
                            margin: 'auto 20px',
                        }}> Login </button></NavLink>}
                </div>
            </div>
            {/*<div style={{flexGrow: 0, display: 'flex'}}>*/}
            {/*    <div className={s.searchBar}>*/}
            {/*        <BiSearch/>*/}
            {/*        <input/>*/}
            {/*    </div>*/}

            {/*    <div className="bell">*/}
            {/*        <button style={{margin: 10}}>*/}
            {/*            <BiBell/>*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*    <div className={s.audioPlayer}>*/}
            {/*        <button onClick={() => setIsPlaying(!isPlaying)}>*/}
            {/*            {isPlaying*/}
            {/*                ? <BsPlayFill/>*/}
            {/*                : <BsFillPauseFill/>}*/}
            {/*        </button>*/}
            {/*        <p>Over the garden wall — The main theme</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default Header;
