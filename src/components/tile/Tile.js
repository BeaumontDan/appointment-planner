import React from "react";

export const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">

      <p
        className="tile-container"
      >
        {name}
      </p>

      {Object.values(description).map((value, index) => (

        <p
          key={index}
          className="tile"
        >
          {value}
        </p>
      ))};
      
    </div>
  );
};
