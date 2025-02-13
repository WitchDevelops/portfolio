import React from "react";
import styled from "styled-components";

interface HeadingProps {
  text: string;
  highlight: string;
}

const StyledHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.headingBase};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  text-transform: capitalize;
  
  span {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (min-width: 2000px) {
    font-size: ${({ theme }) => theme.fontSizes.headingDesktop};
  }

  @media (max-width: 450px) {
    font-size: ${({ theme }) => theme.fontSizes.headingMobile};
  }
`;

export const Heading: React.FC<HeadingProps> = ({ text, highlight }) => {
  return (
    <StyledHeading>
      {text} <span>{highlight}</span>
    </StyledHeading>
  );
};
