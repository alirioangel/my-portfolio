import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 2rem;
  overflow: hidden;
  font-size: 1.5rem;
  margin-left: 3rem;
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
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`;
export const FormStyles = styled.form`
  display: grid;
  text-align: left;
  justify-content: flex-start;

  input,
  textarea {
    margin-bottom: 1rem;
    border-radius: 0.2rem;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    box-shadow: none;
    border: 1px solid;
    ::placeholder {
      font-size: 1rem;
      font-family: 'Rambla';
    }
  }
  textarea {
    font-size: 1rem;
    width: 40vw;
    height: 17vh;
    font-family: 'roboto';
    resize: none;
  }

  button {
    background-color: ${({ theme }) => theme.colors.primaryLinks};
    border: 1px solid black;
    border-radius: 4px;
    padding: 0.5rem 0.5rem;
    color: white;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
      transform: translateY(-3px);
      box-shadow: 5px 5px 10px rgba(0, 50, 50, 0.5);
    }
  }
  @media screen and (max-width: 780px) {
    margin: 0;
    width: 80%;
    h1 {
      font-size: 1.5rem;
    }
  }
`;
export const Profile = styled.div`
  position: absolute;
  top: 0;
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
    border-width: 100vw 0 0 20vw;
    border-color: rgba(223, 50, 50, 0) transparent transparent
      ${({ theme }) => theme.colors.primaryLight};
  }
`;
export const ErrorMessage = styled.div`
  color: #f22;
  font-size: 0.8rem;
`;
export const Message = styled.div`
  color: #04f;
  font-size: 0.8rem;
`;
