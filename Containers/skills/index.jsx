import { Container, Title, SkillBar, TextSkills } from './skills.styled';
import { Books } from 'styled-icons/icomoon/Books';

const SkillsContainer = () => {
  return (
    <div id="skills">
      <h1>
        <Books size="60" /> Habilidades
      </h1>
      <Container>
        <div className="professional">
          <Title>
            <h3>Profesionales</h3>
          </Title>
          <SkillBar percent="90">
            <h5>C++</h5>
            <span>60%</span>
            <div></div>
          </SkillBar>
          <SkillBar percent="80">
            <h5>JAVASCRIPT</h5>
            <span>80%</span>
            <div></div>
          </SkillBar>
          <SkillBar percent="90">
            <h5>NODEJS</h5>
            <span>90%</span>
            <div></div>
          </SkillBar>
          <SkillBar percent="70">
            <h5>MONGODB</h5>
            <span>70%</span>
            <div></div>
          </SkillBar>
        </div>
        <div className="personal">
          <Title>
            <h3>Personales</h3>
          </Title>
          <SkillBar percent="90">
            <h5>COMUNICACION</h5>
            <span>90%</span>
            <div></div>
          </SkillBar>
          <SkillBar percent="90">
            <h5>RESOLUCION DE PROBLEMAS</h5>
            <span>90%</span>
            <div></div>
          </SkillBar>
          <SkillBar percent="90">
            <h5>PROACTIVIDAD</h5>
            <span>90%</span>
            <div></div>
          </SkillBar>
          <SkillBar percent="100">
            <h5>CONSTANCIA</h5>
            <span>100%</span>
            <div></div>
          </SkillBar>
        </div>
        <div className="software">
          <Title>
            <h3>Software</h3>
          </Title>
          <SkillBar percent="80">
            <h5>VSCODE</h5>
            <span>80%</span>
            <div></div>
          </SkillBar>
          <SkillBar percent="60">
            <h5>UNREAL</h5>
            <span>60%</span>
            <div></div>
          </SkillBar>
          <SkillBar percent="60">
            <h5>UNITY</h5>
            <span>60%</span>
            <div></div>
          </SkillBar>
          <SkillBar percent="80">
            <h5>POSTMAN</h5>
            <span>80%</span>
            <div></div>
          </SkillBar>
        </div>
        <div className="text">
          <Title>
            <h3>Mas sobre mis habilidades</h3>
          </Title>
          <TextSkills>
            Durante casi 3 años me centre en el entorno de Javascript aprendiendo multiples
            tecnologias para el desarrollo web tanto en el front-end como en el backend. Sin
            embargo, mi curiosidad y ganas de aprender mas alla me han llevado a conocer otros
            lenguajes y software normalmente especializados al area de los videojuegos para seguir
            lo que me apasiona.
          </TextSkills>
        </div>
      </Container>
    </div>
  );
};
export default SkillsContainer;
