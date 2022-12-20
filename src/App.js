import { useState } from 'react';
import './App.css';
import AddUser from './Pages/AddUser';
import Home from './Pages/Home';
import Modal from './Pages/Modal';

function App() {
  const [toggle, setToggle] = useState(true);
  const [close, setClose] = useState(false);

  return (
    <div className="App">
      <Home toggle={toggle} setToggle={setToggle}></Home>
      <AddUser setClose={setClose}></AddUser>
      {!close && <Modal toggle={toggle} setToggle={setToggle} setClose={setClose}></Modal>}
    </div>
  );
}

export default App;
