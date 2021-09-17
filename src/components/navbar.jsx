import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  height: 3rem;
  background-color: white;
  border-bottom: 1px solid;
  z-index: 10;

  > .navbar-icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const MenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 992px) {
    display: block;

    & :hover {
      cursor: pointer;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: ${(props) => (props.navbarLogo ? "1.5rem" : "1rem")};
  padding-left: ${(props) => (props.courseTitle ? "1rem" : "0")};
`;

const Navbar = ({ clickIndex, setClickIndex }) => {
  const handleClick = () => {
    setClickIndex(!clickIndex);
  };

  return (
    <StyledNavbar>
      <div className="navbar-icon">
        <StyledNavLink to="/" navbarLogo>
          KODIO
        </StyledNavLink>
        <span>
          <StyledNavLink to="/course" courseTitle>
            | React Beginer Course
          </StyledNavLink>
        </span>
      </div>
      <MenuIcon onClick={handleClick}>
        <i className={clickIndex ? "fas fa-times" : "fas fa-bars"}></i>
      </MenuIcon>
    </StyledNavbar>
  );
};

export default Navbar;
