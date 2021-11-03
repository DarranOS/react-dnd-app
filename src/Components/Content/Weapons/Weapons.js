import React from "react";
import Uniqid from "uniqid";
import Weapon from "./Weapon/Weapon";

const Weapons = (props) =>
  props.weapons.map((weapon) => {
    return <Weapon key={Uniqid.time()} {...weapon} />;
  });

export default Weapons;
