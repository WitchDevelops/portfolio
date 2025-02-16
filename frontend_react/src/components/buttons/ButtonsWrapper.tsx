import React from "react";
import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";

interface ButtonsWrapperProps {
  children: React.ReactNode;
}

const StyledButtonsWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 2rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: center;
    padding: 3rem 6rem;
    max-width: ${({ theme }) => theme.breakpoints.md};
    margin: auto;
  }
`;

export const ButtonsWrapper: React.FC<ButtonsWrapperProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <StyledButtonsWrapper {...theme.animations.fadeIn}>
      {children}
    </StyledButtonsWrapper>
  );
};
