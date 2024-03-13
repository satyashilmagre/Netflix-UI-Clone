import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Box, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '80%',
    backgroundColor: 'black',

  },
  head: {
    backgroundColor: "grey",
    fontSize: theme.typography.pxToRem(22),
    marginbottom:"10rem",
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    fontWeight: theme.typography.fontWeightRegular,
    Color: 'white',
    height: "3rem",
    marginbottom: "1rem",
  },
  title:{
    margintop:"2rem",
  }
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography className={classes.title} variant="h4">
        Frequently Asked Questions
        </Typography>
        <Accordion className={classes.head}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>What is NetFlix</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
              <br />
              You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
            </Typography>
          </AccordionDetails>
        </Accordion >
        <Accordion className={classes.head}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>How much does Netflix cost?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹649 to ₹149 a month. No extra costs, no contracts.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.head}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Where Can i Watch ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
              <br />
              You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>

    </div>
  );
}
