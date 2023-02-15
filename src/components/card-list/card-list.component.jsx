// import { Component } from "react";
import "./card-list.styles.css";
import Card from "./card.component";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { name, id, email } = monster;
        return (
          <Card
            name={name}
            key={id}
            email={email}
            alt={`monster ${name}`}
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
          />
        );
      })}
    </div>
  );
};

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           const { name, id, email } = monster;
//           return (
//             <Card
//               name={name}
//               id={id}
//               email={email}
//               alt={`monster ${name}`}
//               src={`https://robohash.org/${id}?set=set2&size=180x180`}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
