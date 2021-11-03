import React from "react";
import Uniqid from "uniqid";
import Poison from "./Poison/Poison";

const Poisons = (props) =>
  props.poisons.map((poison) => {
    return <Poison key={Uniqid.time()} {...poison} />;
  });

export default Poisons;
