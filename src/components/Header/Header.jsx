import React from "react";
import styled from "styled-components";
import { WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(true);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Filler />

        <MobileIconsWrapper>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={1} />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </UnstyledButton>

          <UnstyledButton>
            <Icon id="search" strokeWidth={1} />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>

          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={1} />
            <VisuallyHidden>Open Menu</VisuallyHidden>
          </UnstyledButton>
        </MobileIconsWrapper>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);

  @media ${({ theme }) => theme.devices.tabletAndDown} {
    justify-content: space-between;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${({ theme }) => theme.devices.phoneAndDown} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 2vw + 1rem, 3rem);
  margin: 0px 48px;
  overflow: auto;

  @media ${({ theme }) => theme.devices.tabletAndDown} {
    display: none;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media ${({ theme }) => theme.devices.tabletAndDown} {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${({ theme }) => theme.devices.tabletAndDown} {
    flex: revert;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const MobileIconsWrapper = styled.div`
  display: none;

  @media ${({ theme }) => theme.devices.tabletAndDown} {
    display: flex;
    gap: 32px;
    margin-left: 32px;
  }

  @media ${({ theme }) => theme.devices.phoneAndDown} {
    gap: 16px;
  }
`;

export default Header;
