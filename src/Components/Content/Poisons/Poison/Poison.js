import React from "react";
import poisonClass from "./poison.module.css";

const Poison = (props) => {
  return (
    <div className={poisonClass.Card}>
      <h3>{props.poison}</h3>
      <p>
        <span>Type: </span>
        {props.type}
      </p>

      <p>
        <span>Rarity: </span>
        {props.rarity}
      </p>
      <p>
        <span>Cost: </span>
        {props.cost}
      </p>
      <p>
        <span>Saving Throw: </span>
        {props.savingthrow}
      </p>
      {props.damage !== "-" ? (
        <p>
          <span>Damage: </span>
          {props.damage}
        </p>
      ) : null}
      {props.inflicts !== "-" ? (
        <p>
          <span>Inflicts: </span>
          {props.inflicts}
        </p>
      ) : null}
      {props.duration !== "-" ? (
        <p>
          <span>Duration: </span>
          {props.duration}
        </p>
      ) : null}
      <p>{props.effect}</p>
    </div>
  );
};

export default Poison;
