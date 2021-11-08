uimport React from "react";
import PclassEquipmentLine from "./PclassEquipmentLine/PclassEquipmentLine";
// import uniqid from "uniqid";

const PclassEquipment = (props) =>
{
  let equipment = "hello";
  return (
    <ul>
      {props.equipment.map((slot) => (
    
        equipment = slot.length === 1 ? slot[0] : "Hello"; }
      console.log(equipment);
      <PclassEquipmentLine line={equipment} />;
      )
    </ul>
  );
});

export default PclassEquipment;
