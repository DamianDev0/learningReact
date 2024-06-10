import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
//creamos un componente cpara botones
// const CreateButton = ({ text }) => {
//   return (
//     <button>{text}</button>
//   );
// };

// root.render(
//  <React.Fragment>
//    <CreateButton text="Create" />
//    <CreateButton text="Update" />
//    <CreateButton text="Delete" />
//  </React.Fragment>
// );

root.render(
  <App />
)
