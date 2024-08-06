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
const SizingComponent = ({ productId, onSizeChange }) => {
  const url = productId
    ? `https://asos2.p.rapidapi.com/products/v4/detail?id=${productId}&lang=en-US&store=US&sizeSchema=US&currency=USD`
    : null;
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
  const handleSizeChange = (event) => {
    const selectedSize = sizes.find(
      (size) => size.id === parseInt(event.target.value, 10)
    );
    onSizeChange(selectedSize);
  };
  return (
    <StyledContainer>
      <TopDiv>
        <StyledLabel htmlFor="size-select">SIZE:</StyledLabel>
        <SizeGuideLink>Size Guide</SizeGuideLink>
      </TopDiv>
      <StyledSelect id="size-select" onChange={handleSizeChange}>
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
  onSizeChange: PropTypes.func.isRequired,
};

export default SizingComponent;
