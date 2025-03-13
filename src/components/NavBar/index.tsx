import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import * as Elements from "./styles";
import { IoMdMenu } from "react-icons/io";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <Elements.Header>
        <Elements.Container>
          <Elements.MenuButton onClick={() => setIsOpen(!isOpen)}>
            <IoMdMenu size={24} />
          </Elements.MenuButton>

          <Elements.Title>
            <NavLink to="/">Agora vai</NavLink>
          </Elements.Title>

          <Elements.Nav>
            <NavLink to="/" className="nav-item">
              Página Inicial
            </NavLink>
            <NavLink to="/format/abnt" className="nav-item">
              Formatar nas normas da ABNT
            </NavLink>
            <NavLink to="/classification/get-result" className="nav-item">
              Classificação da prova
            </NavLink>
            <NavLink to="/about" className="nav-item">
              Sobre
            </NavLink>
          </Elements.Nav>
          <Elements.ToggleButton onClick={themeContext?.toggleTheme}>
            <Elements.ToggleIcon>
              {themeContext?.theme?.name === "light" ? (
                <FaSun color="#ff5100" />
              ) : (
                <FaMoon color="#000" />
              )}
            </Elements.ToggleIcon>
          </Elements.ToggleButton>
        </Elements.Container>
      </Elements.Header>

      {isOpen && (
        <Elements.MobileMenu>
          <Elements.Overlay onClick={() => setIsOpen(false)} />
          <Elements.MobileNav>
            <Elements.CloseButton onClick={() => setIsOpen(false)}>
              <IoMdMenu size={24} />
            </Elements.CloseButton>

            <Elements.NavMobile>
              <NavLink to="/" className="mobile-item">
                Página Inicial
              </NavLink>
              <NavLink to="/format/abnt" className="mobile-item">
                Formatar nas normas da ABNT
              </NavLink>
              <NavLink to="/classification/get-result" className="mobile-item">
                Classificação da prova
              </NavLink>
              <NavLink to="/about" className="mobile-item">
                Sobre
              </NavLink>
            </Elements.NavMobile>
          </Elements.MobileNav>
        </Elements.MobileMenu>
      )}
    </>
  );
};

export default Navbar;
