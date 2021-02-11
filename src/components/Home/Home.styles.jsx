import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  bg: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(1vw + 0.7rem)",
  },
  header: {
    margin: "0 10px 50px 20px",
    color: `${theme.palette.primary.contrastText}`,
  },
  name: {
    color: `${theme.palette.secondary.main}`,
  },
}));
