import React, { useState } from "react";

import { Container, NavBar, Logo, BurguerWrapper, LinksWrapper, NavLinks, Link } from "./styles";

import DarkLogo from "../../assets/images/DarkLogo.png";

const Header: React.FC = () => {
  const [active, setActive] = useState(false);

  const handleBurguer = () => {
    setActive(!active);
  };

  return (
    <Container>
      <NavBar>
        <Logo src={DarkLogo} />

        <BurguerWrapper onClick={handleBurguer} active={active}>
          <div />
          <div />
          <div />
        </BurguerWrapper>
      </NavBar>
      <LinksWrapper active={active}>
        <NavLinks>
            <Link to="" >About</Link>
            <Link to="" >Work</Link>
            <Link to="" >Contact</Link>
            <Link to="" >See my CV</Link>
        </NavLinks>
      </LinksWrapper>
    </Container>
  );
};

export default Header;
