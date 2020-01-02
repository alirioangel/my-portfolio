import * as React from 'react';
import { StyledBurger } from './burger.styled';

const Burger = ({ open, setOpen, topM }) => {
  return (
    <StyledBurger topM={topM} open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
