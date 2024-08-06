import { Column, StyledP, Content } from "../../style/CommonComponents";
import PropTypes from "prop-types";
import useFetchDataWithCache from "../../API/useFetchDataWithCache";
import AlsoBoughtCarousel from "./AlsoBoughtCarousel";

// eslint-disable-next-line react/prop-types
const AlsoBoughtSection = ({ itemId }) => {
  const url = `https://asos10.p.rapidapi.com/api/v1/getPeopleAlsoBought?productId=${itemId}&currency=USD&country=US&store=US&language=en-US`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "938d9a2093msh6edd9ccf27904aep192706jsn0203b5a863a9",
      "x-rapidapi-host": "asos10.p.rapidapi.com",
    },
  };

  const { data, loading, error } = useFetchDataWithCache(url, options, 500); // 500ms debounce
  const items = data?.data || [];
  //   const maxItemsToShow = Math.floor(items.length / 5) * 5;

  if (loading) return <StyledP>Loading...</StyledP>;
  if (error) return <StyledP>Error: {error.message}</StyledP>;
  if (!items || items.length === 0) return <StyledP>No data available</StyledP>;
  return (
    <Column $alignItems={"flex-start"} $width={"100%"}>
      <StyledP $textAlign={"left"} $fontSize={"18px"} $fontWeight={"bold"}>
        People also bought
      </StyledP>
      <Content
        $justifyContent="center"
        $gap="12px"
        $wrap="wrap"
        $padding="50px 0px"
        $width="100%"
      >
        <AlsoBoughtCarousel data={items}></AlsoBoughtCarousel>
      </Content>
    </Column>
  );
};

AlsoBoughtCarousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  itemId: PropTypes.number,
};
export default AlsoBoughtSection;
