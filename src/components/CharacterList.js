import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <div>
      {props.characters.map((character, i) => {
        return (
          <div>
            <Character key={i} name={character.name} />
          </div>
        );
      })}
    </div>
  );
};

export default CharacterList;
