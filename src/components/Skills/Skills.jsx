import { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Certificates from "./Certificates";
import Loader from "../Loader/Loader";
import sanityClient from "../../client";

import { useStyles } from "./Skills.styles";

const Skills = () => {
  const classes = useStyles();
  const [infolist, setInfolist] = useState("Top Projects");
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "category"]{
      languages,
      webdevelopment,
      graphicdesign,
      certificates
    }`
      )
      .then((data) => {
        setInfolist(data);
        setIsPending(false);
      })
      .catch(console.log);
  }, []);

  return !isPending ? (
    <div className={classes.root}>
      <Grid container justify="center" spacing={4}>
        <Grid item className={classes.gridItem}>
          <h1>Skills</h1>
          <div className={classes.listGroup}>
            <div className={classes.list}>
              <h3>Languages</h3>
              <ul>
                {infolist[0].languages.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            <div className={classes.list}>
              <h3>Tools and Technologies for Web Development</h3>
              <ul>
                {infolist[0].webdevelopment.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            <div className={classes.list}>
              <h3>Tools and Technologies for Graphic Design</h3>
              <ul>
                {infolist[0].graphicdesign.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item className={classes.gridItem}>
          <h1>Certificates</h1>
          <Certificates certificates={infolist[0].certificates} />
        </Grid>
      </Grid>
    </div>
  ) : (
    <Loader />
  );
};

export default Skills;
