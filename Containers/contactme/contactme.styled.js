import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 2rem;
  overflow: hidden;
  font-size: 1.5rem;
  margin-left: 3rem;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.primaryLight};

  @media (min-width: 768px) {
    width: 750px;
    padding: 0;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1100px;
  }
  @media screen and (max-width: 767px) {
    overflow: visible;
  }

  box-shadow: ${({ theme }) => theme.boxShadow};
`;
export const FormStyles = styled.form`
  display: grid;
  text-align: left;
  justify-content: flex-start;
  padding: 2rem;
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
      font-family: 'roboto';
    }
  }
  textarea {
    font-size: 1rem;
    width: 30vw;
    height: auto;
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
  @media screen and (max-width: 767px) {
    overflow: visible;
    margin: 100px 0 0 0;
    justify-content: center;
    input,
    textarea {
      width: 70vw;
      padding: 0;
    }
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
  @media screen and (max-width: 767px) {
    position: absolute;
    bottom: 85%;
    top: auto;
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
`;
export const ErrorMessage = styled.div`
  color: #f22;
  font-size: 0.8rem;
`;
export const Message = styled.div`
  color: #04f;
  font-size: 0.8rem;
`;

export const MainTitle = styled.h1`
  @media screen and (max-width: 767px) {
    margin-bottom: 120px;
  }
`;
