import { getShips } from "./database.js";

export const shipList = () => {
  const ships = getShips();
  let shipHTML = `<ul>`;
  for (const ship of ships) {
    shipHTML += `<li data-type="ship"
                      data-id="${ship.id}">
Ship #${ship.id} is named ${ship.shipName}, and is being hauled by ${ship.hauler}</li>`;
  }
  shipHTML += `</ul>`
  return shipHTML;
};
