import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar2.jpg";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  current:{
    color: "tan",
    bottom: "0",
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Santosh Kumar Behera" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Santosh Kumar Behera"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Data Scientist",
            "Python Developer",
            "Mobile App Developer",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
      <Typography className={classes.current} variant="h7">
        <br />
        <Typed
          strings={["Currently working at DIGIT General Insurance",]}
          typeSpeed={40} />
      
      </Typography>
    </Box>
  );
};

export default Header;
