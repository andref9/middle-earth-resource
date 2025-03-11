import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import CharacterDetails from "./CharacterDetails";

function Characters() {
  const [charData, setCharData] = useState([]);

  const getCharacters = async () => {
    const url = 'https://the-one-api.dev/v2/character?sort=name:asc';
    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_THE_ONE_API_KEY}`
        }
      });
      const data = await res.json();
      setCharData(data.docs);
    } catch(e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <Navbar />
      <h1>Character Index</h1>
      <p>This is a collection of every character mentioned in The Lord of the Rings and the Hobbit</p>
      <span>(Except Bill the pony...)</span>
      <section>
        {charData.map((person) => {
          return <CharacterDetails key={person._id} character={person} />
        })}
      </section>
    </>
  )
}

export default Characters;