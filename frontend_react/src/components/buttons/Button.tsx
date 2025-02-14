import React from "react";
import styled from "styled-components";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const StyledButton = styled.button`
  padding: ${(props) => props.theme.padding.buttonPadding};
  border-radius: ${(props) => props.theme.border.buttonBorderRadius};
  border: none;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.white};
  outline: none;
  margin: 2rem 0 0 0;
  font-weight: ${(props) => props.theme.fontWeights.regular};
  cursor: pointer;
  transition: ${(props) => props.theme.transition.baseTransition};
  font-family: ${(props) => props.theme.fontFamilies.base};
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryLight};
    color: ${(props) => props.theme.colors.accent};
    outline: 1px solid ${(props) => props.theme.colors.accent};
    font-weight: ${(props) => props.theme.fontWeights.regularThicker};
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.accent};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  disabled = false,
  children,
  className = "",
  onClick,
}) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
