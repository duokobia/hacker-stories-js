import * as React from 'react';

// const title = "React";
// const welcome = {
//   greeting: "Hey",
//    title: "React",
// };

// function getTitle(title) {
//   return title;
// };


//Extracting Search component
const Search = () => {
  
  const handleChange = (event) => {
    console.log(event.target.value)
    
    // Always pass functions to these handlers, not the return value of the function
    // except the return value is a function. This is a well known source for bugs in React.
  };
  
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>

)
};

// //Extracting List component
// const List = (props) => (
//   <ul>
//     {props.list.map((item) => (
//       // Here is the part that had always confused me. It is exactly the same thing done in
//       // (App.js, List.js and stories array.) The only difference is that the "Item" variable
//       // is a function (Not an array as in the case of the variable "stories") isn't sitting 
//       // inside and also at the top of the List function in this case.
//       <Item key={item.objectID} item = {item} />
//     ))}
//   </ul>
// );

// const Item = (props) => (
//   <li>
//     <span>
//       <a href={props.item.url}>{props.item.title}</a>
//     </span>
//     <span>{props.item.author}</span>
//     <span>{props.item.num_comments}</span>
//     <span>{props.item.points}</span>
//   </li>
// );

//Extracting List component
const List = (props) => {

  const Item = (list) => (
    <li>
      <span>
        <a href={list.url}>{list.title}</a>
      </span>
      <span>{props.list.author}</span>
      <span>{props.list.num_comments}</span>
      <span>{props.list.points}</span>
    </li>
  );

  return(

    <ul>
      {props.list.map(item => 
        // Here is the part that had always confused me. It is exactly the same thing done in
        // (App.js, List.js and stories array.) The only difference is that the "Item" variable
        // is a function (Not an array as in the case of the variable "stories") isn't sitting 
        // inside and also at the top of the List function in this case.
        <Item key={item.objectID} item = {item} />
      )}
    </ul>

  );
};



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

  return(
    <div style={{ textAlign: 'center' }}>
      <h1>My Hacker Stories </h1>
      <Search />
      <hr />
      {/* The stories array has been passed into the list components
      //  so that it can be accessed as a list property from the props 
      //  object in the List component function's signature.
      //  Take it from App and hide it in List.js sitting inside App.js 
      //  so that we can access it whenever needed elsewhere through the List.js component */}
      <List list = {stories}/>
    </div>

  )
};
export default App;



