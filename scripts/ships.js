import { getShips, getHaulers } from "./database.js";

export const shipList = () => {
  const ships = getShips();
  let shipHTML = `<ul>`;
  for (const ship of ships) {
    shipHTML += `<li data-type="ship"
                      data-id="${ship.id}"
                      data-haulerid="${ship.haulerId}">
Ship #${ship.id} is named ${ship.shipName}, and is being hauled by ${ship.hauler}</li>`;
  }
  shipHTML += `</ul>`;
  return shipHTML;
};

document.addEventListener("click", (shipClick) => {
  const clickedShip = shipClick.target;
  if (clickedShip.dataset.type === "ship") {
    const shipsHauler = clickedShip.dataset.haulerid;
    const haulers = getHaulers();
    for (const hauler of haulers) {
      if (parseInt(shipsHauler) === hauler.id) {
        window.alert(`This ships hauler is ${hauler.haulerName}`);
      }
    }
  }
});
