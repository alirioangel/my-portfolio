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
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  position: relative;
  margin: 8px 0;
  width: 100%;
  overflow: hidden;
  -webkit-transition: height 1s, color 1s, margin 1s;
  transition: height 1s, color 1s, margin 1s;
  z-index: 1;
  background: ${({ theme }) => theme.colors.primaryHover};
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
`;

export const CardContent = styled.div`
  padding: 10px;
  border-radius: 0 0 2px 2px;
  p {
    margin: 0;
    color: inherit;
    text-align: center;
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
`;
const socialIcon = styled.button`
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 0;
  i {
    color: ${({ theme }) => theme.colors.primaryLight};
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
