import React, { useRef } from 'react';
import { useOnClickOutside } from '../../utils/hooks';
import Menu from '../../Components/menu';
import Burger from '../../Components/burger';
import { BackgroundHeader } from './header.styled';

const Header = props => {
  const [open, setOpen] = React.useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  const topM = TopMove();
  return (
    <>
      <BackgroundHeader ref={node}>
        <Burger topM={topM} open={open} setOpen={setOpen} />
        <Menu topM={topM} open={open} setOpen={setOpen} />
      </BackgroundHeader>
      {props.children}
    </>
  );
};

const TopMove = () => {
  const client = typeof window !== 'undefined';
  const [topM, setTopM] = React.useState(7);
  const HandleTop = () => {
    const body = document.getElementById('__next');
    let topm =
      window.scrollY <= 0
        ? 3
        : window.scrollY + 7 >= body.offsetHeight - window.innerHeight
        ? body.offsetHeight - window.innerHeight
        : window.scrollY + 7;
    setTopM(topm);
  };
  React.useEffect(() => {
    const body = document.getElementById('__next');
    if (client) {
      window.addEventListener('scroll', HandleTop);
    }
    if (body.offsetHeight - window.innerHeight == window.scrollY) {
      window.removeEventListener('scroll', HandleTop);
    }
    return () => client && window.removeEventListener('scroll', HandleTop);
  }, []);
  return topM;
};

export default Header;
