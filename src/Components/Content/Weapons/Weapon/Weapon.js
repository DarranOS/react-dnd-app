import React from "react";
import "./Weapon.css";

const Weapon = (props) => {
  let equippedStatus = "Weapon";
  if (props.class === "Equipped-weapon") equippedStatus = "Equipped-weapon";
  return (
    <div className={equippedStatus} onClick={props.click}>
      <h3>{props.name}</h3>

      <p>
        <strong>Cost: </strong>
        {props.cost}
      </p>
      <p>
        <strong>Damage: </strong>
        {props.damage}
      </p>
      <p>
        <strong>Weight: </strong>
        {props.weight}
      </p>
      <p>
        <strong>Properties:</strong> {props.properties}
      </p>
    </div>
  );
};
export default Weapon;
