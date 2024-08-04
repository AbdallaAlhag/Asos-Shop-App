import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import useFetchDataWithCache from "../../../API/useFetchDataWithCache";
import DOMPurify from "dompurify";
import { StyledP } from "../../../style/CommonComponents";

const AccordionComponent = ({ productId }) => {
  // gotta fetch the item detail info
  const url = `https://asos2.p.rapidapi.com/products/v4/detail?id=${productId}&lang=en-US&store=US&sizeSchema=US&currency=USD`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "938d9a2093msh6edd9ccf27904aep192706jsn0203b5a863a9",
      "x-rapidapi-host": "asos2.p.rapidapi.com",
    },
  };
  const { data, loading, error } = useFetchDataWithCache(url, options, 500); // 500ms debounce
  // console.log(data);
  const items = data || [];
  // console.log(items);
  if (loading) return <StyledP>Loading...</StyledP>;
  if (error) return <StyledP>Error: {error.message}</StyledP>;
  if (!items || items.length === 0) return <StyledP>No data available</StyledP>;

  const sanitizedDescription = DOMPurify.sanitize(items.description);
  const sanitizedSizeAndFit = items.info.sizeAndFit
    ? DOMPurify.sanitize(items.info.sizeAndFit)
    : "";
  const sanitizedAboutMe = items.info.aboutMe
    ? DOMPurify.sanitize(items.info.aboutMe)
    : "";
  const sanitizedCareInfo = items.info.careInfo
    ? DOMPurify.sanitize(items.info.careInfo)
    : "";
  const sanitizedItemDescription = items.brand.description
    ? DOMPurify.sanitize(items.brand.description)
    : "";

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
          <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
          <Typography>Product Code: {items.productCode}</Typography>
        </AccordionDetails>
      </Accordion>

      {items.brand.description && (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Brand</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {
              <div
                dangerouslySetInnerHTML={{ __html: sanitizedItemDescription }}
              />
            }
          </AccordionDetails>
        </Accordion>
      )}

      {items.info.sizeAndFit && (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Size & Fit</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div dangerouslySetInnerHTML={{ __html: sanitizedSizeAndFit }} />
          </AccordionDetails>
        </Accordion>
      )}

      {items.info.aboutMe && (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>About Me</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {<div dangerouslySetInnerHTML={{ __html: sanitizedAboutMe }} />}
          </AccordionDetails>
        </Accordion>
      )}

      {items.info.careInfo && (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Look After Me</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {<div dangerouslySetInnerHTML={{ __html: sanitizedCareInfo }} />}
          </AccordionDetails>
        </Accordion>
      )}
    </div>
  );
};

AccordionComponent.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default AccordionComponent;
