import { ButtonsWrapper } from "@components/buttons/ButtonsWrapper";
import { ButtonLink } from "@components/buttons/ButtonLink";

interface DownloadCVButtonsProps {
  fileSrc: string;
}
export const DownloadCVButtons: React.FC<DownloadCVButtonsProps> = ({
  fileSrc,
}) => {
  return (
    <ButtonsWrapper>
      <ButtonLink href={fileSrc} target="_blank" rel="noreferrer">
        Open my CV in new tab
      </ButtonLink>
      <ButtonLink href={fileSrc} download>
        Download my CV
      </ButtonLink>
    </ButtonsWrapper>
  );
};
