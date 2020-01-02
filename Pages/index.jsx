import * as React from 'react';
import Header from '../Containers/header';
import HomeContainer from '../Containers/home';
import AboutContainer from '../Containers/about';
import CurriculumContainer from '../Containers/curriculum';
import SkillsContainer from '../Containers/skills';
import Form from '../Containers/contactme';
import Footer from '../Containers/footer';

const Home = () => (
  <>
    <Header />
    <HomeContainer />
    <AboutContainer />
    <CurriculumContainer />
    <SkillsContainer />
    <Form />
    <Footer />
  </>
);

export default Home;
