import NavItem from "./NavItem/NavItem"
import {useSelector} from "react-redux";

const SideNav = () => {
    const userId = useSelector(state => state.auth.id)
    return (
        <div style={{padding: '0px 30px'}} className="nav">
            <NavItem text="My profile" link={userId ? `/profile/${userId}` : `/login`} />
            {/*<NavItem text="Feed" link="/feed"/>*/}
            <NavItem text="Messages" link="/messages"/>
            <NavItem text="Friends" link="/friends"/>
            <NavItem text="Music" link="/music"/>
            <NavItem text="Photos" link="/photos"/>
            <NavItem text="Files" link="/files"/>
            <NavItem text="Bookmarks" link="/bookmarks"/>
        </div>
    )
}

export default SideNav;