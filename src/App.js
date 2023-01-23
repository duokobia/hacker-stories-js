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

//Extracting Search component
const Search = () => (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
);

//Extracting List component
const List = () => (
    <ul>
    {list.map((item) => (
      // By assisgning a key attribute to each list item's element,
      // React can identify items if the list changes 
      // (i.e if there is a re-ordering). It is best practice to use
      // key as unique identifier rather than index of the array to
      // ensure that the key is a stable(consistent) identifier. 
      // Should the list change its order for example, React will not
      // be able to identify the items properly when the index of the 
      // array is used as key.
      <li key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        </li>
    ))}
  </ul>
);


const App = () => (
    <div style={{ textAlign: 'center' }}>
      <h1>My Hacker Stories </h1>
      <Search />
      <hr />
      <List />
    </div>
);
export default App;



