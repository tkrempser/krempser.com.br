import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const Footer = (props) => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"MIT © "}
      <Link color="inherit" href={props.siteUrl}>
        {props.siteTitle}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Footer;
