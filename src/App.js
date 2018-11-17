import React, { Component } from 'react';
import {
  AppWrapper,
  Title,
  Subtitle,
  Introduction,
  Contact,
} from './App.styled';

class App extends Component {
  render() {
    return <AppWrapper>
        <Title>Brian D. Ridge</Title>
        <Subtitle>Front-end web development</Subtitle>
        <Introduction>
          I focus on an effortless user experience when building performant, accessable, beautiful UIs. I focus on JavaScript, React, and styled-components.
        </Introduction>
        <Contact>Get in touch with me here</Contact>
        <div>briandridge@gmail.com</div>
        <div>
          <a href="./assets/images/photos/BrianDRidge.pdf" target="_blank">
            Resume
          </a>
        </div>
        <div>
          <a href="http://www.linkedin.com/in/briandridge" target="_blank">
            LinkedIn
          </a>
        </div>
        <div>
          <a href="http://twitter.com/briandridge" target="_blank">
            @briandridge
          </a>
        </div>
        <div>
          <a href="http://github.com/briandridge" target="_blank">
            Github
          </a>
        </div>
        <div>My most recent project:</div>
      </AppWrapper>;
  }
}

export default App;
