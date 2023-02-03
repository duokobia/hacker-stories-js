import * as React from 'react';
import {useState} from 'react';


//Extracting Search component
const Search = (props) => {

  // * 1 * //
  // Event handler(onSearch) passed as props to the Search component triggers 
  // update in the parent component(App.js) through a callback function.
  
  return (
    <div>
      <label htmlFor="search">Search: </label>
        {/* // * 1 * // */}
      <input id="search" type="text" onChange={props.onSearch} /> 
    </div>
  )
};

//Extracting List component
const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item = {item} />   
    ))}
  </ul>
);

//Extracting Item component
const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
);


const App = () => {
  
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Lordan walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const[searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };


  const searchedStories = stories.filter((story) => 
     story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return(
    <div style={{ textAlign: 'center' }}>
      <h1>My Hacker Stories </h1>
      <Search onSearch={handleSearch} />
      <hr />
      <List list = {searchedStories}/>
    </div>

  )
};
export default App;



