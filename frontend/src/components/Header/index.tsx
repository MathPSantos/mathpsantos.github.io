import React, { useState, useContext } from "react";

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

import { ThemeContext } from '../../contexts/theme';
 
import DarkLogo from "../../assets/images/DarkLogo.png";
import LightLogo from "../../assets/images/LightLogo.png";

const Header: React.FC = () => {
  const { theme } = useContext(ThemeContext)

  const [active, setActive] = useState(false);
  const [dropboxActive, setDropboxActive] = useState(false);

  const handleBurguer = () => setActive(!active);

  const handleDropbox = () => setDropboxActive(!dropboxActive);

  return (
    <Container>
      <Nav>
        <NavBar>
          <Logo src={theme.title === 'Light' ? LightLogo : DarkLogo} />

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
