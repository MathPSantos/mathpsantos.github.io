import React, { useState } from "react";

import {
  Container,
  Nav,
  NavBar,
  Logo,
  BurguerWrapper,
  LinksWrapper,
  NavLinks,
  Link,
  Dropbox,
  CheveronIcon
} from "./styles";

import DarkLogo from "../../assets/images/DarkLogo.png";

const Header: React.FC = () => {
  const [active, setActive] = useState(false);

  const handleBurguer = () => {
    setActive(!active);
  };

  return (
    <Container>
      <Nav>
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
            <Link to="">About</Link>
            <Dropbox>
              <Link to="">Work</Link>
              <CheveronIcon />
            </Dropbox>
            <Link to="">Contact</Link>
            <Link to="">See my CV</Link>
          </NavLinks>
        </LinksWrapper>
      </Nav>
    </Container>
  );
};

export default Header;
