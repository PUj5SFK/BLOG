import React from "react";
import { HeaderWrapper, Logo, Nav, NavItem } from '../style'
import { Link } from "react-router-dom";
function Header() {
  return (
    <HeaderWrapper>
      <Logo>Jason's Blog</Logo>
      <Nav>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/article">Article</Link>
        </NavItem>
        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
