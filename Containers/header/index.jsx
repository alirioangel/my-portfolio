import * as React from 'react';
import Menu from '../../Components/menu';
import Burger from '../../Components/burger';
import { BackgroundHeader } from './header.styled';

const Header = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <BackgroundHeader>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </BackgroundHeader>
  );
};

export default Header;
