import React from "react";
import pclass from "./pclass.module.css";

const Pclass = (props) => {
  return (
    <div className={pclass.Card}>
      <h2>{props.name}</h2>
      <h4>Class Features</h4>
      <p>As a {props.name.toLowerCase()}, you gain the following class features.</p>
      Hit Points
      <p>
        <span>Hit Dice: </span>
        1d{props.hitDie} per {props.name.toLowerCase()} level
      </p>
      <p>
        <span>Hit Points at 1st Level:</span> {props.hitDie} + your Constitution modifier
      </p>
      <p>
        <span>Hit Points at Higher Levels:</span> 1d{props.hitDie} or (
        {props.hitDie / 2 + 1}) + your Constitution modifier per{" "}
        {props.name.toLowerCase()} level after 1st
      </p>
      <h4>Proficiencies</h4>
      <p>
        <span>Armor: </span> {props.armor}
      </p>
      <p>
        <span>Weapons:</span> {props.weapons}
      </p>
      <p>
        <span>Tools:</span> {props.tools}
      </p>
      <p>
        <span>Saving Throws:</span> {props.throws}
      </p>
      <p>
        <span>Skills:</span> Choose {props.skillNumber} from {props.skillList}
      </p>
      <p>
        <span>Equipment:</span>
      </p>
      <p>
        You start with the following equipment, in addition to the equipment granted by
        your background:
      </p>
      <p>
        (a) {props.equipment[0][0]} or (b) {props.equipment[0][1]}
      </p>
      <p>
        (a) {props.equipment[1][0]} or (b) {props.equipment[1][1]}
      </p>
      <p>
        (a) {props.equipment[2][0]} or (b) {props.equipment[2][1]}
      </p>
      <p>
        (a) {props.equipment[3][0]} or (b) {props.equipment[3][1]}
      </p>
      <h2>Class Features</h2>
      As a {props.name}, you gain the following class features, which are summarised in
      the {props.name} table.
    </div>
  );
};

export default Pclass;
