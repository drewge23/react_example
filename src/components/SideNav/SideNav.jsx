import NavItem from "./NavItem/NavItem"
import {useSelector} from "react-redux";

const SideNav = () => {
    const userId = useSelector(state => state.auth.id)
    return (
        <div style={{padding: '30px', borderRadius: '0 25px 0 0'}} className="nav">
            <NavItem text="My profile" link={userId ? `/profile/${userId}` : `/login`} />
            <NavItem text="Messages" link="/messages"/>
            <NavItem text="Users" link="/friends"/>
            <NavItem text="Music" link="/music"/>
            <NavItem text="Photos" link="/photos"/>
            <NavItem text="Files" link="/files"/>
            <NavItem text="Bookmarks" link="/bookmarks"/>
        </div>
    )
}

export default SideNav;