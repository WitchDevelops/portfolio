import React from "react";
import styled from "styled-components";
import { SocialLink } from "./socialLink";
import { SOCIAL_LINKS as socialLinks } from "../../data/socialLinks";

const StyledSocialMediaOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  position: fixed;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    display: none;
  }
`;

export const SocialMediaOverlay = () => {
  return (
    <StyledSocialMediaOverlay>
      {socialLinks.map((item, index) => (
        <SocialLink key={index} {...item} />
      ))}
    </StyledSocialMediaOverlay>
  );
};
