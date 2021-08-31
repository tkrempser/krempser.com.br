import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Head from "next/head";

import "../styles/globals.css";
import classes from "../styles/app.module.css";
import Copyright from "../components/Copyright";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className={classes.root}>
      <CssBaseline />

      <Head>
        <title>Thiago Krempser</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Container maxWidth="md" component="main" className={classes.main}>
        <Component {...pageProps} />
      </Container>

      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Copyright
          siteTitle="Thiago Krempser"
          siteUrl="https://krempser.com.br"
        />
      </Container>
    </div>
  );
};

export default MyApp;
