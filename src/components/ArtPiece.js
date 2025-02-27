// src/components/ArtPiece.js
import React from 'react';

const ArtPiece = ({ art }) => {
  return (
    <div>
      <img src={art.image} alt={art.title} />
      <h2>{art.title}</h2>
      <p>{art.artist}</p>
      <p>{art.description}</p>
    </div>
  );
};

export default ArtPiece;
