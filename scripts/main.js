import { dockList } from "./docks.js";
import { haulerList } from "./haulers.js";
import { shipList } from "./ships.js";

const dockContainer = document.querySelector(".docks");
dockContainer.innerHTML = dockList();

const haulerContainer = document.querySelector(".haulers");
haulerContainer.innerHTML = haulerList();

const shipContainer = document.querySelector(".ships");
shipContainer.innerHTML = shipList();
