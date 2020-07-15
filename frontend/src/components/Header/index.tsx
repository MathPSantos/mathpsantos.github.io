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
  LinkContainer,
  CheveronIcon,
  DropboxContent
} from "./styles";

import DarkLogo from "../../assets/images/DarkLogo.png";

const Header: React.FC = () => {
  const [active, setActive] = useState(true);
  const [dropboxActive, setDropboxActive] = useState(false);

  const handleBurguer = () => {
    setActive(!active);
  };

  const handleDropbox = () => {
    console.log('teste')
    setDropboxActive(!dropboxActive);
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
              <LinkContainer onClick={handleDropbox} active={dropboxActive}>
                <Link to="">Work</Link>
                <CheveronIcon />
              </LinkContainer>
              <DropboxContent active={dropboxActive}>
                <Link to="">Portfolio</Link>
                <Link to="">Articles</Link>
                <Link to="">Videos</Link>
              </DropboxContent>
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
