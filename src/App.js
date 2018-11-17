import React, { Component } from 'react';
import {
  AppWrapper,
  Title,
  Subtitle,
  Introduction,
  Contact,
  ContactWrapper,
  Link,
  Icon,
} from './App.styled';

class App extends Component {
  render() {
    return <AppWrapper>
        <Title>Brian D. Ridge</Title>
        <Subtitle>Front-end software engineer</Subtitle>
        <Introduction>
          I focus on an effortless user experience when building performant,
          accessable, beautiful UIs. I focus on JavaScript, React, and
          styled-components.
        </Introduction>
        <Introduction>
          I'm currently working on a micro-front end and building a component library. Ask me about it :) 
        </Introduction>
        <Introduction>
          Something I built for fun: 
          <Link href="http://www.sombrerorecords.com" > Sombrero Records </Link>
        </Introduction>
        <ContactWrapper>
          <Contact>
            <Icon className="far fa-envelope" />
            <span>briandridge@gmail.com</span>
          </Contact>
          <Contact>
            <Link href="./assets/images/photos/BrianDRidge.pdf">
              <Icon className="far fa-file" />
              <span>Resume</span>
            </Link>
          </Contact>
          <Contact>
            <Link href="http://www.linkedin.com/in/briandridge">
              <Icon className="fab fa-linkedin" />
              <span>linkedin.com/in/briandridge</span>
            </Link>
          </Contact>
          <Contact>
            <Link href="http://twitter.com/briandridge">
              <Icon className="fab fa-twitter" />
              <span>@briandridge</span>
            </Link>
          </Contact>
          <Contact>
            <Link href="http://github.com/briandridge">
              <Icon className="fab fa-github" />
              <span>Github</span>
            </Link>
          </Contact>
        </ContactWrapper>
      </AppWrapper>;
  }
}

export default App;
