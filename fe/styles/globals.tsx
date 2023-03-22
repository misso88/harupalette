import { Global, css } from '@emotion/react';

const style = () => css`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  button {
    all: unset;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
