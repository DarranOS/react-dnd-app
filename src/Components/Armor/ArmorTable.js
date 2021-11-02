import React from "react";
import "./ArmorTable.css";

const ArmorTable = () => {
  return (
    <table className="ArmorTable">
      <tbody>
        <tr className="row-header">
          <th>Armor</th>
          <th>Cost</th>
          <th>Armor Class (AC)</th>
          <th>Strength</th>
          <th>Stealth</th>
          <th>Weight</th>
          <th>Armour Range</th>
          <th>Damage Reduction (DR)</th>
        </tr>

        <tr className="row-category">
          <th className="row-category">Light Armor</th>
          <th className="row-category"></th>
          <th className="row-category"></th>
          <th className="row-category"></th>
          <th className="row-category"></th>
          <th className="row-category"></th>
          <th className="row-category"></th>
          <th className="row-category"></th>
        </tr>
        <tr>
          <td>Padded</td>
          <td>5 gp</td>
          <td>11 + Dex modifier</td>
          <td>—</td>
          <td>Disadvantage</td>
          <td>8 lb.</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Leather</td>
          <td>10 gp</td>
          <td>11 + Dex modifier</td>
          <td>—</td>
          <td>—</td>
          <td>10 lb.</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Studded leather</td>
          <td>45 gp</td>
          <td>12 + Dex modifier</td>
          <td>—</td>
          <td>—</td>
          <td>13 lb.</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr className="row-category">
          <th className="row-category">Medium Armor</th>
          <th className="row-category"></th>
          <th className="row-category"></th>
          <th className="row-category"></th>
          <th className="row-category"></th>
          <th className="row-category"></th>
          <th className="row-category"></th>
          <th className="row-category"></th>
        </tr>
        <tr>
          <td>Hide</td>
          <td>10 gp</td>
          <td>12 + Dex modifier (max 2)</td>
          <td>—</td>
          <td>—</td>
          <td>12 lb.</td>
          <td>13-14</td>
          <td>-2</td>
        </tr>
        <tr>
          <td>Chain shirt</td>
          <td>50 gp</td>
          <td>13 + Dex modifier (max 2)</td>
          <td>—</td>
          <td>—</td>
          <td>20 lb.</td>
          <td>14-16</td>
          <td>-3</td>
        </tr>
        <tr>
          <td>Scale mail</td>
          <td>50 gp</td>
          <td>14 + Dex modifier (max 2)</td>
          <td>—</td>
          <td>Disadvantage</td>
          <td>45 lb.</td>
          <td>15-18</td>
          <td>-4</td>
        </tr>
        <tr>
          <td>Breastplate</td>
          <td>400 gp</td>
          <td>14 + Dex modifier (max 2)</td>
          <td>—</td>
          <td>—</td>
          <td>20 lb.</td>
          <td>15-18</td>
          <td>-4</td>
        </tr>
        <tr>
          <td>Half plate</td>
          <td>750 gp</td>
          <td>15 + Dex modifier (max 2)</td>
          <td>—</td>
          <td>Disadvantage</td>
          <td>40 lb.</td>
          <td>16-20</td>
          <td>-5</td>
        </tr>

        <tr>
          <th className="row-category">Heavy Armor</th>
          <th className="row-category"></th>
          <th className="row-category"></th>
          <th className="row-category"></th>
          <th className="row-category"></th>
          <th className="row-category"></th>
          <th className="row-category"></th>
          <th className="row-category"></th>
        </tr>

        <tr>
          <td>Ring mail</td>
          <td>30 gp</td>
          <td>14</td>
          <td>—</td>
          <td>Disadvantage</td>
          <td>40 lb.</td>
          <td>15-18</td>
          <td>-4</td>
        </tr>
        <tr>
          <td>Chain mail</td>
          <td>75 gp</td>
          <td>16</td>
          <td>Str 13</td>
          <td>Disadvantage</td>
          <td>55 lb.</td>
          <td>17-22</td>
          <td>-6</td>
        </tr>
        <tr>
          <td>Splint</td>
          <td>200 gp</td>
          <td>17</td>
          <td>Str 15</td>
          <td>Disadvantage</td>
          <td>60 lb.</td>
          <td>18-24</td>
          <td>-7</td>
        </tr>
        <tr>
          <td>Plate</td>
          <td>1,500 gp</td>
          <td>18</td>
          <td>Str 15</td>
          <td>Disadvantage</td>
          <td>65 lb.</td>
          <td>19-26</td>
          <td>-8</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ArmorTable;
