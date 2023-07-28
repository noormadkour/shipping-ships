import { getDocks, getHaulers } from "./database.js";

export const dockList = () => {
  const docks = getDocks();
  let docksHTML = `<ul>`;
  for (const dock of docks) {
    docksHTML += `<li data-type="dock"
                      data-id="${dock.id}"
                      data-location="${dock.location}">
Dock #${dock.id} is located in ${dock.location}, and can hold ${dock.volume} million tons of cargo</li>`;
  }
  docksHTML += `</ul>`;
  return docksHTML;
};

document.addEventListener("click", (dockClick) => {
  const clickedDock = dockClick.target;
  if (clickedDock.dataset.type === "dock") {
    const dockId = clickedDock.dataset.id;
    const haulers = getHaulers();
    let haulerString = `The ${clickedDock.dataset.location} dock is currently unloading `;
    for (const hauler of haulers) {
      if (parseInt(dockId) === hauler.dock_id) {
        haulerString += `${hauler.haulerName} `;
      }
    }
    window.alert(haulerString)
  }
});
