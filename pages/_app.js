import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import "../styles/globals.css";
import classes from "../styles/app.module.css";
import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className={classes.root}>
      <CssBaseline />

      <Container maxWidth="md" component="main" className={classes.main}>
        <Component {...pageProps} />
      </Container>

      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Footer siteTitle="Thiago Krempser" siteUrl="https://krempser.com.br" />
      </Container>
    </div>
  );
};

export default MyApp;
