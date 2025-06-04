import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Overlay />
        <Content aria-label={"Mobile navigation menu"}>
          <Dialog.Close asChild>
            <Button onClick={onDismiss}>
              <Icon id="close" strokeWidth={2} size={24} />
              <VisuallyHidden>Dismiss Modal</VisuallyHidden>
            </Button>
          </Dialog.Close>
          <Side />
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>

          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MobileMenu;

const Overlay = styled(Dialog.Overlay)`
  background-color: var(--color-gray-700);
  position: fixed;
  opacity: 0.8;
  inset: 0;
`;

const Content = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  padding: 32px;
  background-color: var(--color-white);
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Button = styled(UnstyledButton)`
  position: absolute;
  top: 24px;
  right: 16px;
`;

const Side = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: var(--color-gray-900);
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${18 / 16}rem;
  line-height: 1;

  &:first-child {
    color: var(--color-secondary);
  }
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${14 / 16}rem;
  line-height: 1;
`;
