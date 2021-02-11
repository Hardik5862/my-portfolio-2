import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "20px",
    overflowX: "hidden",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    color: `${theme.palette.secondary.main}`,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px",
    width: "100%",
    marginBottom: "40px",
    "& h1": {
      fontSize: "calc(1.5vw + 1rem)",
    },
  },
  grid: {
    flexGrow: 1,
  },
  rootCard: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));
