import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');


html {
 min-height:100%;
 position:relative;
}

body {
  background: #000;
  color:#dd11ea;
  height:100%;
  
}

body, input, button{
  font:14px 'Roboto', sans-serif;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

input {
  margin:0;
  padding:0;
  outline:none;
}

*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:border-box;
}
`;

export default GlobalStyle;
