import React from "react";
import uniqid from "uniqid";
import Pclass from "./Pclass/Pclass";

const Pclasses = (props) =>
  props.pclasses.map((pclass) => {
    return <Pclass key={uniqid.time()} {...pclass} />;
  });

export default Pclasses;
