// import { Component } from "react";
import "./title-box.styles.css";
import { ChangeEventHandler } from "react";

type TitleProps = {
  className: string;
  placeholder?: string;
  onTitleChange: ChangeEventHandler<HTMLInputElement>;
};

const TitleBox = ({ className, placeholder, onTitleChange }: TitleProps) => {
  return (
    <input
      className={`title-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onTitleChange}
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
