import { useEffect, useState } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Head from "next/head";

import classes from "./Layout.module.css";
import Footer from "./Footer";

function Layout(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div
      className={classes.root}
      style={{ display: isLoading ? "none" : "flex" }}
    >
      <CssBaseline />

      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Thiago Krempser</title>
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>

      <Container maxWidth="md" component="main" className={classes.main}>
        {props.children}
      </Container>

      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Footer siteTitle="Thiago Krempser" siteUrl="https://krempser.com.br" />
      </Container>
    </div>
  );
}

export default Layout;
