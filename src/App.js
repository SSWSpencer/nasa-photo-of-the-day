import React from "react";
import "./App.css";
import APODContainer from "./components/APODContainer";
import styled from "styled-components";
import backgroundPhoto from "./components/Photos/backgroundImg.jpg";

function App() {

  const Background = styled.div `
  background-image: url(${backgroundPhoto});
  `
  const AppContainer = styled.div`
  background-image: linear-gradient(white, black);
  border-radius: 10px;
  width: 60%;
  margin: 0 auto;
  text-align: center;
  border: 3px solid black;

  `

  return (
    <Background>
      <AppContainer>
        <h1>Nasa's Astrology Photo of the Day</h1>
        <APODContainer />
      </AppContainer>
    </Background>
  );
}

export default App;
