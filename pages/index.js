import { Fragment } from "react";
import Head from "next/head";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

import ProjectList from "../components/ProjectList";
import classes from "../styles/home.module.css";

const Index = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Thiago Krempser</title>
        <meta name="description" content="Thiago Krempser" />
      </Head>

      <Container maxWidth="sm">
        <Typography
          variant="h2"
          component="h1"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Hello, World!
        </Typography>

        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          paragraph
          className={classes.presentation}
        >
          My name is <strong>Thiago Krempser</strong>. I&apos;m a Full Stack
          Developer from Brazil. Check out some of my personal projects below.
        </Typography>
      </Container>

      <p align="center" className={classes.icons}>
        <a
          href="https://github.com/tkrempser/"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/tkrempser/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a href="mailto:tkrempser@gmail.com" target="_blank" rel="noreferrer">
          <EmailIcon />
        </a>
      </p>

      <ProjectList />
    </Fragment>
  );
};

export default Index;
