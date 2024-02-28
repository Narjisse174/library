// src/App.tsx
import React from 'react';
import Router from './router';

const App: React.FC = () => {
  // ... code principal de l'application ...
  return (
    <div>
      {/* Contenu global de l'application */}
      <Router />
    </div>
  );
};

export default App;
