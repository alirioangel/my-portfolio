import { CardWrapper, Buttons } from './about.styled';
const AboutContainer = () => (
  <CardWrapper id="about">
    <p>
      Ingeniero en computación de profesión, con una gran afinidad al desarrollo de software, UI,
      UX, Backend y manejo de datos. Mis habilidades profesionales se han desarrollado en el área
      full-stack, como en la planificación de proyectos desempeñando diferentes posiciones en IT
      como: QA, desarrollo de aplicaciones web y móvil. Llevando el desarrollo de principio a fin.
      Busco cada día mejorar mis habilidades rodeándome de otros desarrolladores, leyendo codigo,
      viendo diferentes cursos en plataformas online o leyendo libros.
    </p>
    <hr></hr>
    <div>
      <Buttons>DESCARGAR CV</Buttons>
      <Buttons>CONTACTAME</Buttons>
    </div>
  </CardWrapper>
);

export default AboutContainer;
