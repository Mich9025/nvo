import NavItem from "./NavItem";
import { useHeaderContex } from "@/providers/HeaderContex";

const Navbar = () => {
  const { isOnepage } = useHeaderContex();
  
  const navItems = [
    {
      name: "INICIO",
      icon: false,
      path: "/",
      dropdown: null,
    },
    {
      name: "QUIÉNES SOMOS",
      icon: false,
      path: "/quienes-somos",
      dropdown: null,
    },
    {
      name: "SERVICIOS",
      icon: false,
      path: "/servicios",
      dropdown: null,
    },
    {
      name: "TRABAJA CON NOSOTROS",
      toggler: false,
      path: "/trabaja-con-nosotros",
      dropdown: null,
    },

    /* Comentado - Projects
    {
      name: "PROJECTS",
      icon: false,
      path: "#project__area",
      dropdown: null,
    },
    */
    /* Comentado - Blogs
    {
      name: "BLOGS",
      icon: false,
      path: "#blog__area",
      dropdown: null,
    },
    */
  ];

  return (
    <div className="headerarea__component">
      <div className="headerarea__main__menu">
        <nav>
          <ul>
            {navItems?.map((navItem, idx) => (
              <NavItem key={idx} item={navItem} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
