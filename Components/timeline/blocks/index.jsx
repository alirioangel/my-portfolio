import TLDot from '../dots';
import { TimelineBlock, Card, CardContent, TimelineTitle } from '../timeline.styled';

const TLBlock = ({ title, dot, date, subtitle, description }) => (
  <TimelineBlock>
    <TLDot>{dot}</TLDot>
    <Card>
      <CardContent>
        <TimelineTitle>{title}</TimelineTitle>
        <div>
          <h6>{subtitle}</h6>
          <h6>{date}</h6>
        </div>
        <p>{description}</p>
      </CardContent>
    </Card>
  </TimelineBlock>
);

export default TLBlock;
