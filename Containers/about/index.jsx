import React, { useEffect } from 'react';
import { CardWrapper, Buttons } from './about.styled';
const AboutContainer = () => {
  return (
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
        <Buttons>
          <a onClick={() => openTab()}>DESCARGAR CV</a>
        </Buttons>
        <Buttons>
          <a href="#contact">CONTACTAME</a>
        </Buttons>
      </div>
    </CardWrapper>
  );
};

const openTab = () => {
  const pdf = '/PDF/alirioangel-cv.pdf';
  const client = typeof window !== 'undefined';
  if (client) {
    console.log('clicked!!');
    window.open('/PDF/alirioangel-cv.pdf', '_blank');
  }
  return () => client;
};

export default AboutContainer;
