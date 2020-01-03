import styled from 'styled-components';

const FooterStyles = styled.footer`
  margin: 10vh 0 0 0;
  width: 100%;
  height: 12vh;
  background-color: ${({ theme }) => theme.colors.primaryHover};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-direction: column;
  p {
    margin: 0;
    padding: 0;
    @media screen and (max-width: 600px) {
      margin: 0;
    }
  }
  a {
    color: white;
  }
`;

const Footer = () => (
  <FooterStyles>
    <p>
      Portafolio Realizado con <a href="https://nextjs.org/">Next.js</a>
    </p>
    <p>Copyright © Alirio A. Angel A.</p>
  </FooterStyles>
);

export default Footer;
