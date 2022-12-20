import './App.css';
import AddUser from './Pages/AddUser';
import Home from './Pages/Home';
import Modal from './Pages/Modal';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <AddUser></AddUser>
      <Modal></Modal>
    </div>
  );
}

export default App;
