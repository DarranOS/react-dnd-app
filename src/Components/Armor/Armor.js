import React from "react";
import "./Armor.css";

const Armor = (props) => {
  return (
    <div className="Armor">
      <h3>{props.armor}</h3>
      <p>
        <strong>Cost: </strong>
        {props.cost}
      </p>
      <p>
        <strong>Armor Class: </strong>
        {props.armorclass}
      </p>
      <p>
        <strong>Strength: </strong>
        {props.strength}
      </p>
      <p>
        <strong>Stealth: </strong>
        {props.stealth}
      </p>
      <p>
        <strong>Weight: </strong>
        {props.weight}
      </p>
      <p>
        <strong>Armor Range: </strong>
        {props.armorrange}
      </p>
      <p>
        <strong>Damage Reduction: </strong>
        {props.damreduction}
      </p>
    </div>
  );
};

export default Armor;
