import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./Projects.styles";

const ProjectCard = (project) => {
  const classes = useStyles();

  return (
    <Card className={classes.rootCard}>
      <CardMedia
        className={classes.media}
        image={project.mainImage.asset.url}
        title={project.mainImage.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {project.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {project.body[0].children[0].text}
        </Typography>
      </CardContent>
      <CardActions>
        {project.links &&
          project.links.map((data) => (
            <Button
              key={data._key}
              href={data.url}
              target="_blank"
              size="small"
              color="secondary"
            >
              {data.text}
            </Button>
          ))}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
