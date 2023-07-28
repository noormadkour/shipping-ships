import { getHaulers, getShips } from "./database.js";

export const haulerList = () => {
  const haulers = getHaulers();
  let haulerHTML = `<ul>`;
  for (const hauler of haulers) {
    haulerHTML += `<li data-type="hauler"
                      data-id="${hauler.id}">
Hauler #${hauler.id} is named ${hauler.haulerName}, and is docked at ${hauler.dock_location}</li>`;
  }
  haulerHTML += `</ul>`;
  return haulerHTML;
};

document.addEventListener("click", (haulerClick) => {
  const clickedHauler = haulerClick.target;
  if (clickedHauler.dataset.type === "hauler") {
    const haulerId = clickedHauler.dataset.id;
    let counter = 0;
    const ships = getShips();
    for (const ship of ships) {
      if (parseInt(haulerId) === ship.haulerId) {
        counter++;
      }
    }
    window.alert(`This hauler is carrying ${counter} shipping ships`);
  }
});
