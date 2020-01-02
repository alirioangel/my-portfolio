import TLBlock from './blocks';
import TLDot from './dots';
import { TimelineWrapper, Container } from './timeline.styled';

const Timeline = () => {
  return (
    <TimelineWrapper>
      <Container>
        <TLBlock></TLBlock>
        <TLBlock></TLBlock>
        <TLBlock></TLBlock>
        <TLBlock></TLBlock>
      </Container>
    </TimelineWrapper>
  );
};

export default Timeline;
