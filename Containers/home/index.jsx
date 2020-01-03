import {
  CardWrapper,
  Card,
  CardContent,
  InfoHeadings,
  Profile,
  Container,
  InfoDetails,
  SocialBar,
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from './home.styled';

import { Email } from 'styled-icons/material/Email';
import { Phone } from 'styled-icons/boxicons-solid/Phone';
import { Location } from 'styled-icons/icomoon/Location';
import { Twitter } from 'styled-icons/boxicons-logos/Twitter';
import { Github } from 'styled-icons/boxicons-logos/Github';
import { Linkedin } from 'styled-icons/boxicons-logos/Linkedin';

const HomeContainer = () => (
  <CardWrapper id="home">
    <Container>
      <Card>
        <Profile>
          <img src="/images/profile.jpg" alt="Image profile" />
          <div></div>
        </Profile>
        <CardContent>
          <InfoHeadings>
            <h4>Alirio Angel</h4>
            <h6>Software engineer</h6>
          </InfoHeadings>
          <InfoDetails>
            <ul>
              <li>
                <span>
                  <i>
                    <Email size="20"></Email>
                  </i>
                  alirioangelarenas@gmail.com
                </span>
              </li>
              <li>
                <span>
                  <i>
                    <Phone size="20"></Phone>
                  </i>
                  +58(424)-3057367
                </span>
              </li>
              <li>
                <span>
                  <i>
                    <Location size="20"></Location>
                  </i>
                  Valencia - Venezuela
                </span>
              </li>
            </ul>
          </InfoDetails>
        </CardContent>
        <SocialBar>
          <GithubIcon>
            <a href="https://github.com/alirioangel" target="_blank">
              <i>
                <Github size="20"></Github>
              </i>
            </a>
          </GithubIcon>

          <LinkedInIcon>
            <a href="https://www.linkedin.com/in/alirioangel/" target="_blank">
              <i>
                <Linkedin size="20"></Linkedin>
              </i>
            </a>
          </LinkedInIcon>

          <TwitterIcon>
            <a href="https://twitter.com/_AlirioAngel" target="_blank">
              <i>
                <Twitter size="20"></Twitter>
              </i>
            </a>
          </TwitterIcon>
        </SocialBar>
      </Card>
    </Container>
  </CardWrapper>
);
export default HomeContainer;
