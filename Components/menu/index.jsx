import * as React from 'react';
import { StyledMenu } from './menu.styled';
import Logo from '../logo';
import Link from 'next/link';
import { Home } from 'styled-icons/icomoon/Home';
import { UserDetail } from 'styled-icons/boxicons-solid/UserDetail';
import { GraduationCap } from 'styled-icons/fa-solid/GraduationCap';
import { Books } from 'styled-icons/icomoon/Books';
import { Slideshow } from 'styled-icons/remix-fill/Slideshow';
import { ContactMail } from 'styled-icons/material/ContactMail';

const Menu = ({ open, topM }) => {
  return (
    <StyledMenu topM={topM} open={open}>
      <section>
        <Logo></Logo>
        <h3>Alirio A. Angel A.</h3>
      </section>
      <ul>
        <li>
          <Link href="#home">
            <span>
              <i>
                <Home size="20" />
              </i>
              Inicio
            </span>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <span>
              <i>
                <UserDetail size="20" />
              </i>
              Sobre mi
            </span>
          </Link>
        </li>
        <li>
          <Link href="#education">
            <span>
              <i>
                <GraduationCap size="20" />
              </i>
              Educacion
            </span>
          </Link>
        </li>
        <li>
          <Link href="#skills">
            <span>
              <i>
                <Books size="20" />
              </i>
              Habilidades
            </span>
          </Link>
        </li>

        <li>
          <Link href="#portfolio">
            <span>
              <i>
                <Slideshow size="20" />
              </i>
              Portafolio
            </span>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <span>
              <i>
                <ContactMail size="20" />
              </i>
              Contactame
            </span>
          </Link>
        </li>
      </ul>
    </StyledMenu>
  );
};
export default Menu;
