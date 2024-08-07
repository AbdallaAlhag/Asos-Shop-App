import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Input } from "./SearchBarStyledComponents";
// import { StyledP } from "../../style/CommonComponents";
import useFetchDataWithCache from "../../API/useFetchDataWithCache";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ placeholder }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [fetchData, setFetchData] = useState(false);
  const navigate = useNavigate();

  // Use the hook correctly
  const url = `https://asos10.p.rapidapi.com/api/v1/getProductListBySearchTerm?searchTerm=${searchTerm}&currency=USD&country=US&store=US&languageShort=en&sizeSchema=US&limit=50&offset=0&sort=recommended`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "938d9a2093msh6edd9ccf27904aep192706jsn0203b5a863a9",
      "x-rapidapi-host": "asos10.p.rapidapi.com",
    },
  };
  const { data, loading, error } = useFetchDataWithCache(
    fetchData ? url : null,
    options,
    500
  ); // Pass null to avoid fetching unless needed

  useEffect(() => {
    if (fetchData && !loading && !error && data) {
      const items = data?.data?.products || [];
      navigate(`/Shop/search-all-${searchTerm}`, { state: { data: items } });
      setFetchData(false);
      setSearchTerm(""); // Optionally clear search term after navigation
    }
  }, [fetchData, loading, error, data, searchTerm, navigate]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && searchTerm.trim()) {
      event.preventDefault();
      setFetchData(true); // Trigger data fetch
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={searchTerm}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
};

export default SearchBar;
