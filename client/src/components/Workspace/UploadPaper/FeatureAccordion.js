import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";

export default function FeatureAccordian() {
  return (
    <div style={{}}>
      <Accordion style={{ width: 490 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography
            style={{
              fontWeight: 10,
            }}
          >
            Generate Summary
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Greetings of the day :)</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ width: 490 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography
            style={{
              fontWeight: 10,
            }}
          >
            Annotate Paper
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Greetings of the day :)</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ width: 490 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography
            style={{
              fontWeight: 10,
            }}
          >
            Generate Citation
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Greetings of the day :)</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
