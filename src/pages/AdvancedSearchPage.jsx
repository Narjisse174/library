// src/pages/AdvancedSearchPage.jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchBooks } from '../services/openLibraryService';

const AdvancedSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  const handleSearch = async () => {
    try {
      const books = await fetchBooks(searchQuery);
      // Faire quelque chose avec les résultats de la recherche
    } catch (error) {
      // Gérer les erreurs de recherche
    }
  };

  return (
    <div>
      <h1>Advanced Search</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default AdvancedSearchPage;
