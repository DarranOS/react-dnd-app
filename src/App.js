import "./App.css";
import { useState } from "react";

import uniqid from "uniqid";
import Weapon from "./Components/Weapon/Weapon";
import Armor from "./Components/Armor/Armor";
import weaponsData from "./Components/Weapon/weaponsData";
import armorsData from "./Components/Armor/armorsData";
import Search from "./Components/Search/Search";

function App() {
  const [displayWeapons, setDisplayWeapons] = useState(false);
  const [displayArmor, setDisplayArmor] = useState(false);
  const [weaponList, setWeaponList] = useState(weaponsData);
  const freshWeaponsData = [...weaponsData];

  const toggleWeaponsDisplay = () => {
    const doesShow = displayWeapons;
    setDisplayWeapons(!doesShow);
  };

  const toggleArmorDisplay = () => {
    const doesShow = displayArmor;
    setDisplayArmor(!doesShow);
  };

  const equipWeapon = (weaponIndex) => {
    const weapons = [...freshWeaponsData];
    weapons[weaponIndex] = { class: "Equipped-weapon", ...weapons[weaponIndex] };
    console.log();
    setWeaponList(weapons);
  };

  const style = {
    backgroundColor: "blue",
    color: "white",
  };

  let weapons = null;
  if (displayWeapons) {
    weapons = (
      <div>
        {weaponList.map((weapon, index) => {
          return (
            <Weapon key={uniqid.time()} click={() => equipWeapon(index)} {...weapon} />
          );
        })}
      </div>
    );
  }

  // style[":hover"] = {
  //   backgroundColor: "lightgreen",
  //   color: "black",
  // };

  let armors = null;
  if (displayArmor) {
    armors = (
      <div>
        <Armor {...armorsData[0]} />
        <Armor {...armorsData[1]} />
        <Armor {...armorsData[2]} />
        <Armor {...armorsData[3]} />
      </div>
    );
  }

  return (
    <div className="App">
      <div className="outside-div">
        <Search />
      </div>

      <div className="outside-div">
        <button style={style} onClick={() => toggleWeaponsDisplay()}>
          Show Weapons
        </button>
        {weapons}
      </div>
      <div className="outside-div">
        <button onClick={() => toggleArmorDisplay()}>Show Armors</button>
        {armors}
      </div>
    </div>
  );
}

export default App;
