import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

import { useStyles } from "./Contact.styles";

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Feel free to contact me</h1>
      <h4>You can also contact me via social media</h4>
      <form
        className={classes.form}
        autoComplete="off"
        name="contactForm1"
        method="post"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contactForm1" />
        <div>
          <TextField
            required
            name="name"
            className={classes.textfield}
            id="name"
            label="Name"
            variant="outlined"
            color="secondary"
          />
          <TextField
            required
            name="email"
            type="email"
            className={classes.textfield}
            id="email"
            label="Email"
            variant="outlined"
            color="secondary"
          />
          <TextField
            required
            name="message"
            className={classes.textfield}
            id="message"
            label="Your message"
            variant="outlined"
            multiline
            rows={5}
            color="secondary"
          />
          <div data-netlify-recaptcha="true"></div>
        </div>
        <div className={classes.submit}>
          <Button type="submit" variant="contained" color="secondary">
            <SendIcon style={{ marginRight: "5px" }} />
            SEND
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
