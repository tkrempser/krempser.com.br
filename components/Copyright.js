import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const Copyright = (props) => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href={props.siteUrl}>
        {props.siteTitle}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
