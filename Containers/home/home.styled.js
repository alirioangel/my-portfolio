import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  position: relative;
  padding-top: 15px;
  padding-bottom: 30px;
  overflow: visible;
  width: 100%;
  height: auto;
`;

export const Card = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow};
  position: relative;
  margin: 8px 0;
  width: 100%;
  overflow: hidden;
  -webkit-transition: height 1s, color 1s, margin 1s;
  transition: height 1s, color 1s, margin 1s;
  z-index: 1;
  background: ${({ theme }) => theme.colors.primaryHover};
  @media screen and (max-width: 767px) {
    position: relative;
    width: 100%;
    overflow: visible;
    z-index: 1;
  }
`;

export const Profile = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;
  float: right !important;
  img {
    width: 400px;
    height: auto;
    display: block;
    max-width: 100%;
  }
  div {
    top: 0;
    z-index: 1;
    position: absolute;
    border-style: solid;
    border-width: 400px 0 0 100px;
    border-color: rgba(223, 50, 50, 0) transparent transparent
      ${({ theme }) => theme.colors.primaryHover};
  }
  @media screen and (max-width: 767px) {
    position: absolute;
    bottom: 85%;
    left: 0;
    width: 150px;
    height: auto;
    margin-right: auto;
    margin-left: auto;
    z-index: 1;
    background-color: transparent;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      box-shadow: ${({ theme }) => theme.boxShadow};
    }
    div {
      display: none;
    }
  }
  @media (min-width: 780px) {
    div {
      left: -3px;
    }
  }
`;

export const CardContent = styled.div`
  padding: 10px;
  border-radius: 0 0 2px 2px;
  p {
    margin: 0;
    color: inherit;
    text-align: center;
  }
  @media screen and (max-width: 767px) {
    padding: 20px 0 0 0;
  }
`;
export const InfoHeadings = styled.div`
  max-width: 514px;
  color: ${({ theme }) => theme.colors.primaryLight};
  h4 {
    font-family: 'Roboto';
    font-size: 2rem;
    padding-left: 3rem;
    text-align: left;
    text-transform: uppercase;
    display: block;
    width: 100%;
    font-weight: 900;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.29);
  }
  h6 {
    font-family: 'Roboto';
    font-size: 1.6rem;
    padding-left: 3rem;
    text-align: left;
    text-transform: capitalize;
    display: block;
    width: 100%;
    font-weight: 300;
    margin-top: -30px;
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.29);
  }

  @media screen and (max-width: 767px) {
    h4 {
      padding: 0 20px;
    }
    h6 {
      padding: 0 20px;
    }
  }
`;
export const InfoDetails = styled.div`
  display: table;
  margin: 0;
  max-width: 100%;
  padding: 0;
  max-width: 515px;
  margin-top: -30px;
  ul {
    text-align: left;
    list-style-type: none;
    li {
      clear: both;
      span {
        display: block;
        float: left;
        color: ${({ theme }) => theme.colors.primaryLight};
        line-height: 26px;
        font-size: 15px;
        font-weight: 400;
        i {
          padding-left: 2px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    ul {
      padding: 0 20px;
    }
    h6 {
      padding: 0 20px;
    }
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1100px;
  }
`;

export const SocialBar = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  grid-template-columns: repeat(3, 60px);
  margin: 40px 0 0 0;
  padding: 30px 0;
  gap: 25px;
  @media (min-width: 768px) {
    justify-content: flex-start;
    padding-left: 3rem;
  }
  @media (min-width: 1200px) {
    justify-content: center;
  }
`;
const socialIcon = styled.button`
  box-shadow: ${({ theme }) => theme.boxShadow};
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 0;
  i {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
  :hover {
    opacity: 0.6;
    transition: 0.6s opacity;
  }
`;

export const GithubIcon = styled(socialIcon)`
  background: #222;
`;

export const LinkedInIcon = styled(socialIcon)`
  background: #006;
`;
export const TwitterIcon = styled(socialIcon)`
  background: #6af;
`;
