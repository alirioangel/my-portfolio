import TLDot from '../dots';
import { TimelineBlock, Card, CardContent, TimelineTitle } from '../timeline.styled';

const TLBlock = () => (
  <TimelineBlock>
    <TLDot></TLDot>
    <Card>
      <CardContent>
        <TimelineTitle>Bachillerato en ciencias</TimelineTitle>
        <div>
          <h6>sub titulo</h6>
          <h6>fecha</h6>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, voluptatum dolorem? Dolores
          enim blanditiis a nobis possimus nesciunt ipsam recusandae adipisci, quis quos alias nisi
          dolor, placeat, cum obcaecati quam.
        </p>
      </CardContent>
    </Card>
  </TimelineBlock>
);

export default TLBlock;
