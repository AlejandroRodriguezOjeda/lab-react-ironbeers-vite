import { NavLink } from "react-router-dom";

function Navbar() {

return(
    <nav>

        <NavLink className="HomeIcon" to ="/">
            <img src="src/assets/home-icon.png" alt="Home" />
        </NavLink>
    </nav>
)




}

export default Navbar;
