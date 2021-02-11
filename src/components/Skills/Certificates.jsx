import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../client";

import { useStyles } from "./Skills.styles";

const Certificates = ({ certificates }) => {
  const builder = imageUrlBuilder(sanityClient);
  const classes = useStyles();

  const urlFor = (data) => {
    return builder.image(data).url();
  };

  return (
    <>
      {certificates.map((certificate) => (
        <CardActionArea
          href={certificate.url}
          target="_blank"
          className={classes.main}
        >
          <Card className={classes.card}>
            <img
              className={classes.cover}
              src={urlFor(certificate.logo)}
              alt="course logo"
            />
            <div className={classes.details}>
              <div className={classes.content}>
                <span className={classes.text}>{certificate.coursetitle}</span>
              </div>
            </div>
          </Card>
        </CardActionArea>
      ))}
    </>
  );
};

export default Certificates;
