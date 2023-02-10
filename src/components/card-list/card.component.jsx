import { Component } from "react";

import "./card.styles.css";

class Card extends Component {
  render() {
    const { name, id, email, src, alt } = this.props;
    return (
      <div className="card-container" key={id}>
        <img src={src} alt={alt} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
