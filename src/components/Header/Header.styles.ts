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

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
`;

export const NavLink = styled.li`
  a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.3s ease;
    position: relative;

    &:hover {
      opacity: 0.7;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${props => props.theme.colors.text};
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export const ThemeSelect = styled.select`
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  appearance: none;
  background-image: ${props => {
    const textColor = encodeURIComponent(props.theme.colors.text);
    return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${textColor}' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`;
  }};
  background-repeat: no-repeat;
  background-position: right 0.7rem center;
  background-size: 0.75rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23000000' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => 
      props.theme.name === 'light' 
        ? 'rgba(26, 22, 35, 0.2)' 
        : 'rgba(255, 255, 255, 0.2)'};
  }

  option {
    color: ${props => props.theme.colors.text};
  }
`;

