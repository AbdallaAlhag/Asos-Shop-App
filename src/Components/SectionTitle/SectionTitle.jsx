import { TitleContainer } from "./SectionTitleStyled"
import PropTypes from "prop-types";

function SectionTitle({ Title, justifyContent }) {
  return (
    <TitleContainer $justifyContent={justifyContent}>{Title}</TitleContainer>
  )
}

SectionTitle.propTypes = {
    Title: PropTypes.string.isRequired,
    justifyContent: PropTypes.string.isRequired,
  };
  
export default SectionTitle