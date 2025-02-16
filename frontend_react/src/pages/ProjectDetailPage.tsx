import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { client, urlFor } from "@/client";
import { Heading } from "@components/typography/Heading";
import { ButtonsWrapper } from "@components/buttons/ButtonsWrapper";
import { ButtonLink } from "@components/buttons/ButtonLink";
import styled from "styled-components";
import { theme } from "@/theme";

const StyledParallaxHeroImage = styled.div`
  min-height: 200px;
  width: 100%;
  background-attachment: fixed;
  background-position: top left;
  background-size: contain;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 100px black;
  transition: ${theme.transition.baseTransition};
  &:hover {
    box-shadow: none;
  }
  @media (min-width: ${theme.breakpoints.md}) {
    min-height: 300px;
    background-size: cover;
    background-position: center;
  }
`;

export const ProjectDetailPage = () => {
  const { name } = useParams(); // Get the project name from the URL
  const location = useLocation();
  const navigate = useNavigate();

  const [work, setWork] = useState(location.state?.work || null);
  const [loading, setLoading] = useState(!work);

  useEffect(() => {
    if (!work && name) {
      console.log(`Fetching project from Sanity for: ${name}`);

      const query = `*[_type == "works" && lower(title) == "${name.toLowerCase()}"][0]`;

      setLoading(true);

      client
        .fetch(query)
        .then((data) => {
          console.log("Sanity Response:", data);

          if (data) {
            setWork(data);
          } else {
            //TODO: add an error component and display it on the screen before redirecting
            console.error("Project not found, waiting before redirecting...");
            setTimeout(() => navigate("/"), 2000); // Give time to debug before redirecting
          }

          setLoading(false);
        })
        .catch((error) => {
          console.error("Sanity Fetch Error:", error);
          setTimeout(() => navigate("/"), 2000);
        });
    }
  }, [navigate, work]);

  if (loading) {
    // TODO add a full screen loader or skeletons
    return <h2>Loading...</h2>;
  }

  if (!work) {
    return null; // If no work is found, it will redirect to home
  }

  return (
    <section className="app__wrapper app__flex" style={{ gap: "2rem" }}>
      <Heading text={work.title} />

      <StyledParallaxHeroImage
        style={{ backgroundImage: `url(${urlFor(work.imgUrl).url()})` }}
      />

      <p className="p-text">{work.description}</p>
      <ButtonsWrapper>
        <ButtonLink href={work.projectLink}>View Project</ButtonLink>
        <ButtonLink href={work.codeLink}>View Code</ButtonLink>
      </ButtonsWrapper>
    </section>
  );
};
