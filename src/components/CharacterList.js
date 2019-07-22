import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <div>
      {props.characters.map((character, i) => {
        return (
          <div key={i}>
            <Character name={character.name} />
          </div>
        );
      })}
    </div>
  );
};

export default CharacterList;
