import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Button from '@mui/material/Button';
import './FeatureAccordion.css';

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
          <Typography> 
            <textarea name="textarea" rows="5" cols="50" minlength="50" maxlength="70">
                  Enter your Text
                  </textarea>
                  <button type="submit" className="btn btn-success ">Submit</button>
                  <hr />
                  <textarea name="textarea" rows="5" cols="50" minlength="50" maxlength="70">
                  Summarized text
                  </textarea>
                  </Typography>
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
          <Typography> <Button sx={{backgroundColor:"#fff"}} classname="btnn-2" variant="contained"><a href="/annotate">Annotate</a></Button></Typography>
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
            Enter your URL: <input name="myInput" />
             
            </label>
            
            <button type="submit" className="btn btn-success submitBtns ">Submit</button>
            <hr />
            <label>
        Pick a Citation Format:
        <select name="selectedFruit">
          <option value="APA">APA</option>
          <option value="Harvard">Harvard</option>
          <option value="Chicago">Chicago</option>
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
