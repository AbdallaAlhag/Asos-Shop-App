// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import useFetchDataWithCache from "../../../API/useFetchDataWithCache";
// import PropTypes from "prop-types";
// import styled from "styled-components";

// const StyledDropdownButton = styled(DropdownButton)`
//   background-color: #007bff;
//   color: white;
//   border-radius: 5px;
//   padding: 10px;
//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const StyledDropdownItem = styled(Dropdown.Item)`
//   color: #007bff;
//   font-weight: bold;
//   &:hover {
//     color: white;
//     background-color: #007bff;
//   }
// `;
// const SizingComponent = ({ productId }) => {
//   // Define the API URL and options
//   const url = `https://asos2.p.rapidapi.com/products/v4/detail?id=${productId}&lang=en-US&store=US&sizeSchema=US&currency=USD`;
//   const options = {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "938d9a2093msh6edd9ccf27904aep192706jsn0203b5a863a9",
//       "x-rapidapi-host": "asos2.p.rapidapi.com",
//     },
//   };

//   // Fetch data using the custom hook
//   const { data, loading, error } = useFetchDataWithCache(url, options, 500);

//   // Handle loading, error, and empty data states
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;
//   if (!data || !data.variants || data.variants.length === 0)
//     return <p>No sizes available</p>;

//   // Extract sizes from the data
//   const sizes = data.variants;

//   return (
//     <StyledDropdownButton id="dropdown-basic-button" title="Select Size">
//       {sizes.map(
//         (size) =>
//           size.isAvailable && (
//             <StyledDropdownItem key={size.id} href="#">
//               {size.displaySizeText}
//             </StyledDropdownItem>
//           )
//       )}
//     </StyledDropdownButton>
//   );
// };

// SizingComponent.propTypes = {
//   productId: PropTypes.number.isRequired,
// };

// export default SizingComponent;

import useFetchDataWithCache from "../../../API/useFetchDataWithCache";
import PropTypes from "prop-types";
import styled from "styled-components";
import { StyledP } from "../../../style/CommonComponents";

const StyledContainer = styled.div`
  margin: 10px 0;
  width: 100%;
`;

const StyledLabel = styled.label`
  color: black;
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 12px;
`;

const StyledSelect = styled.select`
  display: block;
  width: 100%;
  padding: 8px 12px;
  font-size: 16px;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  appearance: none;
  margin-top: 4px;
  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const StyledOption = styled.option`
  font-size: 16px;
  padding: 8px 12px;
`;

const SizeGuideLink = styled.a`
  display: block;
  margin-bottom: 8px;
  font-size: 12px;
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const TopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SizingComponent = ({ productId }) => {
  const url = `https://asos2.p.rapidapi.com/products/v4/detail?id=${productId}&lang=en-US&store=US&sizeSchema=US&currency=USD`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "938d9a2093msh6edd9ccf27904aep192706jsn0203b5a863a9",
      "x-rapidapi-host": "asos2.p.rapidapi.com",
    },
  };
  const { data, loading, error } = useFetchDataWithCache(url, options, 500);

  if (loading) return <StyledP>Loading...</StyledP>;
  if (error) return <StyledP>Error: {error.message}</StyledP>;
  if (!data || !data.variants || data.variants.length === 0)
    return <StyledP>No sizes available</StyledP>;

  const sizes = data.variants;

  return (
    <StyledContainer>
      <TopDiv>
        <StyledLabel htmlFor="size-select">SIZE:</StyledLabel>
        <SizeGuideLink>Size Guide</SizeGuideLink>
      </TopDiv>
      <StyledSelect id="size-select">
        <StyledOption>Please select</StyledOption>
        {sizes.map((size) => (
          <StyledOption
            key={size.id}
            value={size.id}
            disabled={!size.isAvailable}
          >
            {size.displaySizeText}
          </StyledOption>
        ))}
      </StyledSelect>
    </StyledContainer>
  );
};

SizingComponent.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default SizingComponent;
