import { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

import { useStyles } from "./Contact.styles";

const Contact = () => {
  const classes = useStyles();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsProcessing(true);
  };

  return (
    <div className={classes.root}>
      <h1>Feel free to contact me</h1>
      <h4>You can also contact me via social media</h4>
      <form
        onSubmit={handleSubmit}
        className={classes.form}
        autoComplete="off"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
      >
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
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            disabled={isProcessing}
          >
            <SendIcon style={{ marginRight: "5px" }} />
            {isProcessing ? "PROCESSING..." : "SEND MESSAGE"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
