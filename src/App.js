import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Edit from './pages/Edit';
import AddUser from './pages/AddUser'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/addUser" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
