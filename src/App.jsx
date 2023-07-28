import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";





const App = () => {
  const [selectedContactId, setSelectedContactId] = useState(null)
  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList />
      )}
    </>
  );
}

export default App




// import { useState } from 'react';
// import ContactList from './components/ContactList';
// import SelectedContact from './components/SelectedContact';
// import './App.css';

// const App = () => {
//   const [selectedContactId, setSelectedContactId] = useState(null);

//   return (
//     <>
//       {selectedContactId ? (
//         <SelectedContact contactId={selectedContactId} />
//       ) : (
//         <ContactList setSelectedContactId={setSelectedContactId} />
//       )}
//     </>
//   );
// };

// export default App;