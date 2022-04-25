import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import mwdiary from "../images/mwdiary.png";
import Grasshopper from "../images/grasshopper.png";
import agriculture from "../images/agriculture.jpg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "MW Diary - A simple secure Diary App",
    description: `MW Diary project is a basic cloud based diary app to store your notes. Technologies used to build this project are: Java, Firebase, XML, Android Studio.`,
    image: mwdiary,
    link2:"https://www.getjar.com/categories/productivity-apps/more/MW-Diary-986057",
    link1:"https://github.com/santoshdvc/MWDiary",
  },
  {
    name: "An Approach for VRP using Grasshopper Optimization ...",
    description: `This paper is focused on the study of the basic problem of the vehicle routing for reducing the cost factor and increasing efficiency of the solution.`,
    image: Grasshopper,
    link1:"https://www.scribd.com/document/500510571/An-Approach-for-Vehicle-Routing-Problem-using-Grasshopper-Optimization-Algorithm-and-Simulated-Annealing",
    link2:"",
  },
  {
    name: "A Machine Learning Approach for Translating ...",
    description: `This chapter in book focuses on how recurrent neural networks (RNN) can help the farmers to seek advice for their location on a given weather forecast.`,
    image: agriculture,
    link1:"https://www.taylorfrancis.com/chapters/edit/10.1201/9781003229018-15/machine-learning-approach-translating-weather-information-actionable-advisory-farmers-santosh-kumar-behera-darshan-vishwasrao-medhane",
    link2:"",
  },
  
];

const Portfolio = () => {
  const classes = useStyles();
  for(let i=0;i<projects.length;i++){
    if(projects[i].link2===""){
      projects[i].link2="";
    }
    else{projects[i].link2=<Button size="small" variant='contained' color='primary' href={projects[i].link2}>  Install </Button>; }
  }
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button variant="outlined" size="small" color="primary" href={project.link1}>
                  Source
                </Button>
                {project.link2}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
