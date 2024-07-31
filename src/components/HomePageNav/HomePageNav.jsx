import { Nav, Navbar, NavItem, NavLink } from "reactstrap"

function HomePageNav() {

    return (
        <>
         <Navbar id="contents" className="bg-light" light expand="md">
    <Nav className="mx-auto justify-content-center" navbar>
        <NavItem>
            <NavLink href="#">
                <img src="https://picsum.photos/40/40" alt="YENİ!" />
                <span> YENİ! Kore</span>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">
                <img src="https://picsum.photos/40/40" alt="Pizza" />
                <span> Pizza</span>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">
                <img src="https://picsum.photos/40/40" alt="Burger" />
                <span> Burger</span>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">
                <img src="https://picsum.photos/40/40" alt="Kızartmalar" />
                <span> Kızartmalar</span>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">
                <img src="https://picsum.photos/40/40" alt="Fast food" />
                <span> Fast food</span>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">
                <img src="https://picsum.photos/40/40" alt="Gazlı İçecek" />
                <span> Gazlı İçecek</span>
            </NavLink>
        </NavItem>
    </Nav>
</Navbar>


            
        </>
    )
}

export default HomePageNav