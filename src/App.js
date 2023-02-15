import { useState, useEffect } from "react";

// import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import TitleBox from "./components/title-box/title-box.component.jsx";
//Functional Component
const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [title, setTitle] = useState("Monster Rolodex");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => setMonsters(users))
    );
  }, []);

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchField);
      })
    );
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLowerCase());
  };

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="App" key={monsters.id}>
      <h1 className="app-title">{title}</h1>
      <SearchBox
        onSearchChange={onSearchChange}
        placeholder={"Search monsters"}
        className={"monsters-search-box"}
      />
      <br />
      <TitleBox
        onTitleChange={onTitleChange}
        placeholder={"Change title"}
        className={"title-changer"}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

//Class component
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           }
//           // () => {
//           //   console.log(this.state);
//           // }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     this.setState(() => {
//       return { searchField: event.target.value.toLowerCase() };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox
//           onSearchChange={onSearchChange}
//           placeholder={"Search monsters"}
//           className={"monsters-search-box"}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
