import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './components/sidebar';
import Patient from './pages/patient';
import Login from './pages/login';
import Studies from './pages/studies';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Patient />} />
            <Route path="/login" element={<Login/>} />
            <Route path='/studies' element={<Studies />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;