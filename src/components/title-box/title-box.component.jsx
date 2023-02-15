// import { Component } from "react";
import "./title-box.styles.css";

const TitleBox = (props) => {
  const { onTitleChange, placeholder, className, id } = props;

  return (
    <input
      className={`title-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onTitleChange}
      key={id}
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

export default TitleBox;
