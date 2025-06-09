import React, { useState, useEffect, useRef } from 'react';
import skips from './data/skips';
import SkipCard from './components/SkipCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const selectedRef = useRef(null);

  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-white' : 'bg-light text-dark';
  }, [darkMode]);

  useEffect(() => {
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedId]);

  const handleSelect = (id) => {
    setSelectedId(id);
    const selected = skips.find(s => s.id === id);
    toast.success(`Selected ${selected.size} Yard Skip!`);
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2>Choose Your Skip</h2>
          <p>Select a skip size to continue.</p>
        </div>
        <button className="btn btn-outline-secondary" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <div className="row">
        {skips.map(skip => (
          <div key={skip.id} className="col-md-4" ref={skip.id === selectedId ? selectedRef : null}>
            <SkipCard skip={skip} selected={skip.id === selectedId} onSelect={handleSelect} />
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-primary btn-lg">Continue</button>
      </div>

      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}

export default App;
