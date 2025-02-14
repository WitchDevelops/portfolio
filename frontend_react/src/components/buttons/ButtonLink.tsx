import React from "react";
import styled from "styled-components";

interface ButtonLinkProps {
  children: React.ReactNode;
  href?: string;
  download?: boolean;
  target?: string;
  rel?: string;
}

const StyledButtonLink = styled.a`
  padding: ${(props) => props.theme.padding.buttonPadding};
  border-radius: ${(props) => props.theme.border.buttonBorderRadius};
  border: none;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.white};
  outline: none;
  font-weight: ${(props) => props.theme.fontWeights.regular};
  cursor: pointer;
  transition: ${(props) => props.theme.transition.baseTransition};
  font-family: ${(props) => props.theme.fontFamilies.base};
  text-transform: uppercase;
  display: block;
  width: 100%;
  text-align: center;
  text-decoration: none;

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

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  href,
  download,
  target,
  rel,
}) => {
  return (
    <StyledButtonLink href={href} target={target} rel={rel} download={download}>
      {children}
    </StyledButtonLink>
  );
};
