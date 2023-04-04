// import { Component } from "react";
import "./search-box.styles.css";
import { ChangeEventHandler } from "react";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onSearchChange: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({
  onSearchChange,
  placeholder,
  className,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onSearchChange}
  />
);

export default SearchBox;

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
