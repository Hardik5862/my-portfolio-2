import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const SocialIcons = () => {
  return (
    <>
      <IconButton
        href="https://www.linkedin.com/in/hardik-sachan-b0ab7b1a2"
        target="_blank"
        aria-label="LinkedIn account"
        aria-controls="menu-appbar"
        color="inherit"
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        href="https://www.facebook.com/hardik.sachan.583/"
        target="_blank"
        aria-label="facebook account"
        aria-controls="menu-appbar"
        color="inherit"
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        href="https://www.instagram.com/hardik0casr/"
        target="_blank"
        aria-label="Instagram account"
        aria-controls="menu-appbar"
        color="inherit"
      >
        <InstagramIcon />
      </IconButton>
    </>
  );
};

export default SocialIcons;
