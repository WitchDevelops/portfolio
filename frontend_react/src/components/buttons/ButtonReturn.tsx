import styled from "styled-components";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const StyledReturnButton = styled.div`
  cursor: pointer;
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.accent};
  transition: ${({ theme }) => theme.transition.baseTransition};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  outline: 1px solid ${({ theme }) => theme.colors.accent};

  &:hover {
    color: ${({ theme }) => theme.colors.gray};
    outline: 1px solid ${({ theme }) => theme.colors.gray};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

interface ReturnButtonProps {
  text: string;
}

export const ReturnButton: React.FC<ReturnButtonProps> = ({ text }) => {
  const navigate = useNavigate();

  return (
    <StyledReturnButton onClick={() => navigate(-1)}>
      <FaArrowAltCircleLeft />
      {text}
    </StyledReturnButton>
  );
};
