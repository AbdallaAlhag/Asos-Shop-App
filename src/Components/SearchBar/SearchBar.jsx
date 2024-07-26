import { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ placeholder }) => {
//   const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm] = useState("");


//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredData = data.filter((item) =>
//     item.toLowerCase().includes(searchTerm.toLowerCase())
//   );

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        // onChange={handleChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SearchBar;
