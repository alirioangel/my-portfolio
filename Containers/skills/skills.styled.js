import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  display grid;
  grid-template-areas: ' professional personal software'
                      ' text         text     text    ';
  grid-gap: 2%;
  background: ${({ theme }) => theme.colors.primaryHover};
  box-shadow: ${({ theme }) => theme.boxShadow};
  .personal{
    margin:0;
    grid-area: personal;
  }
  .professional{
    margin:0;
    grid-area: professional;
  }
  .software{
    margin:0;
    grid-area: software;
  }
  .text{

    grid-area: text;
    margin: -20px 0 50px 0;
  }
  @media (min-width: 768px) {
    width: 750px;
 

  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1100px;
  }
  @media screen and (max-width: 767px) {
    grid-row-gap: 30px;
    grid-template-areas: 'professional'
    'personal'
    'software'
    'text';
  }
`;

export const Title = styled.div`
  margin-top: 1rem;
  margin-bottom: -20px;
  h3 {
    color: ${({ theme }) => theme.colors.primaryLight};
    font-family: 'Roboto';
    font-size: 1.4rem;
    text-align: center;
    text-transform: capitalize;
    display: block;
    width: 100%;
    font-weight: 300;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.29);
  }
`;

export const SkillBar = styled.div`
  position: relative;
  display: block;
  margin-bottom: 17px;
  margin-top: 45px;
  background: ${({ theme }) => theme.colors.primaryFocus};
  height: 4px;
  margin: 45px 0;
  h5 {
    color: ${({ theme }) => theme.colors.primaryLight};
    font-family: 'Roboto';
    font-weight: 100;
    position: absolute;
    top: -15px;
    left: 0;
  }
  span {
    position: absolute;
    top: 5px;
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: 0.7rem;
    right: 0;
  }
  div {
    background: ${({ theme }) => theme.colors.primaryLight};
    width: ${({ percent }) => percent + '%' || 0};
    height: 4px;
    position: absolute;
    top: 0;
  }
`;
export const TextSkills = styled.p`
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: 1rem;
  text-align:justify;
  padding: 0 2rem;
  margin 0 auto;
`;
