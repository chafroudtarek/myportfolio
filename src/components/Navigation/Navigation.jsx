import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";

const NavigationLink = ({ icon = null, route = "/", children }) => {
  return (
    <NavLink
      to={route}
      className="navigation_link"
      onClick={() => console.log("close sidebar")}
    >
      {icon}
      <span className="navigation_link__label">{children}</span>
    </NavLink>
  );
};

const Navigation = () => {
  return (
    <div className="navigation__container">
      <NavigationLink route="/" icon={<HomeIcon />}>
        Home
      </NavigationLink>
      <NavigationLink route="/login" icon={<HomeIcon />}>
        Test
      </NavigationLink>
    </div>
  );
};

export default Navigation;
