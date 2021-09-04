import { useEffect, useState } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Head from "next/head";

import classes from "./Layout.module.css";
import Copyright from "./Copyright";

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
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Thiago Krempser</title>
      </Head>

      <Container maxWidth="md" component="main" className={classes.main}>
        {props.children}
      </Container>

      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Copyright
          siteTitle="Thiago Krempser"
          siteUrl="https://krempser.com.br"
        />
      </Container>
    </div>
  );
}

export default Layout;
