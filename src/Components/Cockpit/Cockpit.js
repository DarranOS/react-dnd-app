import React, { useState } from "react";
import classes from "./cockpit.module.css";
import Weapons from "../Content/Weapons/Weapons";
import weaponsData from "../Content/Weapons/weaponsData";
import Armors from "../Content/Armors/Armors";
import armorsData from "../Content/Armors/armorsData";
import Poisons from "../Content/Poisons/Poisons";
import poisonsData from "../Content/Poisons/poisonsData";

import Pclasses from "../Content/Pclasses/Pclasses";
import pclassData from "../Content/Pclasses/pclassData";

const Cockpit = () => {
  const [displayWeapons, setDisplayWeapons] = useState(false);
  const [displayArmor, setDisplayArmor] = useState(false);
  const [displayPoison, setDisplayPoison] = useState(false);
  const [displayPclass, setDisplayPclass] = useState(false);

  const freshWeaponsData = [...weaponsData];
  const freshArmorsData = [...armorsData];
  const freshPoisonsData = [...poisonsData];
  const freshPclassData = [...pclassData];

  const toggleWeaponsDisplay = () => {
    const doesShow = displayWeapons;
    setDisplayWeapons(!doesShow);
  };

  const toggleArmorDisplay = () => {
    const doesShow = displayArmor;
    setDisplayArmor(!doesShow);
  };

  const togglePoisonDisplay = () => {
    const doesShow = displayPoison;
    setDisplayPoison(!doesShow);
  };

  const togglePclassDisplay = () => {
    const doesShow = displayPclass;
    setDisplayPclass(!doesShow);
  };

  let weapons = null;
  if (displayWeapons) {
    weapons = (
      <div>
        <Weapons weapons={freshWeaponsData} />
      </div>
    );
  }

  let armors = null;
  if (displayArmor) {
    armors = (
      <div>
        <Armors armors={freshArmorsData} />
      </div>
    );
  }

  let poisons = null;
  if (displayPoison) {
    poisons = (
      <div>
        <Poisons poisons={freshPoisonsData} />
      </div>
    );
  }

  let pClasses = null;
  if (displayPclass) {
    pClasses = (
      <div>
        <Pclasses pclasses={freshPclassData} />
      </div>
    );
  }

  return (
    <div className={classes.Cockpit}>
      <div className={classes.CockpitHeader}>
        <div>
          <button onClick={() => toggleWeaponsDisplay()}>Show Weapons</button>
        </div>
        <div>
          <button onClick={() => toggleArmorDisplay()}>Show Armors</button>
        </div>
        <div>
          <button onClick={() => togglePoisonDisplay()}>Show Poisons</button>
        </div>
        <div>
          <button onClick={() => togglePclassDisplay()}>Show Classes</button>
        </div>
      </div>
      <div className={classes.CockpitBody}>
        {weapons}
        {armors}
        {poisons}
        {pClasses}
      </div>
    </div>
  );
};

export default Cockpit;
