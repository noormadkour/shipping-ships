import { dockList } from "./docks.js";
import { haulerList } from "./haulers.js";
import { shipList } from "./ships.js";

const dockContainer = document.querySelector(".docks");
const haulerContainer = document.querySelector(".haulers");
const shipContainer = document.querySelector(".ships");

dockContainer.innerHTML = dockList();
haulerContainer.innerHTML = haulerList();
shipContainer.innerHTML = shipList();

