import { getHaulers } from "./database.js";

export const haulerList = () => {
  const haulers = getHaulers();
  let haulerHTML = `<ul>`;
  for (const hauler of haulers) {
    haulerHTML += `<li data-type="hauler"
                      data-id="${hauler.id}>
Hauler #${hauler.id} is named ${hauler.haulerName}, and is docked at ${hauler.dock_location}</li>`;
  }
  haulerHTML += `</ul>`
  return haulerHTML;
};
