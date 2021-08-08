import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SocialIcons from "./SocialIcons";

import { useStyles } from "./Navigation.styles";

export default function Appbar({ handleOpen }) {
  const classes = useStyles();
  const location = useLocation();
  const [title, setTitle] = useState("Home");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setTitle("Home");
        break;
      case "/projects":
        setTitle("Projects");
        break;
      case "/about":
        setTitle("About");
        break;
      case "/skills":
        setTitle("Skills");
        break;
      case "/contact":
        setTitle("Contact");
        break;
      default:
        setTitle("Error");
        break;
    }
  }, [location]);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <SocialIcons />
        </Toolbar>
      </AppBar>
    </div>
  );
}
