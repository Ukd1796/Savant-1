import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";

export default function FeatureAccordian() {
  return (
    <div style={{}}>
      <Accordion>
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
          <Typography>
            <label>
              Text input: <input name="myInput" />
             
            </label>
            
            <button type="submit" className="btn btn-success submitBtns ">Submit</button>
            <hr />
            <label>
        Pick a fruit:
        <select name="selectedFruit">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
      </label>
      <hr />
            <label>
              <textarea name="postContent" rows={4} cols={40} />
            </label>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
