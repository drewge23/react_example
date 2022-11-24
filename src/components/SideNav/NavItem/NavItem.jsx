import React from "react";
import { Link } from "react-router-dom";
import s from './NavItem.module.css';

const NavItem = (props) => {
    return (
        <div className={s.navItem}>
            <Link to={props.link} className={s.navIcon}></Link>
            <Link to={props.link} className={s.navText}> {props.text} </Link>
        </div>
    )
}

export default NavItem;