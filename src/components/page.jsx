import React from 'react';
import Home from './home';
import AboutMe from './about-me';
import FamilyProgramme from './family-programme';
import TimeoutProgramme from './timeout-programme';
import Qualifications from './qualifications';
import Contact from './contact';

const Page = ({page, onClick}) => {
  switch (page) {
    case 'home':
        return <Home />;
    case 'about-me':
        return <AboutMe onClick={ onClick } />;
    case 'family-programme':
        return <FamilyProgramme onClick={ onClick } />;
    case 'timeout-programme':
        return <TimeoutProgramme onClick={ onClick } />;
    case 'qualifications':
        return <Qualifications />;
    case 'contact':
        return <Contact />;
    default:
      return null;
  }
}

export default Page;