import React from "react";
import Uniqid from "uniqid";
import Armor from "./Armor/Armor";

const Armors = (props) =>
  props.armors.map((armor) => {
    return <Armor key={Uniqid.time()} {...armor} />;
  });

export default Armors;
