import React, { useState } from 'react';


const dropdownListC = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
     const fetchCharacters = async () => {
      try {
        const response = await fetch('http://localhost:5173/api/characters');
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
     };

     fetchCharacters();
  }, []);

  const handleChange = (event) => {
    const characterId = parseInt(event.target.value, 10);
    const character = characters.find(c => c.id === characterId);
    setSelectedCharacter(character);
  };
  return (
    <div>
      <select onChange={handleChange}>
        <option value="">Select a character</option>
        {characters.map(character => (
          <option key={character.id} value={character.id}>
            {character.name}
          </option>
        ))}
      </select>
      {selectedCharacter && <CharacterDetails character={selectedCharacter} />}
    </div>
  )
}

  export default dropdownListC;