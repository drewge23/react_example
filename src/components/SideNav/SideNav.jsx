import NavItem from "./NavItem/NavItem"

const SideNav = () => {
    return (
        <div style={{padding: '0px 30px'}} className="nav">
            <NavItem text="My profile" link="/profile"/>
            <NavItem text="Feed" link="/feed"/>
            <NavItem text="Messages" link="/messages"/>
            <NavItem text="Friends"/>
            <NavItem text="Music"/>
            <NavItem text="Photos"/>
            <NavItem text="Files"/>
            <NavItem text="Bookmarks"/>
            <NavItem text="ptiza vorobei" link="https://vk.com/ptiza_vorobei"/>
        </div>
    )
}

export default SideNav;