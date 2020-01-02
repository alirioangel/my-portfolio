import TLBlock from './blocks';
import { TimelineWrapper, Container } from './timeline.styled';
import { CV } from './cv';

const Timeline = () => {
  return (
    <TimelineWrapper>
      <Container>
        {CV.map(item => (
          <TLBlock
            title={item.title}
            dot={item.dot}
            subtitle={item.subtitle}
            date={item.date}
            description={item.description}
          ></TLBlock>
        ))}
      </Container>
    </TimelineWrapper>
  );
};

export default Timeline;
