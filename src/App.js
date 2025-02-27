// src/App.js
import React, { useState } from 'react';
import './App.css'; 
import Gallery from './components/Gallery';
import Navigation from './components/Navigation';
import ArtPiece from './components/ArtPiece';

const App = () => {
  const [currentArtIndex, setCurrentArtIndex] = useState(0);

  const artCollection = [
    {
      image: 'path/to/image1.jpg',
      title: 'Art Piece 1',
      artist: 'Artist 1',
      description: 'Description of Art Piece 1',
    },
    {
      image: 'path/to/image2.jpg',
      title: 'Art Piece 2',
      artist: 'Artist 2',
      description: 'Description of Art Piece 2',
    },
    // Add more art pieces here
  ];

  const handleNavigate = (direction) => {
    if (direction === 'next') {
      setCurrentArtIndex((prevIndex) => (prevIndex + 1) % artCollection.length);
    } else {
      setCurrentArtIndex((prevIndex) => (prevIndex - 1 + artCollection.length) % artCollection.length);
    }
  };

  return (
    <div>
      <Gallery />
      <Navigation onNavigate={handleNavigate} />
      <ArtPiece art={artCollection[currentArtIndex]} />
    </div>
  );
};

export default App;
