// src/pages/ItemPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemPage: React.FC = () => {
  const { id } = useParams();
  // ... code de la page ...
  return (
    <div>
      {/* Contenu de la page d'objet */}
    </div>
  );
};

export default ItemPage;
