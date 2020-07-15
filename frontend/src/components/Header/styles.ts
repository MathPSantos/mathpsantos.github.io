import styled from "styled-components";

import { NavLink } from "react-router-dom";

interface BurguerProps {
  active: boolean;
  onClick: () => void;
}

interface LinksProps {
  active: boolean;
}

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  max-width: 1280px;

  position: relative;

  @media (min-width: 760px) {
    height: 90px;
    display: flex;
    align-items: center;
  }
`;

export const NavBar = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 760px) {
    width: 100px;
    height: 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: auto;
  z-index: 3;
`;

export const BurguerWrapper = styled.div<BurguerProps>`
  width: 32px;
  height: 26px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  z-index: 3;
  cursor: pointer;

  > div {
    width: 100%;
    height: 4px;
    background: ${({ theme }) => theme.colors.background.primary};
    transition: 0.3s all;
  }

  > div:nth-child(1) {
    transform: ${({ active }) =>
      active ? "translate(3px, 9px) rotate(45deg)" : "translate(0)"};
  }

  > div:nth-child(2) {
    transform: ${({ active }) =>
      active ? "translateX(100%)" : "translateX(0)"};
    opacity: ${({ active }) => (active ? 0 : 1)};
  }

  > div:nth-child(3) {
    transform: ${({ active }) =>
      active ? "translate(3px, -13px) rotate(-45deg)" : "translate(0)"};
  }

  @media (min-width: 760px) {
    display: none;
  }
`;

export const LinksWrapper = styled.div<LinksProps>`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;

  background: ${({ theme }) => theme.colors.background.tertiary};
  z-index: 0;

  transform: ${({ active }) => (active ? "translate(0)" : "translate(100%)")};
  transition: 0.5s all;

  @media (min-width: 760px) {
    width: auto;
    height: 30px;
    position: relative;

    transform: translate(0);
  }
`;

export const NavLinks = styled.div`
  width: 100%;

  padding: 0 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  > a + a,
  > div,
  > div + a {
    margin-top: 24px;
  }

  @media (min-width: 760px) {
    flex-direction: row;
    width: 500px;

    > a + a,
    > div,
    > div + a {
      margin-top: 0;
      margin-left: 36px;
    }
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fonts.size.xxSmall}px;
  color: ${({ theme }) => theme.colors.text.primary};
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: -8px;

    width: 5px;
    height: 5px;
    background: ${({ theme }) => theme.colors.text.secondary};

    display: none;
  }

  &:hover {
    &:after {
      display: block;
    }
  }
`;

export const Dropbox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  > svg {
    margin-left: 4px;
  }
`;

export const CheveronIcon = styled.div`
  
`;
