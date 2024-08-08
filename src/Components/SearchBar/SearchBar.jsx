import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  Input,
  SuggestionList,
  SuggestionItem,
  TempDiv,
} from "./SearchBarStyledComponents";
// import { StyledP } from "../../style/CommonComponents";
import useFetchDataWithCache from "../../API/useFetchDataWithCache";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ placeholder }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [fetchSuggestions, setFetchSuggestions] = useState(false);
  const [fetchSearchResults, setFetchSearchResults] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const navigate = useNavigate();
  const wrapperRef = useRef(null); // Ref to the entire component

  const autoSuggestUrl = `https://asos10.p.rapidapi.com/api/v1/autoSuggestion?query=${searchTerm}&currency=USD&country=US&store=US&languageShort=en&sizeSchema=US`;
  const searchUrl = `https://asos10.p.rapidapi.com/api/v1/getProductListBySearchTerm?searchTerm=${searchTerm}&currency=USD&country=US&store=US&languageShort=en&sizeSchema=US&limit=50&offset=0&sort=recommended`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "938d9a2093msh6edd9ccf27904aep192706jsn0203b5a863a9",
      "x-rapidapi-host": "asos10.p.rapidapi.com",
    },
  };

  // Fetch auto-suggestions
  const {
    data: autoSuggestData,
    loading: autoSuggestLoading,
    error: autoSuggestError,
  } = useFetchDataWithCache(
    fetchSuggestions ? autoSuggestUrl : null,
    options,
    500
  );

  // Fetch search results
  const {
    data: searchData,
    loading: searchLoading,
    error: searchError,
  } = useFetchDataWithCache(
    fetchSearchResults ? searchUrl : null,
    options,
    500
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm.trim()) {
        setFetchSuggestions(true); // Trigger suggestion fetch
      }
    }, 500); // 1 second delay

    return () => {
      clearTimeout(handler);
      setFetchSuggestions(false); // Cancel fetch if user is still typing
    };
  }, [searchTerm]);

  useEffect(() => {
    if (
      fetchSuggestions &&
      !autoSuggestLoading &&
      !autoSuggestError &&
      autoSuggestData
    ) {
      const autoSuggestions = autoSuggestData?.data?.[0]?.suggestions || [];
      setSuggestions(autoSuggestions);
      setFetchSuggestions(false); // Reset the fetch flag after suggestions are fetched
    }
  }, [fetchSuggestions, autoSuggestLoading, autoSuggestError, autoSuggestData]);

  useEffect(() => {
    if (fetchSearchResults && !searchLoading && !searchError && searchData) {
      const items = searchData?.data?.products || [];
      navigate(`/Shop/search-all-${searchTerm}`, { state: { data: items } });
      setFetchSearchResults(false); // Reset the fetch flag after search results are fetched
      setSearchTerm(""); // Optionally clear search term after navigation
    }
  }, [
    fetchSearchResults,
    searchLoading,
    searchError,
    searchData,
    searchTerm,
    navigate,
  ]);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setSuggestions([]); // Hide suggestions
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (suggestions.length && activeSuggestion >= 0) {
        setSearchTerm(suggestions[activeSuggestion].searchTerm);
        setFetchSuggestions(false);
        setSuggestions([]);
      }
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveSuggestion((prev) =>
        prev > 0 ? prev - 1 : suggestions.length - 1
      );
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveSuggestion((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setFetchSuggestions(true);
    setActiveSuggestion(0);
  };

  return (
    <TempDiv ref={wrapperRef}>
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {suggestions.length > 0 && (
        <SuggestionList>
          {suggestions.map((suggestion, index) => (
            <SuggestionItem
              key={index}
              role="option"
              tabIndex={-1}
              style={{
                backgroundColor:
                  index === activeSuggestion ? "#f0f0f0" : "white",
              }}
              onClick={() => {
                setSearchTerm(suggestion.searchTerm);
                setFetchSuggestions(false);
                setSuggestions([]);
              }}
            >
              {suggestion.searchTerm} ({suggestion.numberOfResults})
            </SuggestionItem>
          ))}
        </SuggestionList>
      )}
    </TempDiv>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
};

export default SearchBar;
