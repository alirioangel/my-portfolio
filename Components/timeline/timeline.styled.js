import styled from 'styled-components';

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

export const TimelineDot = styled.div`
  & {
    background: #06a763;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    z-index: 2;
    color: #fff;
    text-align: center;
    position: absolute;
    right: 47.5%;
    h6 {
      padding: 0;
      font-size: 30px;
      font-weight: bold;
      margin-top: 8px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.29);
    }
  }
`;

export const Card = styled.div`
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  position: relative;
  margin: 8px 0;
  width: 45%;
  z-index: 1;
  background: ${({ theme }) => theme.colors.primaryHover};
  position: relative;
  background: #fff;
  margin-bottom: 5px;
  border-left: 5px solid #1976d2;

  &:after {
    clear: both;
    content: '';
    display: table;
  }
`;

export const CardContent = styled.div`
  text-align: left;
  padding: 1rem;
  border-radius: 0 0 2px 2px;
  p {
    margin: 0;
    color: inherit;
    text-align: justify;
  }
  div {
    margin-bottom: 2rem;
    h6 {
      font-size: 1 rem;
      color: #666;
      text-align: left;
      padding: 0;
      margin: 0;
    }
  }
`;

export const TimelineTitle = styled.h6`
  font-size: 1.4rem;
  margin: 0;
  padding: 0;
  font-weight: normal;
`;

export const TimelineBlock = styled.div`
  & {
    position: relative;
  }
  &:after {
    clear: both;
    content: '';
    display: table;
  }

  :nth-child(odd) ${Card}{
    :before {
      content: '';
      width: 58px;
      height: 4px;
      position: absolute;
      top: 26px;
      left: 100%;
      z-index: -2;
      opacity: 0.4;
      background: #06a763;
    }
  }
  :nth-child(even) ${Card} {
    :before {
      content: '';
      width: 58px;
      height: 4px;
      position: absolute;
      top: 26px;
      left: auto;
      right: 100%;
      z-index: -2;
      opacity: 0.4;
      background: #06a763;
    }
`;

export const TimelineWrapper = styled.div`
  & {
    position: relative;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 23px;
    left: 50%;
    height: 99.5%;
    width: 4px;
    opacity: 0.3;
    background: #06a763;
  }
  ${TimelineBlock}:nth-child(even) ${Card} {
    float: right;
  }
`;
