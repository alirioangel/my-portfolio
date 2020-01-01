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
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
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
  margin-right: 15px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primaryLight};
  border: 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`;
