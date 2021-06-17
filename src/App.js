import { GlobalStyle, Movement, Title } from "./style.js";
import { ThemeProvider } from "styled-components";
import CardList from "./components/CardList";
import logo from "./images/thelogo.png";
import "./style";
import { useState } from "react";

const theme = {
  mainColor: "grey",
  backgroundColor: "lightyellow",
};

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>
          <Movement src={logo} alt="logo" />

          <Title>
            <p>Train your memory a day keeps the ALzheimer away</p>
          </Title>
        </div>
        <CardList />
      </ThemeProvider>
    </div>
  );
}

export default App;
