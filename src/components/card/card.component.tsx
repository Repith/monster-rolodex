// import { Component } from "react";

import "./card.styles.css";
import { Monster } from "../../App";

type CardProps = {
  monsters: Monster;
};

const Card = ({ monsters }: CardProps) => {
  const { name, id, email } = monsters;
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/>${id}?set=set2&size=180x180`}
        alt={`Monster ${name} of ${id}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

// class Card extends Component {
//   render() {
//     const { name, id, email, src, alt } = this.props;
//     return (
//       <div className="card-container" key={id}>
//         <img src={src} alt={alt} />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default Card;
