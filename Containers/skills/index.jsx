import { Container, Title, SkillBar } from './skills.styled';
import { Books } from 'styled-icons/icomoon/Books';

const SkillsContainer = () => {
  return (
    <div>
      <h1>
        <Books size="60" /> Habilidades
      </h1>
      <Container>
        <Title>
          <h3>Profesionales</h3>
        </Title>
        <Title>
          <h3>Personales</h3>
        </Title>
        <Title>
          <h3>Software</h3>
        </Title>
        <SkillBar percent="90">
          <h5>HTML</h5>
          <span>90%</span>
          <div></div>
        </SkillBar>
        <SkillBar percent="90">
          <h5>COMUNICACION</h5>
          <span>90%</span>
          <div></div>
        </SkillBar>
        <SkillBar percent="80">
          <h5>VSCODE</h5>
          <span>80%</span>
          <div></div>
        </SkillBar>
        <SkillBar percent="80">
          <h5>JAVASCRIPT</h5>
          <span>80%</span>
          <div></div>
        </SkillBar>
        <SkillBar percent="90">
          <h5>RESOLUCION DE PROBLEMAS</h5>
          <span>90%</span>
          <div></div>
        </SkillBar>
        <SkillBar percent="60">
          <h5>UNREAL</h5>
          <span>60%</span>
          <div></div>
        </SkillBar>
        <SkillBar percent="90">
          <h5>NODEJS</h5>
          <span>90%</span>
          <div></div>
        </SkillBar>
        <SkillBar percent="90">
          <h5>PROACTIVIDAD</h5>
          <span>90%</span>
          <div></div>
        </SkillBar>
        <SkillBar percent="60">
          <h5>PHOTOSHOP</h5>
          <span>60%</span>
          <div></div>
        </SkillBar>
        <SkillBar percent="70">
          <h5>MONGODB</h5>
          <span>70%</span>
          <div></div>
        </SkillBar>
        <SkillBar percent="100">
          <h5>CONSTANCIA</h5>
          <span>100%</span>
          <div></div>
        </SkillBar>
        <SkillBar percent="80">
          <h5>POSTMAN</h5>
          <span>80%</span>
          <div></div>
        </SkillBar>
      </Container>
    </div>
  );
};
export default SkillsContainer;
