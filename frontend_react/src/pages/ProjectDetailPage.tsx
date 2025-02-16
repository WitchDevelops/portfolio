import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { client, urlFor } from "@/client";
import { Heading } from "@components/typography/Heading";

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
    <section className="app__work-detail">
      <Heading text={work.title} />
      <img src={urlFor(work.imgUrl).url()} alt={work.name} />
      <p className="p-text">{work.description}</p>
      <a href={work.projectLink} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
      <a href={work.codeLink} target="_blank" rel="noopener noreferrer">
        View Code
      </a>
    </section>
  );
};
