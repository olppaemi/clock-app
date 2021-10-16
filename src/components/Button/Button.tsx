import { ButtonHTMLAttributes } from "react";
import ArrowUp from "icons/ArrowUp";
import * as S from "./styles";

const Button = ({ showDetails, ...props }: IButton) => {
  return (
    <S.Button $rotate={!showDetails} {...props}>
      {!showDetails ? "More" : "Less"}
      <ArrowUp />
    </S.Button>
  );
};

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  showDetails: boolean;
}

export default Button;
