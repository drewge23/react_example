import React from "react";
import { Link } from "react-router-dom";
import s from './NavItem.module.css';

const NavItem = (props) => {
    return (
        <div className={s.navItem}>
            <Link to={props.link} className={s.navIcon}></Link>
            <Link to={props.link} className={s.navText}> <h3 style={{
                fontSize: '30px',
                fontWeight: '550'
            }}>{props.text}</h3> </Link>
        </div>
    )
}

export default NavItem;