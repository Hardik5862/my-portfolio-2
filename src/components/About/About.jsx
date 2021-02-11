import { useState, useEffect } from "react";

import Avatar from "@material-ui/core/Avatar";
import Loader from "../Loader/Loader";

import sanityClient from "../../client";

import { useStyles } from "./About.styles";

const About = () => {
  const classes = useStyles();
  const [author, setAuthor] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      title,
      bio,
      image{
        asset->{
          _id,
          url,
        },
        alt
      }
    }`
      )
      .then((data) => {
        console.log(data);
        setAuthor(data);
        setIsPending(false);
      })
      .catch(console.log);
  }, []);

  return !isPending ? (
    <div className={classes.root}>
      <div className={classes.header}>
        <h1>About me</h1>
      </div>
      <div className={classes.main}>
        <Avatar
          alt="Hardik Sachan"
          src={author[0].image.asset.url}
          className={classes.avatar}
        />
        <p className={classes.textMain}>
          {author[0].bio[0].children[0].text}
          <br />
          <br />
          {author[0].bio[1].children[0].text}
        </p>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default About;
