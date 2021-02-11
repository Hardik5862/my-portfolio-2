import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: `${theme.palette.primary.contrastText}`,
    fontSize: "1.5rem",
  },
  main: {
    color: `${theme.palette.secondary.main}`,
  },
}));

const Error404 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.main}>Error 404</h1>
      <h2>Page not found</h2>
    </div>
  );
};

export default Error404;
