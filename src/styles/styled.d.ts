import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    font: string;
    colors: {
      white: string;
      black: string;
      thunder: string;
    };
  }
}
