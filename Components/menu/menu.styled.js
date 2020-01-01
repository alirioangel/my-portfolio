import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primaryLight};
  min-height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  transform: translateX(-100%);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  section {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    color: ${({ theme }) => theme.colors.primaryLight};
    height: 25vh;
    background: ${({ theme }) => theme.colors.primaryDark};
    img {
      width: 150px;
      height: 100px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
  ul {
    padding: 0;
    list-style-type: none;
  }
  i {
    padding-right: 1rem;
  }
  li {
    font-size: 0.7rem;
    text-transform: uppercase;
    padding: 0.5rem 3rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: ${({ theme }) => theme.colors.primaryLinks};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.primaryHover};
    }
  }
`;
