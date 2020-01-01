import * as React from 'react';
import Header from '../Containers/header';
import HomeContainer from '../Containers/home';
import AboutContainer from '../Containers/about';
import CurriculumContainer from '../Containers/curriculum';

const Home = () => (
  <div>
    <Header />
    <HomeContainer />
    <AboutContainer />
    <CurriculumContainer />
  </div>
);

export default Home;
