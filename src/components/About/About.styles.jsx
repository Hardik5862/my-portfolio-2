import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "20px",
    overflowX: "hidden",
    overflowY: "auto",
    color: `${theme.palette.primary.contrastText}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    "& h1": {
      fontSize: "calc(1.3vw + 1.1rem)",
      color: `${theme.palette.secondary.main}`,
      marginBottom: "30px",
    },
  },
  main: {
    maxWidth: "700px",
    display: "flex",
    margin: "10px",
  },
  avatar: {
    width: "150px",
    height: "150px",
    marginRight: "40px",
  },
  textMain: {
    paddingTop: "10px",
    textAlign: "justify",
  },
  "@media (max-width: 600px)": {
    main: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      alignItems: "center",
    },
    avatar: {
      margin: "0",
    },
  },
}));
