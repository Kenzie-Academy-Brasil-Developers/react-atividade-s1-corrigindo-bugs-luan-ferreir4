import { useState } from "react";
import Card from "../card";
import "./style.css";

export const CardsList = ({ cardsList }) => {

  const [suitFilter, setSuitFilter] = useState('');
  const [isFiltered, setIsFiltered] = useState(false);

  const handleSuitFilter = (e) => {
    if (e.target.checked) {
      setSuitFilter(e.target.id);
      setIsFiltered(true);
    } else {
      setSuitFilter('');
      setIsFiltered(false);
    }
  };

  return (
    <div className='main-container'>
    <div className="filter-container">
      <p>Filtrar por naipe</p>
      <div>
        <input
          onClick={handleSuitFilter}
          type="radio"
          id="SPADES"
          name="suit"
        />
        <label for="SPADES">Espadas</label>

        <input
          onClick={handleSuitFilter}
          type="radio"
          id="HEARTS"
          name="suit"
        />
        <label for="HEARTS">Copas</label>

        <input onClick={handleSuitFilter} type="radio" id="CLUBS" name="suit" />
        <label for="CLUBS">Paus</label>

        <input
          onClick={handleSuitFilter}
          type="radio"
          id="DIAMONDS"
          name="suit"
        />
        <label for="DIAMONDS">Ouros</label>
      </div>
    </div>
      <div className='cards-container'>
        {!isFiltered &&
          cardsList.map((actual, index) => {
          return <Card card={actual} key={index} />;
          })
        } 
        {isFiltered &&
          cardsList
            .filter((actual) => actual.suit === suitFilter)
            .map((actual, index) => <Card card={actual} key={index} />)}
      </div>
    </div>
  );
};
