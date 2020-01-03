import styled from 'styled-components';

export const CardWrapper = styled.div`
  padding: 0 15px;
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
  display: grid;
  justify-content: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.MainText};
  padding: 1rem 2rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.colors.primaryLight};
  p {
    font-size: 1.2rem;
    text-align: justify;
    margin: 0 auto;
    padding-bottom: 30px;
  }
`;
export const Buttons = styled.button`
  background: ${({ theme }) => theme.colors.primaryHover};
  padding: 0.7rem 2rem;
  margin: 0 15px;
  font-size: 1rem;
  a {
    color: ${({ theme }) => theme.colors.primaryLight};
    text-decoration: none;
  }
  border: 0;
  box-shadow: ${({ theme }) => theme.boxShadow};
  @media screen and (max-width: 767px) {
    margin: 10px auto;
    width: 70vw;
  }
`;
