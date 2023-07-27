import { getDocks } from "./database.js";

export const dockList = () => {
    const docks = getDocks();
    let docksHTML = `<ul>`;
    for (const dock of docks){
        docksHTML += `<li data-type="dock"
                          data-id="${dock.id}
> Dock #${dock.id} is located in ${dock.location}, and can hold ${dock.volume} million tons of cargo</li>`
    }

}