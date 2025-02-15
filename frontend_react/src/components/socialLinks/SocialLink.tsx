import React from "react";
import styled from "styled-components";
import { SocialLinkType } from "../../data/socialLinks";

const StyledSocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0.25rem 0;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: ${({ theme }) => theme.transition.baseTransition};

  svg {
    width: 15px;
    height: 15px;
    color: ${({ theme }) => theme.colors.gray};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};

    svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    width: 70px;
    height: 70px;

    margin: 0.5rem 0;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const SocialLink: React.FC<SocialLinkType> = ({
  name,
  link,
  icon: Icon,
}) => {
  return (
    <StyledSocialLink href={link} target="_blank" rel="noreferrer" title={name}>
      <Icon />
    </StyledSocialLink>
  );
};
