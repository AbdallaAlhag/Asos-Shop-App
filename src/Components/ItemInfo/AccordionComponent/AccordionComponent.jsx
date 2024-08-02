import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from "prop-types";

const AccordionComponent = ({productId}) => {
  console.log(productId)
  // gotta fetch the item detail info
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Product Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>Shoes by Glamorous</strong>
            <ul>
              <li>Give your feet some airtime</li>
              <li>Adjustable straps</li>
              <li>Pin-buckle fastening</li>
              <li>Open toe</li>
              <li>Branded footbed</li>
              <li>Flat sole</li>
            </ul>
            Product Code: 133680978
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* Add brand details here */}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Look After Me</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* Add brand details here */}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>About Me</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* Add brand details here */}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

AccordionComponent.propTypes = {
  productId: PropTypes.array.isRequired,
};

export default AccordionComponent;
