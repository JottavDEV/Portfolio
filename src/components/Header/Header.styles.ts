import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${props => props.theme.colors.background};
  border-bottom: 1px solid ${props => 
    props.theme.name === 'light' 
      ? 'rgba(26, 22, 35, 0.1)' 
      : 'rgba(255, 255, 255, 0.1)'};
  backdrop-filter: blur(10px);
  transition: background-color 0.3s ease, border-color 0.3s ease;
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  
  img {
    height: 100%;
    width: auto;
    object-fit: contain;
  }
`;

export const NavLinks = styled.ul<{ $isOpen?: boolean }>`
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    right: ${props => props.$isOpen ? '0' : '-100%'};
    width: 280px;
    height: calc(100vh - 80px);
    background-color: ${props => props.theme.colors.background};
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    gap: 0;
    box-shadow: -4px 0 24px ${props => 
      props.theme.name === 'light' 
        ? 'rgba(26, 22, 35, 0.1)' 
        : 'rgba(255, 255, 255, 0.1)'};
    transition: right 0.3s ease;
    z-index: 998;
    overflow-y: auto;
  }
`;

export const NavLink = styled.li`
  position: relative;

  a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    transition: opacity 0.3s ease;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${props => props.theme.colors.text};
      transition: width 0.3s ease;
    }

    &:hover {
      opacity: 0.8;

      &::after {
        width: 100%;
      }
    }
  }

  /* Estilos para Link do Next.js */
  a[href^="/"] {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    transition: opacity 0.3s ease;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${props => props.theme.colors.text};
      transition: width 0.3s ease;
    }

    &:hover {
      opacity: 0.8;

      &::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 0;
    border-bottom: 1px solid ${props => 
      props.theme.name === 'light' 
        ? 'rgba(26, 22, 35, 0.1)' 
        : 'rgba(255, 255, 255, 0.1)'};

    &:last-child {
      border-bottom: none;
    }

    a {
      display: block;
      width: 100%;
      font-size: 1.1rem;

      &::after {
        display: none;
      }
    }
  }
`;

export const LanguageDropdownContainer = styled.div`
  position: relative;
`;

export const LanguageDropdownButton = styled.button<{ $isOpen: boolean }>`
  background: none;
  border: 1px solid ${props => 
    props.theme.name === 'light' 
      ? 'rgba(26, 22, 35, 0.1)' 
      : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.theme.colors.text};
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  position: relative;
  appearance: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    color: #000000;
    
    &::after {
      border-top-color: #000000;
    }
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => 
      props.theme.name === 'light' 
        ? 'rgba(26, 22, 35, 0.2)' 
        : 'rgba(255, 255, 255, 0.2)'};
  }

  &::after {
    content: '';
    position: absolute;
    right: 0.7rem;
    top: 50%;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid ${props => props.theme.colors.text};
    transition: transform 0.3s ease, border-top-color 0.3s ease;
    transform: translateY(-50%) ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

export const LanguageDropdownList = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.5rem;
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => 
    props.theme.name === 'light' 
      ? 'rgba(26, 22, 35, 0.1)' 
      : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 8px;
  list-style: none;
  padding: 0.5rem 0;
  min-width: 100px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  opacity: ${props => props.$isOpen ? '1' : '0'};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
  z-index: 1000;
`;

export const LanguageDropdownItem = styled.li<{ $isSelected: boolean }>`
  padding: 0.5rem 1.5rem;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
  position: relative;
  transition: background-color 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: ${props => props.$isSelected ? '3px' : '0'};
    height: ${props => props.$isSelected ? '60%' : '0'};
    background-color: ${props => props.theme.colors.text};
    border-radius: 0 2px 2px 0;
    transition: width 0.2s ease, height 0.2s ease;
    opacity: ${props => props.$isSelected ? '1' : '0'};
  }

  &:hover {
    background-color: ${props => 
      props.theme.name === 'light' 
        ? 'rgba(26, 22, 35, 0.1)' 
        : 'rgba(255, 255, 255, 0.1)'};
    
    &::before {
      width: 3px;
      height: 60%;
      opacity: 1;
    }
  }
`;

export const ThemeDropdownContainer = styled.div`
  position: relative;
`;

export const ThemeDropdownButton = styled.button<{ $isOpen: boolean }>`
  background: none;
  border: 1px solid ${props => 
    props.theme.name === 'light' 
      ? 'rgba(26, 22, 35, 0.1)' 
      : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.theme.colors.text};
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  position: relative;
  appearance: none;
  min-width: 140px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    color: #000000;
    
    &::after {
      border-top-color: #000000;
    }
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => 
      props.theme.name === 'light' 
        ? 'rgba(26, 22, 35, 0.2)' 
        : 'rgba(255, 255, 255, 0.2)'};
  }

  &::after {
    content: '';
    position: absolute;
    right: 0.7rem;
    top: 50%;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid ${props => props.theme.colors.text};
    transition: transform 0.3s ease, border-top-color 0.3s ease;
    transform: translateY(-50%) ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

export const ThemeDropdownList = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.5rem;
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => 
    props.theme.name === 'light' 
      ? 'rgba(26, 22, 35, 0.1)' 
      : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 8px;
  list-style: none;
  padding: 0.5rem 0;
  min-width: 140px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  opacity: ${props => props.$isOpen ? '1' : '0'};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
  z-index: 1000;
`;

export const ThemeDropdownItem = styled.li<{ $isSelected: boolean }>`
  padding: 0.5rem 1.5rem;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
  position: relative;
  transition: background-color 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: ${props => props.$isSelected ? '3px' : '0'};
    height: ${props => props.$isSelected ? '60%' : '0'};
    background-color: ${props => props.theme.colors.text};
    border-radius: 0 2px 2px 0;
    transition: width 0.2s ease, height 0.2s ease;
    opacity: ${props => props.$isSelected ? '1' : '0'};
  }

  &:hover {
    background-color: ${props => 
      props.theme.name === 'light' 
        ? 'rgba(26, 22, 35, 0.1)' 
        : 'rgba(255, 255, 255, 0.1)'};
    
    &::before {
      width: 3px;
      height: 60%;
      opacity: 1;
    }
  }
`;

export const HamburgerButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 999;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    width: 30px;
    height: 3px;
    background-color: ${props => props.theme.colors.text};
    border-radius: 3px;
    transition: all 0.3s ease;
    transform-origin: center;

    &:nth-child(1) {
      transform: ${props => props.$isOpen ? 'rotate(45deg) translate(10px, 10px)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${props => props.$isOpen ? '0' : '1'};
      transform: ${props => props.$isOpen ? 'translateX(-20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${props => props.$isOpen ? 'rotate(-45deg) translate(10px, -10px)' : 'rotate(0)'};
    }
  }

  &:focus {
    outline: none;
  }
`;

export const MobileMenuOverlay = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'block' : 'none'};
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: calc(100vh - 80px);
    background-color: ${props => 
      props.theme.name === 'light' 
        ? 'rgba(26, 22, 35, 0.5)' 
        : 'rgba(0, 0, 0, 0.5)'};
    z-index: 997;
    opacity: ${props => props.$isOpen ? '1' : '0'};
    transition: opacity 0.3s ease;
  }
`;

