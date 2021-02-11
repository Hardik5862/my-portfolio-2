import { useState, useEffect } from "react";

import Loader from "../Loader/Loader";
import ProjectCard from "./ProjectCard";
import FilterIcon from "./FilterIcon";
import Grid from "@material-ui/core/Grid";

import sanityClient from "../../client";

import { useStyles } from "./Projects.styles";

const Projects = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("Top Projects");
  const [isPending, setIsPending] = useState(true);
  const [projects, setProjects] = useState([]);
  console.log(projects);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      body,
      tags,
      links,
      mainImage{
        asset->{
          _id,
          url,
        },
        alt
      }
    }`
      )
      .then((data) => {
        setProjects(data);
        setIsPending(false);
      })
      .catch(console.log);
  }, []);

  const handleTitle = (text) => {
    setTitle(text);
  };

  const filteredProjects = projects.filter((project) => {
    return project.tags.includes(title.toLocaleLowerCase());
  });

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h1>{title}</h1>
        <FilterIcon handleTitle={handleTitle} />
      </div>
      <Grid className={classes.grid} container justify="center" spacing={5}>
        {!isPending ? (
          filteredProjects.map((data, i) => (
            <Grid item key={i}>
              <ProjectCard {...data} />
            </Grid>
          ))
        ) : (
          <Loader />
        )}
      </Grid>
    </div>
  );
};

export default Projects;
