import NavItem from "./NavItem";
import { useHeaderContex } from "@/providers/HeaderContex";

const Navbar = () => {
  const { isOnepage } = useHeaderContex();
  
  const navItems = [
    {
      name: "INICIO",
      icon: false,
      path: "#",
      dropdown: null,
    },
    {
      name: "QUIÉNES SOMOS",
      icon: false,
      path: "#about__mission__area",
      dropdown: null,
    },
    {
      name: "BENEFICIOS",
      icon: false,
      path: "#service__area",
      dropdown: null,
    },
    {
      name: "CONTACTO",
      icon: false,
      path: "#tb__contact",
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
