import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import classes from "../styles/projectList.module.css";

const projects = [
  {
    id: "1",
    title: "React Meetups",
    description: "Project developed to study React concepts.",
    image: "https://krempser.com.br/img/react-meetups.jpg",
    codeUrl: "https://github.com/tkrempser/react-meetups/",
    livePreviewUrl: "https://tkrempser.github.io/react-meetups/",
  },
];

const ProjectList = (props) => (
  <Container className={classes.cardGrid} maxWidth="md">
    <Grid container spacing={4}>
      {projects.map((project) => (
        <Grid item key={project.id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={project.image}
              title={project.title}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {project.title}
              </Typography>
              <Typography>{project.description}</Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href={project.codeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Code
              </Button>
              <Button
                size="small"
                color="primary"
                href={project.livePreviewUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live Preview
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default ProjectList;