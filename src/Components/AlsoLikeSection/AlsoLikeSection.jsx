import PropTypes from "prop-types";
import useFetchDataWithCache from "../../API/useFetchDataWithCache";
import { Content, StyledP, Column } from "../../style/CommonComponents";
import Item from "../Item";

function AlsoLikeSection({ itemId }) {
  const url = `https://asos10.p.rapidapi.com/api/v1/getYouMightAlsoLike?productId=${itemId}&currency=USD&country=US&store=US&language=en-US`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "938d9a2093msh6edd9ccf27904aep192706jsn0203b5a863a9",
      "x-rapidapi-host": "asos10.p.rapidapi.com",
    },
  };

  const { data, loading, error } = useFetchDataWithCache(url, options, 500); // 500ms debounce
  const items = data?.data || [];
  const maxItemsToShow = Math.floor(items.length / 5) * 5;

  if (loading) return <StyledP>Loading...</StyledP>;
  if (error) return <StyledP>Error: {error.message}</StyledP>;
  if (!items || items.length === 0) return;

  return (
    <Column $alignItems={"flex-start"}>
      <StyledP $textAlign={"left"} $fontSize={"18px"} $fontWeight={"bold"}>
        You may also like
      </StyledP>
      <Content
        $justifyContent="flex-start"
        $gap="12px"
        $wrap="wrap"
        $padding="50px 0px"
        $width="100%"
      >
        {items.slice(0, maxItemsToShow).map((item) => (
          <Item
            key={item.id}
            item={item}
            height={"auto"}
            width={"180px"}
            brand={true}
          />
        ))}
      </Content>
    </Column>
  );
}

AlsoLikeSection.propTypes = {
  itemId: PropTypes.number.isRequired,
};
export default AlsoLikeSection;
