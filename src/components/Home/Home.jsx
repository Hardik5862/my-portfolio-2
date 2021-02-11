import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import ScrambledText from "./ScrambledText";

import { useStyles } from "./Home.styles";

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.bg}>
      <div className={classes.header}>
        <h1>
          Hi, I'm <span className={classes.name}>Hardik Sachan</span>.
        </h1>
        <h3>
          I'm a <ScrambledText />.
        </h3>
      </div>
      <Button
        variant="contained"
        color="secondary"
        href="https://github.com/Hardik5862"
        target="_blank"
      >
        <GitHubIcon style={{ marginRight: "10px" }} />
        Github
      </Button>
    </div>
  );
};

export default Home;
