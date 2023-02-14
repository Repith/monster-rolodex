// import { Component } from "react";
import "./search-box.styles.css";

const SearchBox = (props) => {
  const { onSearchChange, placeholder, className } = props;

  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onSearchChange}
    />
  );
};

// class SearchBox extends Component {
//   render() {
//     const { onSearchChange, placeholder, className } = this.props;

//     return (
//       <input
//         className={`search-box ${className}`}
//         type="search"
//         placeholder={placeholder}
//         onChange={onSearchChange}
//       />
//     );
//   }
// }

export default SearchBox;
