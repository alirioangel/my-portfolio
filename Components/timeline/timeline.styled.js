import styled from 'styled-components';

export const TimelineWrapper = styled.div``;
export const TimelineBlock = styled.div`
  position: relative;
  ::after {
    clear: both;
    content: '';
    display: table;
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
export const TimelineDot = styled.div`
  background: #06a763;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 2;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 5px;
  right: 2%;
  h6 {
    padding: 0;
    font-size: 30px;
    font-weight: bold;
    margin-top: 8px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.29);
  }
`;
export const Card = styled.div``;
export const TimelineContent = styled.div`
  position: relative;
  background: #fff;
  margin-right: 0;
  z-index: 1;
  margin-bottom: 5px;
  border-left: 5px solid #1976d2;
  ::before {
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
  ::after {
    clear: both;
    content: '';
    display: table;
  }
`;
export const CardContent = styled.div``;
export const TimelineTitle = styled.div`
  max-width: 84%;
  font-weight: normal;
`;
export const TimelineInfo = styled.div``;
