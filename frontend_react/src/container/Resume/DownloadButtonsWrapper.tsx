import React from "react";
import { ButtonLink } from "../../components/buttons/ButtonLink";
import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";

interface DownloadButtonsWrapperProps {
  fileSrc: string;
}

const StyledWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 3rem 6rem;
  }
`;

const StyledButtonsWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: center;
    max-width: ${({ theme }) => theme.breakpoints.md};
  }
`;

export const DownloadButtonsWrapper: React.FC<DownloadButtonsWrapperProps> = ({
  fileSrc,
}) => {
  const theme = useTheme();

  return (
    <StyledWrapper {...theme.animations.fadeIn}>
      <StyledButtonsWrapper {...theme.animations.fadeIn}>
        <ButtonLink href={fileSrc} target="_blank" rel="noreferrer">
          Open my CV in new tab
        </ButtonLink>
        <ButtonLink href={fileSrc} download>
          Download my CV
        </ButtonLink>
      </StyledButtonsWrapper>
    </StyledWrapper>
  );
};
