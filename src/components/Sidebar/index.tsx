import { Link, useLocation } from "react-router-dom";

import { Container, Menu } from "./styles";

import homeIcon from "../../assets/images/icons/home.svg";
import orderIcon from "../../assets/images/icons/order.svg";
import menuIcon from "../../assets/images/icons/menu.svg";
import usersIcon from "../../assets/images/icons/users.svg";
import profileIcon from "../../assets/images/icons/profile.svg";
import logoutIcon from "../../assets/images/icons/log-off.svg";

const mainMenus = [
  {
    icon: homeIcon,
    title: "Home",
    path: "/",
  },
  {
    icon: orderIcon,
    title: "Histórico",
    path: "/history",
  },
  {
    icon: menuIcon,
    title: "Cardápio",
    path: "/menu",
  },
  {
    icon: usersIcon,
    title: "Usuários",
    path: "/users",
  },
];

const secondMenus = [
  {
    icon: profileIcon,
    title: "Meu Perfil",
    path: "/profile",
  },
  {
    icon: logoutIcon,
    title: "Sair",
    path: "/logout",
  },
];

export function Sidebar() {
  const { pathname } = useLocation();

  return (
    <Container>
      <header>
        <h2>
          W<span>A</span>
        </h2>
      </header>

      <div className="menus">
        {mainMenus.map((menu) => (
          <Menu key={menu.path} active={pathname === menu.path}>
            <Link to={menu.path}>
              <img src={menu.icon} alt={menu.title} />
              {menu.title}
            </Link>
          </Menu>
        ))}
      </div>
      <div className="menus">
        {secondMenus.map((menu) => (
          <Menu key={menu.path} active={pathname === menu.path}>
            <Link key={menu.path} to={menu.path}>
              <img src={menu.icon} alt={menu.title} />
              {menu.title}
            </Link>
          </Menu>
        ))}
      </div>
    </Container>
  );
}
