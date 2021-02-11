import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "20px 40px",
    overflowX: "hidden",
    overflowY: "auto",
    color: `${theme.palette.primary.contrastText}`,
  },
  gridItem: {
    maxWidth: "500px",
    margin: "0 30px",
  },
  list: {
    margin: "50px 0",

    "& h3": {
      color: `${theme.palette.secondary.main}`,
    },

    "& ul": {
      margin: "10px 0",
    },
  },
  main: {
    maxWidth: "500px",
    margin: "20px 0",
  },
  card: {
    display: "flex",
  },
  content: {
    flex: "1 0 auto",
    padding: "10px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  cover: {
    width: 90,
    padding: "3px",
    backgroundColor: "#fff",
  },
  "@media (max-width: 600px)": {
    cover: {
      width: 50,
    },
    text: {
      fontSize: "15px",
    },
    gridItem: {
      margin: 0,
    },
  },
}));
