import { Fragment } from "react";

import Typography from "@material-ui/core/Typography";

import Emoji from "../components/Emoji";

const Home = () => {
  return (
    <Fragment>
      <Typography variant="h2" component="h1" gutterBottom>
        Hello! <Emoji symbol="👋" label="waving-hand" />
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        My name is Thiago Krempser. I am a Full Stack Developer from Brazil.
      </Typography>
    </Fragment>
  );
};

export default Home;
