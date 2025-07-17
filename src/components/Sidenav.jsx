import { RiDashboard2Line, RiGroup3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function Sidenav() {
  return (
    <div className="sidenav" role="banner">
      <div className="brand">
        <p className="brand-name">cubeforce</p>
        <p className="brand-label">Administration</p>
      </div>
      <nav className="navigation" role="navigation">
        <NavLink to="/">
          <RiDashboard2Line />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/clients">
          <RiGroup3Line />
          <span>Client Management</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidenav;
