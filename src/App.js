import './App.css';
import Header from './pages/shared/Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'; // Use Routes and Route for routing

import Login from './pages/main/Login/Login';
import Home  from './pages/main/Home/Home';



function App() {


  return (
    <div className="App">
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
