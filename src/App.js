import * as React from 'react';

// const title = "React";
// const welcome = {
//   greeting: "Hey",
//    title: "React",
// };

// function getTitle(title) {
//   return title;
// };

const list = [
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


//Search Component
const Search = () => {
  return(
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
  </div>  
)}

//list item
//Here we are extracting the render list which was previous in the App 
//component and we are deffining it in a separate component or function
//same thing is being done for the Search components

const ListItem = ({item}) => {
  return(
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
)}


//List Component
const List = () => {
  return(
  <ul>
    {/* 
      1.Swapped out the normal function for an arrow functio as a callback for the map function 
      2.Map loops through our array of items and through the callback we are able to access each item in the array
      3.We Render each item by passing it to the "ListItem" component as an "item" prop as shown in list 65 below
    */}
    { list.map( item => <ListItem key={item.objectID} item={item}/> ) }
  </ul>
)}


function App() {
  return (
  <div style={{ textAlign: 'center' }}>
    <h1>My Hacker Stories </h1>
    <Search />
    <hr />
    <List />
  </div>
  );
}

export default App;
