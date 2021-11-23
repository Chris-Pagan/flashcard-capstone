import React, { useEffect, useState } from "react";
import DeckEditForm from "./DeckEditForm";
import { Link, useParams } from "react-router-dom";
import { readDeck } from "../utils/api";

function DeckEdit() {
  const [deck, setDeck] = useState({});
  const { deckId } = useParams();

  useEffect(() => {
    async function loadDeck() {
      const currentDeck = await readDeck(deckId);
      setDeck(currentDeck);
    }
    loadDeck();
  }, [deckId, setDeck]);

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item">
            <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
      <div>
        <h2 className="display-4">Edit Deck</h2>
        <DeckEditForm deck={deck} setDeck={setDeck}/>
      </div>
    </div>
  );
}


export default DeckEdit;