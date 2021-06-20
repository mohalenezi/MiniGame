import styled, { createGlobalStyle, keyframes } from "styled-components";
export const GlobalStyle = createGlobalStyle`
body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.mainColor};
    padding: 0;
    margin: 50px;
    box-sizing: border-box;
}
P {
    font-style: italic;
}
`;

export const Title = styled.h1`
  text-align: center;
  p {
    background-color: #282c34;
    min-height: 10vh;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 6vmin);
    color: white;
  }
`;

export const Description = styled.h3`
  text-align: center;
  font-size: 40px;
`;

export const spinlogo = keyframes`
 0% {
        transform: skewY(0);
    }
    25% {
        transform: skewY(8deg);
    }
    50% {
        transform: skewY(-16deg);
    }
    75% {
        transform: skewY(16deg);
    }
    100% {
        transform: skewY(0deg);
    }
`;

export const Movement = styled.img`
  @media (prefers-reduced-motion: no-preference) {
    animation: ${spinlogo} infinite 4s linear;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;
    width: 20%;
  }
`;

export const ListWrap = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-gap: 50px 100px;
  grid-template-columns: auto auto auto auto;
  padding: 10px;
  background: radial-gradient(lightyellow, #282c34);
  align-items: center;
  justify-content: center;
  float: center;
`;

export const CardWrapper = styled.div`
  width: 100%;
  img {
    border: 15px solid black;
    margin: 30px;
    width: 200px;
    height: 300px;
  }
`;

// * {
//     padding: 0;
//     margin: 0;
//     box-sizing: border-box;
//   }

//   body {
//     height: 100vh;
//     display: flex;
//     background: #060AB2;
//   }

//   .memory-game {
//     width: 640px;
//     height: 640px;
//     margin: auto;
//     display: flex;
//     flex-wrap: wrap;
//   }

//   .memory-card {
//     width: calc(25% - 10px);
//     height: calc(33.333% - 10px);
//     margin: 5px;
//     position: relative;
//     transform: scale(1);
//     box-shadow: 1px 1px 1px rgba(0,0,0,.3);
//   }

//   .memory-card:active {
//     transform: scale(0.97);
//     transition: transform .2s;
//   }

//   .front-face,
//   .back-face {
//     width: 100%;
//     height: 100%;
//     padding: 20px;
//     position: absolute;
//     border-radius: 5px;
//     background: #1C7CCC;
//   }
