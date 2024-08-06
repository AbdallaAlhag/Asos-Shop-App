import { useState } from "react";
import PropTypes from "prop-types";
import { Input } from './SearchBarStyledComponents';


const SearchBar = ({ placeholder }) => {
//   const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");


  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };



  return (
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
      />
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
};

export default SearchBar;
