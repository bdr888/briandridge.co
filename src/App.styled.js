import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  font-family: Raleway;
  margin: 0 1rem;
`;

const Title = styled.div`
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const Subtitle = styled.div`
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
`;

const Introduction = styled.div`
  margin: 1rem auto;
  max-width: 500px;
  font-size: 1rem;
  text-align: left;
`;

const ContactWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Contact = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 40px;
  justify-content: start;
  align-items: center;
  background-color: lightgray;
  border-top: 5px solid white;
  font-weight: 600;
  padding: 0 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

const Icon = styled.span`
  margin-right: 10px;
`;

export {
  AppWrapper,
  Title,
  Subtitle,
  Introduction,
  Contact,
  ContactWrapper,
  Link,
  Icon,
};
