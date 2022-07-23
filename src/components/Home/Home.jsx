import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import GetAppIcon from "@material-ui/icons/GetApp";
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
      <div>
        <Button
          variant="contained"
          href={`${process.env.PUBLIC_URL}/resume/191230022_hardik_sachan.pdf`}
          className={classes.btn}
          download
        >
          <GetAppIcon style={{ marginRight: "5px" }} />
          Resume
        </Button>
        <Button
          variant="contained"
          color="secondary"
          href="https://github.com/Hardik5862"
          target="_blank"
          className={classes.btn}
        >
          <GitHubIcon style={{ marginRight: "5px" }} />
          Github
        </Button>
      </div>
    </div>
  );
};

export default Home;
