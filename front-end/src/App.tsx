import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './components/sidebar';
import Patient from './pages/patient';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Patient />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;