import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

import Appbar from "./Appbar";
import { useStyles } from "./Navigation.styles";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import WebIcon from "@material-ui/icons/Web";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import RateReviewIcon from "@material-ui/icons/RateReview";
import ContactMailIcon from "@material-ui/icons/ContactMail";

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Fragment>
      <Appbar handleOpen={handleOpen} />
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        classes={{ paper: classes.paper }}
      >
        <div
          className={classes.list}
          role="presentation"
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(true)}
        >
          <List>
            <ListItem button onClick={() => history.push("/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => history.push("/projects")}>
              <ListItemIcon>
                <WebIcon />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItem>
            <ListItem button onClick={() => history.push("/about")}>
              <ListItemIcon>
                <PermIdentityIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button onClick={() => history.push("/skills")}>
              <ListItemIcon>
                <RateReviewIcon />
              </ListItemIcon>
              <ListItemText primary="Skills" />
            </ListItem>
            <ListItem button onClick={() => history.push("/contact")}>
              <ListItemIcon>
                <ContactMailIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </Fragment>
  );
}
