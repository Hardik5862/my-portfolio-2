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
    color: `${theme.palette.primary.contrastText}`,
    textAlign: "center",
    "& h1": {
      color: `${theme.palette.secondary.main}`,
      marginBottom: "10px",
    },
  },
  form: {
    maxWidth: "500px",
    padding: "20px 20px 20px 0",
    marginTop: "20px",
  },
  textfield: {
    width: "100%",
    margin: "10px",
  },
  submit: {
    margin: "10px",
  },
}));
